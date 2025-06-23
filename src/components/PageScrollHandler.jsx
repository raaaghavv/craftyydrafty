import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50); 
      }
    };

    // Check if there's a hash in the URL (e.g., #workshops, #contact)
    if (location.hash) {
      // If a hash is present, remove the '#' and try to scroll to that ID
      scrollToSection(location.hash.substring(1));
    } else {
      // If no hash is present (typical for a new page load), scroll to the very top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); 

  return null; 
}

export default PageScrollHandler;