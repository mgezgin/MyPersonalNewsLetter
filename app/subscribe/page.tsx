import SubscribeForm from "@/components/SubscribeForm";

export const metadata = {
  title: "Subscribe — Personal Blog",
  description: "Subscribe to get new posts delivered to your inbox.",
};

export default function SubscribePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Stay in the loop
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            New posts on tech, software, and things worth sharing — straight to your inbox.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">No spam. Unsubscribe any time.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-8">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
