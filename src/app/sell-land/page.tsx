import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Sell Your Land | New Plains Properties",
    description: "Get a fast, fair cash offer for your land. No commissions, no hassle. We buy land nationwide.",
};

export default function SellLandPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
            <Header />
            <main className="flex-1 py-16 px-4">
                <LeadForm type="land" />
            </main>
            <Footer />
        </div>
    );
}
