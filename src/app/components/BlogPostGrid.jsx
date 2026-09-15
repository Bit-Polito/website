"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { localizeContent } from "../data/localizedContent";

const POSTS_PER_PAGE = 9;

export default function BlogPostGrid({ posts }) {
  const { t, i18n } = useTranslation();
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const displayedPosts = posts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < posts.length;

  return (
    <>
      <section aria-label="Articoli del blog" className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {displayedPosts.map((post) => {
          const localizedPost = localizeContent({ ...post, type: "article" }, i18n.resolvedLanguage || i18n.language);
          return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex min-h-full flex-col overflow-hidden rounded-xl border-2 border-blue-dark bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-dark dark:border-white dark:bg-blue-dark dark:hover:shadow-white/10"
          >
            <div className="px-6 pb-5 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-dark/65 dark:text-white/65">{localizedPost.date}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">{localizedPost.title}</h2>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden border-y-2 border-blue-dark dark:border-white">
              <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col px-6 py-6">
              <p className="text-base leading-relaxed sm:text-lg">{localizedPost.description}</p>
              <span className="mt-6 text-sm font-bold uppercase tracking-[0.14em]">{t("blog-read")} <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        )})}
      </section>

      {hasMorePosts && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisiblePosts((current) => current + POSTS_PER_PAGE)}
            className="btn-w rounded-md px-7 py-3 text-base"
          >
            {t("blog-more")}
          </button>
        </div>
      )}
    </>
  );
}
