import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogShell from "../../components/BlogShell";
import blogPosts, { getBlogPost } from "../../data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return post ? { title: `${post.title} | BitPolito`, description: post.description } : {};
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <BlogShell>
      <article className="mx-auto mt-8 max-w-4xl sm:mt-10 lg:mt-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-dark">
          <span aria-hidden="true">←</span> Tutti gli articoli
        </Link>
        <header className="mt-10">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold uppercase tracking-[0.14em] text-blue-dark/70 dark:text-white/70">
            <span>{post.date}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed sm:text-2xl">{post.description}</p>
        </header>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border-2 border-blue-dark dark:border-white">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 896px" className="object-cover" />
        </div>
        <div className="mt-12 space-y-10 text-lg leading-relaxed sm:text-xl">
          {post.content.map((section, index) => (
            <section key={section.heading ?? `section-${index}`}>
              {section.heading && <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{section.heading}</h2>}
              <div className="mt-4 space-y-5">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list && (
                  <ul className="list-disc space-y-2 pl-6 marker:text-blue-dark dark:marker:text-white">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.afterList && <p>{section.afterList}</p>}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-xl border-2 border-blue-dark bg-white p-6 dark:border-white dark:bg-blue-dark">
          <p className="text-xl font-semibold">Per informazioni e iscrizioni</p>
          <p className="mt-2">Politecnico di Torino – Executive Master “Bitcoin: tecnologia e protocolli”</p>
          <a href={post.courseUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold underline underline-offset-4 hover:opacity-75">
            Visita la pagina del corso <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </BlogShell>
  );
}
