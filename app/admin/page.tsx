import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const stats = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { published: true } }),
    prisma.category.count(),
    prisma.newsletter.count(),
    prisma.newsletter.count({ where: { sent: true } }),
    prisma.subscriber.count(),
    prisma.subscriber.count({ where: { active: true } }),
  ]);

  const [
    totalBlogs,
    publishedBlogs,
    totalCategories,
    totalNewsletters,
    sentNewsletters,
    totalSubscribers,
    activeSubscribers,
  ] = stats;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600">{totalBlogs}</div>
          <div className="text-gray-600">Total Blogs</div>
          <div className="text-sm text-gray-500 mt-1">
            {publishedBlogs} published
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-600">
            {totalCategories}
          </div>
          <div className="text-gray-600">Categories</div>
        </div>
        <div className="bg-purple-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-purple-600">
            {totalNewsletters}
          </div>
          <div className="text-gray-600">Newsletters</div>
          <div className="text-sm text-gray-500 mt-1">
            {sentNewsletters} sent
          </div>
        </div>
        <div className="bg-orange-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-orange-600">
            {totalSubscribers}
          </div>
          <div className="text-gray-600">Subscribers</div>
          <div className="text-sm text-gray-500 mt-1">
            {activeSubscribers} active
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/admin/blogs"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2">Manage Blogs</h2>
          <p className="text-gray-600">
            Create, edit, and publish blog posts
          </p>
        </Link>

        <Link
          href="/admin/categories"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2">Manage Categories</h2>
          <p className="text-gray-600">
            Organize your blog posts with categories
          </p>
        </Link>

        <Link
          href="/admin/newsletters"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2">Manage Newsletters</h2>
          <p className="text-gray-600">
            Create newsletters and send them to subscribers
          </p>
        </Link>

        <Link
          href="/admin/subscribers"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2">Manage Subscribers</h2>
          <p className="text-gray-600">View and manage your email subscribers</p>
        </Link>
      </div>
    </div>
  );
}
