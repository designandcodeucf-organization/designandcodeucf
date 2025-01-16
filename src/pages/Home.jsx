import OfficerCarousel from "../components/Carousel";
import Footer from "../components/Footer";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import NavBar from "../components/NavBar.jsx";
import Offerings from "../components/Offerings.jsx";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about" && aboutRef.current) {
      //   make it scroll 10rem before the about section (otherwise, about touches navbar)
      const offsetTop = aboutRef.current.offsetTop;
      const offsetAdjustment = 10 * 16;
      window.scrollTo({
        top: offsetTop - offsetAdjustment,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="App">
      <main className="mt-[10rem] box-border m-0 p-0">
        <div className=" flex flex-col gap-[4rem]">
          <Hero />
          <Offerings />
          <About ref={aboutRef} />
          <OfficerCarousel />
        </div>
      </main>
    </div>
  );
}

export default App;
