import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
    const cities = ["chickasha", "tuttle", "amber", "pocasset", "newcastle", "mustang", "minco"];
    return cities.map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const { city } = await params;
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

    return {
        title: `Sell Your Property Fast in ${capitalizedCity}, OK | New Plains Properties`,
        description: `Looking to sell land or property in ${capitalizedCity}, OK? New Plains Properties buys as-is for cash. No realtor fees, fast closings. Local family buyers.`,
    };
}

export default async function LocationPage({ params }: { params: { city: string } }) {
    const { city } = await params;
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
            <Header />
            <main className="flex-1">
                {/* SEO Location Hero */}
                <section className="bg-[var(--color-secondary)] text-white py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Sell Your Property Fast in <span className="text-[var(--color-primary)]">{capitalizedCity}, OK</span>
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto text-gray-200 mb-10">
                            We are local cash buyers actively purchasing land, commercial buildings, and houses in {capitalizedCity} and surrounding areas. Skip the realtor commissions and repairs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sell-property"
                                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[var(--color-primary-dark)] transition-all"
                            >
                                Get a Cash Offer
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Content Section for SEO */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg prose-[var(--color-secondary)] mx-auto">
                            <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-6">Why We Buy in {capitalizedCity}</h2>
                            <p className="text-gray-600 mb-6">
                                As a family-owned business rooted in Oklahoma, {capitalizedCity} is an area we know well and deeply care about. Our goal isn't just to buy off-market properties; it's to improve our local communities. Whether you've inherited a house that needs too much work, or you have vacant land in {capitalizedCity} you'd like to turn into cash, we can help.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <MapPin className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700"><strong>Zero Closing Costs:</strong> We cover all traditional fees.</span>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700"><strong>Buy As-Is:</strong> No repairs or cleaning needed in your {capitalizedCity} property.</span>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700"><strong>Local Experts:</strong> We understand the true value of real estate in {capitalizedCity}.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
