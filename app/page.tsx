import Link from "next/link";
import { prisma } from "@/lib/prisma";
import SubscribeForm from "@/components/SubscribeForm";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const recentBlogs = await prisma.blog.findMany({
    where: { published: true },
    include: { category: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { blogs: true },
      },
    },
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Personal Newsletter
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Subscribe to get the latest blog posts delivered to your inbox
        </p>
        <div className="max-w-md mx-auto">
          <SubscribeForm />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-blue-600 mb-2">
                {blog.category.name}
              </div>
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            View All Posts
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog?category=${category.slug}`}
              className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-600">
                {category._count.blogs} posts
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
