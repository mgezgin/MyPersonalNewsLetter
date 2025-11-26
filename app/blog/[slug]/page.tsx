import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug, published: true },
    include: { category: true },
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link
        href="/blog"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Blog
      </Link>

      <article className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <Link
            href={`/blog?category=${blog.category.slug}`}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {blog.category.name}
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="text-gray-600 mb-8">
          {blog.publishedAt
            ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            : ""}
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
