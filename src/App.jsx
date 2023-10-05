import OfficerCarousel from "./components/Carousel";
import Footer from "./components/Footer"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import NavBar from "./components/NavBar.jsx"
import Offerings from "./components/Offerings.jsx"
import Socials from "./components/Socials.jsx"

function App() {
  return (
    <>
      <NavBar/>
      <main className="mt-[10rem] box-border m-0 p-0">
        <div className=" flex flex-col gap-[4rem]">
          <Hero/>
          <Offerings/>
          <About/>
          <OfficerCarousel/>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
