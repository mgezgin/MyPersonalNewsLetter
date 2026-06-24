"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import MarkdownEditor from "@/components/MarkdownEditor";

const TAGS = ["ai", "cloud", "advance", "programming"] as const;

export default function EditBlogPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        excerpt: "",
        tags: [] as string[],
        published: false,
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const toggleTag = (tag: string) => {
        setFormData((prev) => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter((t) => t !== tag)
                : [...prev.tags, tag],
        }));
    };

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blogs/${id}`);
                if (!response.ok) throw new Error("Failed to fetch blog");
                const data = await response.json();
                setFormData({
                    title: data.title,
                    content: data.content,
                    excerpt: data.excerpt || "",
                    tags: data.tags || [],
                    published: data.published,
                });
            } catch {
                setError("Failed to load blog post");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchBlog();
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
        } catch {
            setError("An error occurred. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8 text-gray-900 dark:text-gray-100">Loading...</div>;
    if (error && !formData.title) return <div className="p-8 text-red-600">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Edit Blog Post</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                    <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded">
                        {error}
                    </div>
                )}

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="Enter blog title"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Tags
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {TAGS.map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-colors border ${
                                        formData.tags.includes(tag)
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400"
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Excerpt <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="A short summary of your blog post"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Content
                        </label>
                        <MarkdownEditor
                            value={formData.content}
                            onChange={(value) => setFormData({ ...formData, content: value })}
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="published"
                            checked={formData.published}
                            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="published" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            Publish immediately
                        </label>
                    </div>
                </div>

                <div className="flex gap-4 justify-end">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 font-medium"
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
