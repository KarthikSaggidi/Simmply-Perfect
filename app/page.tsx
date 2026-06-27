import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Companies from "@/components/home/Companies";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/stats";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Companies />

      <Services />

      <WhyChooseUs />

      <Stats />

      <Footer />
    </>
  );
}