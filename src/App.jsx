import FAQsection from "./components/FAQsection/FAQsection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import KeyMetrics from "./components/KeyMetrics/KeyMetrics";
import OurBenefits from "./components/OurBenefits/OurBenefits";
import OurServices from "./components/OurServices/OurServices";
import SlidingTestimonials from "./components/SlidingTestimonials/SlidingTestimonials";
import VideoTestimonials from "./components/VideoTestimonials/VideoTestimonials";
import WorkshopSection from "./components/WorkshopSection/WorkshopSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurBenefits />
      <WorkshopSection />
      <OurServices />
      <VideoTestimonials />
      <SlidingTestimonials />
      <KeyMetrics />
      <FAQsection />
      <Footer />
    </>
  );
}

export default App;
