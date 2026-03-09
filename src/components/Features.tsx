"use client";

import { motion, Variants } from "framer-motion";
import { CircleDollarSign, Clock, Wrench } from "lucide-react";

export default function Features() {
    const cards = [
        {
            title: "No Realtor Commissions",
            description: "Keep 100% of your money. We cover all traditional closing costs and eliminate middleman fees from the equation.",
            icon: CircleDollarSign,
            color: "text-[var(--color-primary)]",
            bg: "bg-[var(--color-primary)]/10"
        },
        {
            title: "We Buy In 'As-Is' Condition",
            description: "Don't lift a finger. Whether it's a hoard house, fire damage, or just needs updating—we buy exactly as it sits.",
            icon: Wrench,
            color: "text-[var(--color-primary)]",
            bg: "bg-[var(--color-primary)]/10"
        },
        {
            title: "Fast Cash Closings",
            description: "Close on your timeline. We can close in as little as 7 days or give you the time you need to move out comfortably.",
            icon: Clock,
            color: "text-[var(--color-primary)]",
            bg: "bg-[var(--color-primary)]/10"
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="why-us" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4">
                        A Better Way to Sell
                    </h2>
                    <p className="text-lg text-gray-600">
                        Selling property shouldn't be stressful. We've streamlined the process to make it transparent, fair, and fast.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <card.icon className={`w-8 h-8 ${card.color}`} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {card.description}
                            </p>

                            {/* Subtle hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
