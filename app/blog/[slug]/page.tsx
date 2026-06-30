import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";

export const dynamic = 'force-dynamic';

const TAG_COLORS: Record<string, string> = {
  ai:          "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  cloud:       "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  advance:     "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  programming: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug, published: true },
    include: {
      series: {
        include: {
          blogs: {
            where: { published: true },
            orderBy: { seriesOrder: "asc" },
            select: { id: true, title: true, slug: true, seriesOrder: true },
          },
        },
      },
    },
  });

  if (!blog) {
    notFound();
  }

  const seriesPosts = blog.series?.blogs ?? [];
  const currentIndex = seriesPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < seriesPosts.length - 1 ? seriesPosts[currentIndex + 1] : null;
  const totalParts = seriesPosts.length;
  const currentPart = currentIndex + 1;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        {blog.series && (
          <div className="mb-6 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-xl px-5 py-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400">
                Series
              </span>
              <span className="text-xs text-blue-400 dark:text-blue-500">
                · Part {currentPart} of {totalParts}
              </span>
            </div>
            <p className="font-semibold text-blue-900 dark:text-blue-100">{blog.series.title}</p>
            {blog.series.description && (
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-0.5">{blog.series.description}</p>
            )}
          </div>
        )}

        <article>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {blog.tags.map((t) => (
              <Link
                key={t}
                href={`/blog?tag=${t}`}
                className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize hover:opacity-80 transition-opacity ${TAG_COLORS[t] ?? "bg-gray-100 text-gray-600"}`}
              >
                {t}
              </Link>
            ))}
          </div>

          <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight">
            {blog.title}
          </h1>

          <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">
            {blog.publishedAt
              ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        {blog.series && (prevPost || nextPost) && (
          <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              More in "{blog.series.title}"
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group flex flex-col gap-1 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                  >
                    <span className="text-xs text-gray-400 dark:text-gray-500">← Part {prevPost.seriesOrder}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Link>
                )}
              </div>
              <div>
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex flex-col gap-1 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-600 transition-colors text-right"
                  >
                    <span className="text-xs text-gray-400 dark:text-gray-500">Part {nextPost.seriesOrder} →</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
