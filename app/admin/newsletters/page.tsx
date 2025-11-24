"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Newsletter {
  id: string;
  title: string;
  description: string | null;
  sent: boolean;
  sentAt: string | null;
  createdAt: string;
  blogs: Array<{
    blog: {
      title: string;
    };
  }>;
}

export default function AdminNewslettersPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const [sendingId, setSendingId] = useState<string | null>(null);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await fetch("/api/newsletters");
      const data = await response.json();
      setNewsletters(data);
    } catch (error) {
      console.error("Failed to fetch newsletters:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendNewsletter = async (id: string) => {
    if (
      !confirm(
        "Are you sure you want to send this newsletter to all subscribers?"
      )
    ) {
      return;
    }

    setSendingId(id);
    try {
      const response = await fetch(`/api/newsletters/${id}/send`, {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          `Newsletter sent successfully! Sent to ${data.successCount} subscribers.`
        );
        fetchNewsletters();
      } else {
        alert(data.error || "Failed to send newsletter");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setSendingId(null);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Manage Newsletters</h1>
        <Link
          href="/admin/newsletters/new"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Create New Newsletter
        </Link>
      </div>

      <div className="space-y-6">
        {newsletters.map((newsletter) => (
          <div key={newsletter.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{newsletter.title}</h2>
                {newsletter.description && (
                  <p className="text-gray-600 mt-2">{newsletter.description}</p>
                )}
                <div className="text-sm text-gray-500 mt-2">
                  {newsletter.blogs.length} blog post(s) included
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {newsletter.sent ? (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    Sent{" "}
                    {newsletter.sentAt
                      ? new Date(newsletter.sentAt).toLocaleDateString()
                      : ""}
                  </span>
                ) : (
                  <>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                      Draft
                    </span>
                    <button
                      onClick={() => handleSendNewsletter(newsletter.id)}
                      disabled={sendingId === newsletter.id}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 text-sm font-semibold"
                    >
                      {sendingId === newsletter.id ? "Sending..." : "Send Now"}
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                Included Blogs:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {newsletter.blogs.map((nb, index) => (
                  <li key={index} className="text-gray-600">
                    {nb.blog.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {newsletters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No newsletters found.</p>
        </div>
      )}
    </div>
  );
}
