import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRun = useRef(true);

  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo(0, 0);
    
    // Handle initial page load
    if (isFirstRun.current) {
      isFirstRun.current = false;
      // Delay slightly to ensure everything is mounted
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
