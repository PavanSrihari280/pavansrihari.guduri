import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      // Prefer pathname (HashRouter maps `#/section` -> pathname '/section'), fall back to legacy hash anchors
      const path = location.pathname.replace(/^\/+/, "");
      const frag = path || location.hash.replace(/^#\/?/, "");
      if (!frag) return;
      // small delay to ensure DOM is mounted
      setTimeout(() => {
        const el = document.getElementById(frag);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    };

    scrollToSection();
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Expertise />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
