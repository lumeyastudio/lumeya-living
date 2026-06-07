import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Ecosystem from "@/components/Ecosystem";
import Features from "@/components/Features";
import AppExperience from "@/components/AppExperience";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <Hero />
      <Trust />
      <Ecosystem />
      <Features />
      <AppExperience />
      <Story />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
