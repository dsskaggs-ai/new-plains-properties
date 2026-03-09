"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <Image
                                src="/Family.jpeg"
                                alt="Our Family directly serving the community"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--color-secondary)]/5 rounded-full blur-2xl -z-10" />

                        <div className="absolute -bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-50 max-w-sm">
                            <p className="font-bold text-[var(--color-secondary)] text-lg mb-1">Local & Family Owned.</p>
                            <p className="text-sm text-gray-500">Working with friends to improve our communities, one property at a time.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-[var(--color-primary)] font-bold tracking-wider text-sm mb-3">OUR ROOTS</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-secondary)] mb-6 leading-tight">
                            We Are Not A Faceless Corporation.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                At New Plains Properties, we are a family-owned operation deeply rooted in Oklahoma. We don't believe in high-pressure sales tactics or treating you like just another transaction.
                            </p>
                            <p>
                                We buy local properties to renovate and improve our hometowns, and we buy land nationwide to develop for future generations. When you work with us, you are dealing directly with the decision-makers.
                            </p>
                            <p>
                                Our promise is simple: to make selling your property or land as frictionless and fair as possible. No commissions, no waiting, just a straightforward cash offer from our family to yours.
                            </p>
                        </div>

                        <div className="mt-10">
                            <p className="font-medium text-[var(--color-secondary)] mb-4">Let's talk about how we can help.</p>
                            <a
                                href="tel:+14056079563"
                                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-secondary)] px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition-all hover:-translate-y-1 hover:shadow-md"
                            >
                                Call Us Directly: (405) 607-9563
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
