"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Blog {
  id: string;
  title: string;
  published: boolean;
  category: {
    name: string;
  };
}

export default function NewNewsletterPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    blogIds: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs?published=true");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  const handleBlogToggle = (blogId: string) => {
    setFormData((prev) => ({
      ...prev,
      blogIds: prev.blogIds.includes(blogId)
        ? prev.blogIds.filter((id) => id !== blogId)
        : [...prev.blogIds, blogId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.blogIds.length === 0) {
      setError("Please select at least one blog post");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin/newsletters");
      } else {
        setError(data.error || "Failed to create newsletter");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Create New Newsletter</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-lg shadow-md"
      >
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Newsletter Title
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Weekly Tech Digest - January 2024"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description (optional)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="A brief description of this newsletter"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Blog Posts
          </label>
          <div className="border border-gray-300 rounded-lg max-h-96 overflow-y-auto p-4 space-y-2">
            {blogs.map((blog) => (
              <label
                key={blog.id}
                className="flex items-center p-3 hover:bg-gray-50 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.blogIds.includes(blog.id)}
                  onChange={() => handleBlogToggle(blog.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div className="ml-3">
                  <div className="font-medium text-gray-900">{blog.title}</div>
                  <div className="text-sm text-gray-500">
                    {blog.category.name}
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="text-sm text-gray-600 mt-2">
            {formData.blogIds.length} blog post(s) selected
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-semibold"
          >
            {loading ? "Creating..." : "Create Newsletter"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
