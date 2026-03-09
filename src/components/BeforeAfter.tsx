"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = clientX - left;
        const percentage = Math.max(0, Math.min(100, (x / width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", () => setIsDragging(false));
            window.addEventListener("touchmove", handleTouchMove, { passive: false });
            window.addEventListener("touchend", () => setIsDragging(false));
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", () => setIsDragging(false));
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", () => setIsDragging(false));
        };
    }, [isDragging]);

    return (
        <section id="our-work" className="py-24 bg-[var(--color-background)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4">
                        See the Difference We Make
                    </h2>
                    <p className="text-lg text-gray-600">
                        We don't just buy properties; we revitalize communities. Swipe to see one of our recent local transformations.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl select-none"
                    ref={containerRef}
                    onMouseDown={(e) => {
                        setIsDragging(true);
                        handleMove(e.clientX);
                    }}
                    onTouchStart={(e) => {
                        setIsDragging(true);
                        handleMove(e.touches[0].clientX);
                    }}
                >
                    {/* After Image (Background) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/W_Iowa_After.jpeg')" }}
                    >
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-secondary)] shadow-sm">
                            AFTER
                        </div>
                    </div>

                    {/* Before Image (Foreground, clipped) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center border-r-[3px] border-white"
                        style={{
                            backgroundImage: "url('/W_Iowa_Before.jpeg')",
                            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                        }}
                    >
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold text-white shadow-sm">
                            BEFORE
                        </div>
                    </div>

                    {/* Drag Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
                        style={{ left: `calc(${sliderPosition}% - 2px)` }}
                    >
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.2)] border-2 border-[var(--color-primary)]">
                            <MoveHorizontal className="w-5 h-5 text-[var(--color-primary)]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
