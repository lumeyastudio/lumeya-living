import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Ecosystem from "@/components/Ecosystem";
import Features from "@/components/Features";
import AppExperience from "@/components/AppExperience";
import Nature from "@/components/Nature";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <Ecosystem />
      <Features />
      <AppExperience />
      <Nature />
      <Story />
      <Testimonials />
      <Contact />
      <Download />
      <Footer />
    </main>
  );
}
