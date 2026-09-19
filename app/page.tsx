import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturesSection } from "./components/FeaturesSection";
import { ManagementSection } from "./components/ManagementSection";
import { ReliabilitySection } from "./components/ReliabilitySection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090d] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Top navigation */}
      <Navbar />

      {/* Main content flow */}
      <main className="flex-1 flex flex-col">
        {/* Hero with interactive desktop window */}
        <Hero />

        {/* Feature Cards: Apps, Files, Folders, URLs, Commands, Pipeline */}
        <FeaturesSection />

        {/* Management: Create, Edit, Reorder, Delete */}
        <ManagementSection />

        {/* Persistence & Fault Tolerance */}
        <ReliabilitySection />
      </main>

      {/* Technical footer */}
      <Footer />
    </div>
  );
}
