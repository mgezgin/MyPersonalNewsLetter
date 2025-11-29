"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <nav className="bg-blue-600 dark:bg-gray-900 text-white shadow-lg transition-colors">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        My Newsletter
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6 items-center">
                        <Link href="/" className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors">
                            Home
                        </Link>
                        <Link href="/blog" className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors">
                            Blog
                        </Link>
                        <Link href="/newsletters" className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors">
                            Newsletters
                        </Link>
                        <Link href="/resume" className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors">
                            Resume
                        </Link>
                        {session && (
                            <Link href="/admin" className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors">
                                Admin
                            </Link>
                        )}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-blue-500 dark:border-gray-700 pt-4">
                        <Link
                            href="/"
                            className="block py-2 px-4 hover:bg-blue-700 dark:hover:bg-gray-800 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/blog"
                            className="block py-2 px-4 hover:bg-blue-700 dark:hover:bg-gray-800 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/newsletters"
                            className="block py-2 px-4 hover:bg-blue-700 dark:hover:bg-gray-800 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Newsletters
                        </Link>
                        <Link
                            href="/resume"
                            className="block py-2 px-4 hover:bg-blue-700 dark:hover:bg-gray-800 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                        </Link>
                        {session && (
                            <Link
                                href="/admin"
                                className="block py-2 px-4 hover:bg-blue-700 dark:hover:bg-gray-800 rounded transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Admin
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}
