import OfficerCarousel from "./components/Carousel";
import Footer from "./components/Footer"
import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import Offerings from "./components/Offerings.jsx"
import Socials from "./components/Socials.jsx"

function App() {

  return (
    <>
    <main className= " h-full box-border m-0 p-0">
      <div className="flex flex-col mt-[8rem] gap-[4rem]">
        <Hero/>
        <Offerings/>
        <OfficerCarousel/>
        {/* <Socials/> */}
        
        {/* <Footer /> */}

      </div>
    </main>
  </>
  
  );
}

export default App;