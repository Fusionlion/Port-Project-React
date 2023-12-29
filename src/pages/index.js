import React, { useEffect, useState } from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import "../components/styles/Font.css";

import MobileApp from "./MobileApp";
import WebApp from "./WebApp";

function SecondPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check if window is defined (client-side)
    if (typeof window != "undefined") {
      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Check if window is defined (client-side)
      if (typeof window != "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []); // Empty dependency array means it runs once after initial render

  return <div>{isMobile ? <MobileApp /> : <WebApp />}</div>;
}

export default SecondPage;
