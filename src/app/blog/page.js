"use client";

import BlogShell from "../components/BlogShell";
import BlogPostGrid from "../components/BlogPostGrid";
import blogPosts from "../data/blogPosts";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

export default function BlogPage() {
  const { t } = useTranslation();
  return (
    <BlogShell>
      <section className="mt-8 sm:mt-10 lg:mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-dark/70 dark:text-white/70">BitPolito</p>
        <h1 className="mt-3 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">Blog</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl">
          {t("blog-intro")}
        </p>
      </section>

      <BlogPostGrid posts={blogPosts} />
    </BlogShell>
  );
}
