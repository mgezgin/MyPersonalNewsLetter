import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categorySlug = searchParams.category;

  const blogs = await prisma.blog.findMany({
    where: {
      published: true,
      ...(categorySlug && {
        category: {
          slug: categorySlug,
        },
      }),
    },
    include: { category: true },
    orderBy: { publishedAt: "desc" },
  });

  const categories = await prisma.category.findMany();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

      <div className="mb-8 flex gap-2 flex-wrap">
        <Link
          href="/blog"
          className={`px-4 py-2 rounded-lg ${
            !categorySlug
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog?category=${category.slug}`}
            className={`px-4 py-2 rounded-lg ${
              categorySlug === category.slug
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-sm text-blue-600 mb-2">
              {blog.category.name}
            </div>
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
            <div className="flex justify-between items-center">
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </Link>
              <span className="text-sm text-gray-500">
                {blog.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString()
                  : ""}
              </span>
            </div>
          </div>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No blog posts found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
