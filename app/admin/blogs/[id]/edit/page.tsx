"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import MarkdownEditor from "@/components/MarkdownEditor";

interface Category {
    id: string;
    name: string;
}

export default function EditBlogPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [categories, setCategories] = useState<Category[]>([]);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        excerpt: "",
        categoryId: "",
        published: false,
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");







    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/api/categories");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };

        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blogs/${id}`);
                if (!response.ok) throw new Error("Failed to fetch blog");
                const data = await response.json();
                setFormData({
                    title: data.title,
                    content: data.content,
                    excerpt: data.excerpt || "",
                    categoryId: data.categoryId,
                    published: data.published,
                });
            } catch (error) {
                setError("Failed to load blog post");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            Promise.all([fetchCategories(), fetchBlog()]);
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError("");

        try {
            const response = await fetch(`/api/blogs/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                router.push("/admin/blogs");
                router.refresh();
            } else {
                setError(data.error || "Failed to update blog");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8">Loading...</div>;
    if (error && !formData.title) return <div className="p-8 text-red-600">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                )}

                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter blog title"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <select
                                required
                                value={formData.categoryId}
                                onChange={(e) =>
                                    setFormData({ ...formData, categoryId: e.target.value })
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Excerpt (optional)
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) =>
                                setFormData({ ...formData, excerpt: e.target.value })
                            }
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="A short summary of your blog post"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Content
                        </label>
                        <MarkdownEditor
                            value={formData.content}
                            onChange={(value) =>
                                setFormData({ ...formData, content: value })
                            }
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="published"
                            checked={formData.published}
                            onChange={(e) =>
                                setFormData({ ...formData, published: e.target.checked })
                            }
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                            Publish immediately
                        </label>
                    </div>
                </div>

                <div className="flex gap-4 justify-end">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 font-medium"
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
}
