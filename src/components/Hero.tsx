"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Home } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background with Ken Burns Effect */}
            <motion.div
                className="absolute inset-0 z-0 origin-center"
                initial={{ scale: 1 }}
                animate={{ scale: 1.15 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80')",
                    }}
                />
                {/* Color overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] backdrop-blur-md mb-6 font-semibold tracking-wider text-sm border border-[var(--color-primary)]/30">
                        FAMILY-OWNED & OPERATED
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        We buy land and property. <br className="hidden md:block" />
                        <span className="text-[var(--color-primary)]">Fair cash offers, zero hassle.</span>
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Skip the realtors and the repairs. We are your neighbors working to improve our communities with fast, off-market purchases tailored to your timeline.
                    </p>
                </motion.div>

                {/* Dual CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
                >
                    <Link
                        href="/sell-land"
                        className="group relative flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[var(--color-primary-dark)] transition-all hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto overflow-hidden"
                    >
                        <MapPin className="w-5 h-5 z-10" />
                        <span className="z-10">Sell Your Land</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                    </Link>

                    <Link
                        href="/sell-property"
                        className="group relative flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[var(--color-secondary)] shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto overflow-hidden border border-transparent"
                    >
                        <Home className="w-5 h-5 z-10 text-[var(--color-primary)]" />
                        <span className="z-10">Sell Your Property</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform z-10 text-[var(--color-primary)]" />
                        <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                    </Link>
                </motion.div>
            </div>

        </div>
    );
}
