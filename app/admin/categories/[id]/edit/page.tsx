"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditCategoryPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                // Since we don't have a direct GET /api/categories/[id] yet (or maybe we do, let's check),
                // but for now I'll stick to fetching all and filtering as per previous logic, 
                // OR I should really implement GET /api/categories/[id].
                // The previous code was fetching all. Let's stick to that for safety unless I update the API.
                // Wait, I can just update the API. But let's check if I did.
                // I viewed app/api/categories/[id]/route.ts and it had PUT and DELETE.
                // So I should probably fetch all and filter for now to be safe, or update the API.
                // Fetching all is easier for now to fix the build.

                const listResponse = await fetch("/api/categories");
                const data = await listResponse.json();
                const category = data.find((c: any) => c.id === id);

                if (category) {
                    setName(category.name);
                    setSlug(category.slug);
                } else {
                    setError("Category not found");
                }
            } catch (error) {
                console.error("Failed to fetch category:", error);
                setError("Failed to load category");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchCategory();
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError("");

        try {
            const response = await fetch(`/api/categories/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, slug }),
            });

            if (response.ok) {
                router.push("/admin/categories");
                router.refresh();
            } else {
                const data = await response.json();
                setError(data.error || "Failed to update category");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8">Loading...</div>;
    if (error && !name) return <div className="p-8 text-red-600">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">Edit Category</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="slug"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Slug
                    </label>
                    <input
                        type="text"
                        id="slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="flex justify-end gap-4">
                    <Link
                        href="/admin/categories"
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
}
