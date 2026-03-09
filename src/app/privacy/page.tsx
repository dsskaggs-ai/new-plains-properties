import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | New Plains Properties",
    description: "Privacy Policy for New Plains Properties.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-20">
                <h1 className="text-4xl font-bold text-[var(--color-secondary)] mb-8">Privacy Policy</h1>
                <div className="prose prose-lg text-gray-600">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        At New Plains Properties, we respect your privacy and are committed to protecting the personal information you share with us.
                    </p>
                    <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mt-8 mb-4">Information We Collect</h2>
                    <p>
                        When you fill out our contact or cash offer forms, we collect the information you provide, such as your name, phone number, email address, and property details. This information is used strictly to evaluate your property and contact you regarding an offer.
                    </p>
                    <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mt-8 mb-4">How We Use Your Information</h2>
                    <p>
                        We use your information solely for the purpose of communicating with you and presenting you with real estate offers. We do not sell or rent your personal information to third parties.
                    </p>
                    <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please call us at (405) 607-9563.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
