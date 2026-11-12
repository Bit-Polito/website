"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

/**
 * Newsletter sign-up form. Sends the email to /api/newsletter (Brevo).
 *
 * @param {"card"|"footer"} variant  "card" = bordered box for page content,
 *                                    "footer" = compact version on the footer's blue background.
 * @param {string} titleKey           i18n key for the heading.
 * @param {string} textKey            i18n key for the short description.
 * @param {string} className          extra classes for the outer element.
 */
export default function NewsletterSignup({
  variant = "card",
  titleKey = "newsletter-title",
  textKey = "newsletter-text",
  className = "",
}) {
  const { t } = useTranslation();
  const id = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | subscribed | confirm | error
  const [errorKey, setErrorKey] = useState("");

  const isFooter = variant === "footer";
  const isDone = state === "subscribed" || state === "confirm";

  async function handleSubmit(event) {
    event.preventDefault();
    if (!consent) {
      setState("error");
      setErrorKey("newsletter-consent-required");
      return;
    }
    setState("sending");
    setErrorKey("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, consent, company }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setState(data.status === "confirm" ? "confirm" : "subscribed");
        return;
      }
      setState("error");
      setErrorKey(data.error === "invalid_email" ? "newsletter-invalid-email" : "newsletter-error");
    } catch {
      setState("error");
      setErrorKey("newsletter-error");
    }
  }

  const wrapperClass = isFooter
    ? "w-full max-w-2xl px-2 text-center"
    : "rounded-xl border-2 border-blue-dark bg-white p-6 sm:p-8 lg:p-10 dark:border-white dark:bg-blue-dark";
  const inputClass = isFooter
    ? "border-white bg-white text-blue-dark placeholder:text-blue-dark/60 dark:border-blue-dark dark:bg-blue-dark dark:text-white dark:placeholder:text-white/60"
    : "border-blue-dark bg-white text-blue-dark placeholder:text-blue-dark/50 dark:border-white dark:bg-blue-dark dark:text-white dark:placeholder:text-white/60";
  const focusClass = isFooter
    ? "focus-visible:outline-white dark:focus-visible:outline-blue-dark"
    : "focus-visible:outline-blue-dark dark:focus-visible:outline-white";

  return (
    <section className={`${wrapperClass} ${className}`} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={isFooter ? "text-2xl font-semibold sm:text-3xl" : "text-3xl font-semibold tracking-tight sm:text-4xl"}>
        {t(titleKey)}
      </h2>
      <p className={`mt-3 leading-relaxed ${isFooter ? "font-normal opacity-90" : "max-w-2xl text-lg"}`}>{t(textKey)}</p>

      {isDone ? (
        <p role="status" className="mt-6 text-lg font-bold">
          {t(state === "confirm" ? "newsletter-success-confirm" : "newsletter-success")}
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-6">
          <div className={`flex flex-col gap-3 sm:flex-row ${isFooter ? "sm:justify-center" : ""}`}>
            <label htmlFor={`${id}-email`} className="sr-only">{t("newsletter-email-label")}</label>
            <input
              id={`${id}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("newsletter-placeholder")}
              className={`min-w-0 flex-1 rounded-md border-[3px] px-4 py-3 text-base font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${inputClass} ${focusClass}`}
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className={`${isFooter ? "btn-b" : "btn-d"} rounded-md px-6 py-3 text-base disabled:cursor-wait disabled:opacity-70`}
            >
              {t(state === "sending" ? "newsletter-sending" : "newsletter-submit")}
            </button>
          </div>

          {/* Honeypot: hidden from people, catches simple spam bots. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor={`${id}-company`}>Company</label>
            <input id={`${id}-company`} type="text" name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
          </div>

          <div className={`mt-4 flex items-start gap-3 text-sm font-normal leading-relaxed ${isFooter ? "justify-center text-left" : ""}`}>
            <input
              id={`${id}-consent`}
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className={`mt-1 h-4 w-4 shrink-0 cursor-pointer ${isFooter ? "accent-white dark:accent-blue-dark" : "accent-blue-dark dark:accent-white"}`}
            />
            <label htmlFor={`${id}-consent`} className="cursor-pointer">
              {t("newsletter-consent")}{" "}
              <Link href="/privacy" className="font-bold underline underline-offset-4">Privacy Policy</Link>
            </label>
          </div>

          {state === "error" && errorKey && (
            <p role="alert" className="mt-3 text-sm font-bold">{t(errorKey)}</p>
          )}
        </form>
      )}
    </section>
  );
}
