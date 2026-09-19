import events, { getEvent } from "../../data/events";
import { getEventContent } from "../../data/eventContent";

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  const content = getEventContent(slug, "it");
  return { title: `${content.title} | BitPolito`, description: content.description };
}

export default function EventSlugLayout({ children }) {
  return children;
}
