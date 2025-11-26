import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function NewslettersPage() {
  const newsletters = await prisma.newsletter.findMany({
    where: { sent: true },
    include: {
      blogs: {
        include: {
          blog: {
            include: {
              category: true,
            },
          },
        },
        orderBy: { order: "asc" },
      },
    },
    orderBy: { sentAt: "desc" },
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Past Newsletters</h1>

      <div className="space-y-6">
        {newsletters.map((newsletter) => (
          <div
            key={newsletter.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{newsletter.title}</h2>
                {newsletter.description && (
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{newsletter.description}</p>
                )}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {newsletter.sentAt
                  ? new Date(newsletter.sentAt).toLocaleDateString()
                  : ""}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                Included Blog Posts:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {newsletter.blogs.map((nb) => (
                  <div
                    key={nb.id}
                    className="border border-gray-200 dark:border-gray-700 rounded p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="text-xs text-blue-600 dark:text-blue-400 mb-1 font-semibold">
                      {nb.blog.category.name}
                    </div>
                    <Link
                      href={`/blog/${nb.blog.slug}`}
                      className="font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {nb.blog.title}
                    </Link>
                    {nb.blog.excerpt && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {nb.blog.excerpt}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {newsletters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No newsletters have been sent yet.
          </p>
        </div>
      )}
    </div>
  );
}
