import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-secondary)] text-white py-12 border-t border-[var(--color-primary)]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Logo / Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative h-16 w-52 mb-4 bg-white rounded-2xl p-4 shadow-md flex items-center justify-center">
                            <div className="relative w-full h-full p-2">
                                <Image
                                    src="/NewPlains2.png"
                                    alt="New Plains Properties"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">
                            Improving communities, one property at a time.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-sm">
                        <Link href="/privacy" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="hidden sm:inline text-gray-600">|</span>
                        <Link href="/terms" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} New Plains Properties. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
