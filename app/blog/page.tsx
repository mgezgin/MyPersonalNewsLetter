import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

const TAGS = ["ai", "cloud", "advance", "programming"] as const;

const TAG_COLORS: Record<string, string> = {
  ai:          "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  cloud:       "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  advance:     "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  programming: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;

  const blogs = await prisma.blog.findMany({
    where: {
      published: true,
      ...(tag && { tags: { has: tag } }),
    },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Blog</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">All posts, latest first.</p>

        <div className="mb-8 flex gap-2 flex-wrap">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-lg transition-colors ${!tag
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            All
          </Link>
          {TAGS.map((t) => (
            <Link
              key={t}
              href={`/blog?tag=${t}`}
              className={`px-4 py-2 rounded-lg capitalize transition-colors ${tag === t
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {blog.tags.map((t) => (
                  <span
                    key={t}
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${TAG_COLORS[t] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 leading-snug flex-1">
                {blog.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm"
                >
                  Read More →
                </Link>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {blog.publishedAt
                    ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </span>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-gray-500 text-lg">No posts yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
