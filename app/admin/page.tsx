import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [
    totalBlogs,
    publishedBlogs,
    totalSubscribers,
    activeSubscribers,
  ] = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { published: true } }),
    prisma.subscriber.count(),
    prisma.subscriber.count({ where: { active: true } }),
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalBlogs}</div>
          <div className="text-gray-700 dark:text-gray-300 font-medium">Total Blogs</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{publishedBlogs} published</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{totalSubscribers}</div>
          <div className="text-gray-700 dark:text-gray-300 font-medium">Subscribers</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{activeSubscribers} active</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/admin/blogs"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Manage Blogs</h2>
          <p className="text-gray-600 dark:text-gray-400">Create, edit, and publish blog posts</p>
        </Link>

        <Link
          href="/admin/subscribers"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg hover:border-orange-500 dark:hover:border-orange-400 transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Manage Subscribers</h2>
          <p className="text-gray-600 dark:text-gray-400">View and manage your email subscribers</p>
        </Link>

        <Link
          href="/admin/series"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg hover:border-teal-500 dark:hover:border-teal-400 transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Manage Series</h2>
          <p className="text-gray-600 dark:text-gray-400">Group related blog posts into series</p>
        </Link>
      </div>
    </div>
  );
}
