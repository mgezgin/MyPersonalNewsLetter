"use client";

import { useState } from "react";

export default function PrintButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);
        try {
            const element = document.getElementById("resume-content");
            if (!element) {
                console.error("Resume content not found");
                return;
            }

            // @ts-ignore
            const html2pdf = (await import("html2pdf.js")).default;
            const opt = {
                margin: 0,
                filename: "Muslum_Gezgin_Resume.pdf",
                image: { type: "jpeg" as const, quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" as const },
            };

            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error("Failed to generate PDF", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isLoading}
            className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isLoading ? "Generating PDF..." : "📄 Download PDF"}
        </button>
    );
}
