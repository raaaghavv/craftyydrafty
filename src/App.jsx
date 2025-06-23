import React, { useRef } from "react";
import PageScrollHandler from "./components/PageScrollHandler";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
import NotFoundPage from "./components/NotFoundPage";

const LandingPageContent = () => {
  // Create refs for each section you want to scroll to
  const workshopRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <PageScrollHandler />
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

const AboutUsContent = () => {
  const contactRef = useRef(null);
  return (
    <>
      <PageScrollHandler />
      <Header />
      <AboutUs />
      <KeyMetrics />
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
    element: (
      <>
        <Header />
        <NotFoundPage />
      </>
    ),
  },
  {
    path: "/about-us",
    element: <AboutUsContent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
