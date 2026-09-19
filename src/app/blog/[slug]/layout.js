import blogPosts, { getBlogPost } from "../../data/blogPosts";
import { getBlogPostContent } from "../../data/blogPostContent";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const content = getBlogPostContent(slug, "it");
  return { title: `${content.title} | BitPolito`, description: content.description };
}

export default function BlogSlugLayout({ children }) {
  return children;
}
