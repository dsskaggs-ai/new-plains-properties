"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-12 w-auto min-w-[150px]">
                                <Image
                                    src="/NewPlains2.png"
                                    alt="New Plains Properties"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Navigation & CTA */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <nav className="hidden md:flex space-x-8">
                            <Link href="#why-us" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">
                                Why Us
                            </Link>
                            <Link href="#our-work" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">
                                Our Work
                            </Link>
                            <Link href="#about" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">
                                About
                            </Link>
                        </nav>

                        <a
                            href="tel:+14056079563"
                            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-primary-dark)] transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                        >
                            <PhoneCall className="w-4 h-4 mr-2" />
                            <span className="hidden sm:inline">(405) 607-9563</span>
                            <span className="sm:hidden">Call Now</span>
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
}
