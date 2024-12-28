import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings
      disable: false, // Accepts 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // Event to initialize AOS
      initClassName: "aos-init", // Class applied after initialization
      animatedClassName: "aos-animate", // Class applied on animation
      useClassNames: false, // Add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // Disables mutation observer
      debounceDelay: 50, // Delay on debounce (resizing window)
      throttleDelay: 99, // Delay on throttle (scrolling)

      // Per-element settings
      offset: 120, // Offset from trigger point
      delay: 0, // Delay in ms
      duration: 400, // Animation duration
      easing: "ease", // Easing for animations
      once: false, // Animate only once
      mirror: false, // Animate out while scrolling past
      anchorPlacement: "top-bottom", // Trigger position
    });
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:nftId" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;