import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function SeriesListPage() {
  const allSeries = await prisma.series.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { blogs: true } },
    },
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Series</h1>
        <Link
          href="/admin/series/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
        >
          New Series
        </Link>
      </div>

      {allSeries.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          No series yet.{" "}
          <Link href="/admin/series/new" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {allSeries.map((s) => (
            <div
              key={s.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 flex items-center justify-between"
            >
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-gray-100">{s.title}</h2>
                {s.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                    {s.description}
                  </p>
                )}
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {s._count.blogs} {s._count.blogs === 1 ? "post" : "posts"}
                </p>
              </div>
              <Link
                href={`/admin/series/${s.id}/edit`}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline shrink-0 ml-4"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
