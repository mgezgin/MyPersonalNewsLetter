"use client";

import { useEffect, useState } from "react";

interface Subscriber {
  id: string;
  email: string;
  name: string | null;
  active: boolean;
  confirmedAt: string | null;
  createdAt: string;
}

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("/api/subscribers");
      const data = await response.json();
      setSubscribers(data);
    } catch (error) {
      console.error("Failed to fetch subscribers:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Manage Subscribers</h1>

      <div className="bg-white rounded-lg shadow-md mb-6 p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <div className="text-3xl font-bold text-blue-600">
              {subscribers.length}
            </div>
            <div className="text-gray-600">Total Subscribers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">
              {subscribers.filter((s) => s.active).length}
            </div>
            <div className="text-gray-600">Active Subscribers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">
              {subscribers.filter((s) => !s.active).length}
            </div>
            <div className="text-gray-600">Inactive Subscribers</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscribed
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {subscriber.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {subscriber.name || "-"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      subscriber.active
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {subscriber.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(subscriber.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {subscribers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No subscribers found.</p>
        </div>
      )}
    </div>
  );
}
