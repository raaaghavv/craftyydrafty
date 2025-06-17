import React, { useEffect, useRef } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import OurBenefits from "./components/OurBenefits/OurBenefits";
import WorkshopSection from "./components/WorkshopSection/WorkshopSection";
import OurServices from "./components/OurServices/OurServices";
import VideoTestimonials from "./components/VideoTestimonials/VideoTestimonials";
import SlidingTestimonials from "./components/SlidingTestimonials/SlidingTestimonials";
import KeyMetrics from "./components/KeyMetrics/KeyMetrics";
import FAQsection from "./components/FAQsection/FAQsection";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

// This component will render your entire landing page content
const LandingPageContent = () => {
  const location = useLocation(); // Hook to get current URL information

  // Create refs for each section you want to scroll to
  const workshopRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        // Use setTimeout to ensure the DOM has updated before scrolling
        // This can help if content is still rendering asynchronously
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    };

    // Check if there's a hash in the URL (e.g., #about, #services)
    if (location.hash) {
      scrollToSection(location.hash.substring(1)); // Remove the '#' from the hash
    } else {
      // Optional: Scroll to the top of the page if no hash is present
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <HeroSection />
      <OurBenefits />
      <WorkshopSection ref={workshopRef} id="workshops" />
      <OurServices ref={servicesRef} id="services" />
      <VideoTestimonials ref={testimonialRef} id="video-testimonials" />
      <SlidingTestimonials />
      <KeyMetrics />
      <FAQsection ref={faqRef} id="faq" />
      <Footer ref={contactRef} id="contact-info" />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageContent />,
  },
  {
    path: "*",
    element: <Header />,
    error: "404 not found!",
  },
  {
    path: "/about-us",
    element: (
      <>
        <Header />
        <AboutUs />
        <Footer/>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
