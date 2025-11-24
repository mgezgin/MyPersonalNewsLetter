import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Newsletter & Blog",
  description: "Subscribe to our newsletter and read our latest blog posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
                My Newsletter
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
                <Link href="/blog" className="hover:text-blue-200">
                  Blog
                </Link>
                <Link href="/newsletters" className="hover:text-blue-200">
                  Newsletters
                </Link>
                <Link href="/admin" className="hover:text-blue-200">
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Personal Newsletter. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
