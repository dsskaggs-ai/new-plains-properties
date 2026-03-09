import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import BeforeAfter from "@/components/BeforeAfter";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <BeforeAfter />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
