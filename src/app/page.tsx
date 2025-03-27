import Newsletter from "@/components/layout/Newsletter";
import ContactUs from "@/components/sections/ContactSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import ToolsSection from "@/components/sections/ToolsSection";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <ContactUs />
      <Newsletter />
    </main>
  );
}
