// app/page.tsx
import HeroSlider from "../components/HeroSlider";
import AboutUs from "../components/AboutUs";
import Highlights from "../components/Highlights";
import Experiences from "../components/Experiences";
import PackagesOverview from "../components/PackagesOverview";
import BinationalRoutes from "../components/BinationalRoutes";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutUs />
      <Highlights />
      <Experiences />
      <PackagesOverview />
      <BinationalRoutes />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
