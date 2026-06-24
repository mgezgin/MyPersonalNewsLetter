import Link from "next/link";
import { prisma } from "@/lib/prisma";
import SubscribeForm from "@/components/SubscribeForm";

export const dynamic = 'force-dynamic';

const TAG_COLORS: Record<string, string> = {
  ai:          "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  cloud:       "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  advance:     "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  programming: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

const TAGS = ["ai", "cloud", "advance", "programming"];

export default async function Home() {
  const recentBlogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-20 py-12 px-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border border-blue-100 dark:border-gray-700">
        <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Personal Blog</span>
        <h1 className="text-5xl font-bold mb-5 text-gray-900 dark:text-gray-100 leading-tight">
          Ideas, Writing &amp; Things<br className="hidden sm:block" /> Worth Sharing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2 max-w-xl mx-auto">
          A personal blog on technology, software, and the things I find interesting.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-500 mb-10">
          No spam. Unsubscribe any time.
        </p>
        <div className="max-w-md mx-auto">
          <SubscribeForm />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
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
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 flex-1">{blog.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm mt-auto"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 inline-block transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Browse by Tag</h2>
        <div className="flex flex-wrap gap-3">
          {TAGS.map((t) => (
            <Link
              key={t}
              href={`/blog?tag=${t}`}
              className={`px-4 py-2 rounded-full font-semibold capitalize text-sm hover:opacity-80 transition-opacity ${TAG_COLORS[t] ?? "bg-gray-100 text-gray-600"}`}
            >
              {t}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
