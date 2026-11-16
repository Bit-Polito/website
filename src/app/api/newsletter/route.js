/**
 * Newsletter sign-up endpoint.
 *
 * Receives `{ email, consent, company }` from the NewsletterSignup form and
 * adds the address to a Brevo contact list. The Brevo API key never reaches
 * the browser: it is read from server-side environment variables.
 *
 * Environment variables (set them in Vercel → Settings → Environment Variables):
 * - BREVO_API_KEY            required. Brevo → SMTP & API → API keys.
 * - BREVO_LIST_ID            required. Numeric id of the Brevo list (Contacts → Lists).
 * - BREVO_DOI_TEMPLATE_ID    optional. If set, Brevo sends a confirmation email
 *                            (double opt-in) using this template id, and the contact
 *                            is added to the list only after clicking the link.
 * - BREVO_DOI_REDIRECT_URL   optional. Page shown after confirming (default: https://bitpolito.it/).
 */

const BREVO_API = "https://api.brevo.com/v3";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "invalid_request" }, 400);
  }

  const email = typeof payload?.email === "string" ? payload.email.trim().toLowerCase() : "";

  // Hidden "company" field: real people never fill it, bots usually do.
  if (payload?.company) {
    return json({ status: "subscribed" });
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return json({ error: "invalid_email" }, 400);
  }
  if (payload?.consent !== true) {
    return json({ error: "consent_required" }, 400);
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    console.error("Newsletter: BREVO_API_KEY or BREVO_LIST_ID is missing or invalid");
    return json({ error: "not_configured" }, 503);
  }

  const doiTemplateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
  const useDoubleOptIn = Number.isInteger(doiTemplateId) && doiTemplateId > 0;

  const endpoint = useDoubleOptIn ? `${BREVO_API}/contacts/doubleConfirmation` : `${BREVO_API}/contacts`;
  const body = useDoubleOptIn
    ? {
        email,
        includeListIds: [listId],
        templateId: doiTemplateId,
        redirectionUrl: process.env.BREVO_DOI_REDIRECT_URL || "https://bitpolito.it/",
      }
    : { email, listIds: [listId], updateEnabled: true };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return json({ status: useDoubleOptIn ? "confirm" : "subscribed" });
    }

    const detail = await response.json().catch(() => ({}));
    // Already a contact: treat as success so we don't reveal who is subscribed.
    if (detail?.code === "duplicate_parameter") {
      return json({ status: useDoubleOptIn ? "confirm" : "subscribed" });
    }
    console.error("Newsletter: Brevo error", response.status, detail?.code, detail?.message);
    return json({ error: "provider_error" }, 502);
  } catch (error) {
    console.error("Newsletter: request to Brevo failed", error);
    return json({ error: "provider_error" }, 502);
  }
}
