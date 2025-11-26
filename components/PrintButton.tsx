"use client";

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold shadow-lg"
        >
            📄 Print / Download Resume
        </button>
    );
}
