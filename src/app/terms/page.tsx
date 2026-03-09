import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Terms & Conditions | New Plains Properties",
    description: "Terms and Conditions for New Plains Properties.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-20">
                <h1 className="text-4xl font-bold text-[var(--color-secondary)] mb-8">Terms and Conditions</h1>
                <div className="prose prose-lg text-gray-600">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Welcome to the New Plains Properties website. By accessing or using our website, you agree to be bound by these Terms and Conditions.
                    </p>
                    <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mt-8 mb-4">Communication</h2>
                    <p>
                        By submitting your phone number and email address on our website, you explicitly consent to receive calls and messages (including SMS) from New Plains Properties regarding your inquiry and potential property offers.
                    </p>
                    <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mt-8 mb-4">Offers</h2>
                    <p>
                        Any cash offer or valuation discussed prior to a signed purchase agreement is an estimate based on the preliminary information provided and does not constitute a binding legal agreement.
                    </p>
                    <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at (405) 607-9563.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
