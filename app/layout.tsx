import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider>
            <Navigation />
            <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">{children}</main>
            <footer className="bg-gray-900 dark:bg-gray-900 text-gray-300 dark:text-gray-400 py-10 mt-12 border-t border-gray-800 dark:border-gray-800">
              <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm">&copy; {new Date().getFullYear()} Personal Blog. All rights reserved.</p>
                  <nav className="flex items-center gap-6 text-sm">
                    <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                    <a href="/resume" className="hover:text-white transition-colors">Resume</a>
                    <a
                      href="/subscribe"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full font-semibold transition-colors"
                    >
                      Subscribe
                    </a>
                  </nav>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
