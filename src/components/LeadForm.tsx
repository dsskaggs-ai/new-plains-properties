"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface LeadFormProps {
    type: "land" | "property";
}

export default function LeadForm({ type }: LeadFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Read FormSpree endpoint from environment variables
            const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
            if (!formspreeEndpoint) {
                throw new Error("FormSpree endpoint is not configured");
            }

            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: JSON.stringify({ ...data, lead_type: type }),
            });

            if (response.ok) {
                // Redirect to Next Steps page
                router.push("/next-steps");
            } else {
                setError("Oops! There was a problem submitting your form. Please try again or call us.");
            }
        } catch (err) {
            setError("Network error. Please try again later or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const title = type === "land" ? "Get a Cash Offer for Your Land" : "Get a Cash Offer for Your Property";
    const addressLabel = type === "land" ? "Parcel Number, Address, or Coordinates *" : "Property Address *";
    const addressPlaceholder = type === "land" ? "e.g., 000-00-000, 123 Main St, or Lat/Long" : "e.g., 123 Main St, City, ST 12345";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 max-w-xl mx-auto w-full"
        >
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-3">{title}</h2>
                <p className="text-gray-600">
                    Enter your info below. We'll review the property details and contact you within 24 hours with a fair cash offer.
                </p>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                        {addressLabel}
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                        placeholder={addressPlaceholder}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">
                        Anything else we should know? (Optional)
                    </label>
                    <textarea
                        name="details"
                        id="details"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="e.g., Needs repairs, inherited the property, want to close fast..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-8 py-4 text-lg font-bold text-white shadow-md hover:bg-[var(--color-primary-dark)] transition-all hover:translate-y-px active:translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Get My Cash Offer"
                    )}
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to being contacted by New Plains Properties regarding your inquiry.
                </p>
            </form>
        </motion.div>
    );
}
