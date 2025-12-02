// app/page.tsx
import HeroSlider from "../components/HeroSlider";
import Highlights from "../components/Highlights";
import Experiences from "../components/Experiences";
import BinationalRoutes from "../components/BinationalRoutes";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Highlights />
      <Experiences />
      <BinationalRoutes />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
