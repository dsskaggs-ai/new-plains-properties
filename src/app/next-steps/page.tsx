import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Next Steps | New Plains Properties",
    description: "Thank you for reaching out. Here is what to expect next.",
};

export default function NextStepsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-[var(--color-secondary)] mb-4">
                        We've Received Your Info!
                    </h1>

                    <p className="text-gray-600 mb-8 text-lg">
                        Thank you for reaching out. We are reviewing your property details and will be in touch within <strong>24 hours</strong> to discuss the next steps and provide your cash offer.
                    </p>

                    <div className="space-y-4">
                        <p className="font-medium text-[var(--color-secondary)]">Need to reach us sooner?</p>
                        <a
                            href="tel:+14056079563"
                            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-secondary)] px-6 py-3 text-white font-semibold shadow-sm hover:bg-gray-800 transition-all w-full"
                        >
                            Call Us: (405) 607-9563
                        </a>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full py-3 text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-dark)] transition-colors gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Return Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
