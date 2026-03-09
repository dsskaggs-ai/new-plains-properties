import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Sell Your Property | New Plains Properties",
    description: "Get a fast cash offer for your property exactly as it is. No realtor commissions, no repairs required. We buy locally in Oklahoma.",
};

export default function SellPropertyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
            <Header />
            <main className="flex-1 py-16 px-4">
                <LeadForm type="property" />
            </main>
            <Footer />
        </div>
    );
}
