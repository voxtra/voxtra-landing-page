import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import Approach from "@/components/Approach";
import Metrics from "@/components/Metrics";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <CaseStudies />
        <Approach />
        <Metrics />
        <Pricing />
        <Reviews />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
