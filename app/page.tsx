import Link from "next/link";
import { prisma } from "@/lib/prisma";

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
    take: 5,
  });

  const [featured, ...rest] = recentBlogs;

  return (
    <div className="container mx-auto px-4 py-14 max-w-5xl">

      {/* Hero */}
      <section className="mb-20">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
          Personal Blog
        </p>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 dark:text-gray-100 leading-[1.08] tracking-tight mb-6">
          Ideas &amp;<br />Things Worth<br />Sharing
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md">
            Writing on technology, software engineering, and whatever catches my curiosity.
          </p>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            All Posts
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
            Latest
          </h2>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 sm:p-10 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize ${TAG_COLORS[t] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                {featured.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6 max-w-2xl">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                Read article
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </span>
            </article>
          </Link>
        </section>
      )}

      {/* Recent Posts Grid */}
      {rest.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
            More Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} className="group block">
                <article className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-colors flex flex-col">
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
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                    {blog.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View all posts
            </Link>
          </div>
        </section>
      )}

      {/* Browse by Tag */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
          Browse by Topic
        </h2>
        <div className="flex flex-wrap gap-3">
          {TAGS.map((t) => (
            <Link
              key={t}
              href={`/blog?tag=${t}`}
              className={`px-4 py-2 rounded-full font-semibold capitalize text-sm hover:opacity-75 transition-opacity ${TAG_COLORS[t] ?? "bg-gray-100 text-gray-600"}`}
            >
              {t}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
