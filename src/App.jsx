import OfficerCarousel from "./components/Carousel";
import Footer from "./components/Footer"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import NavBar from "./components/NavBar.jsx"
import Offerings from "./components/Offerings.jsx"
import Socials from "./components/Socials.jsx"

function App() {

  return (
    <div className="App">
      <div>
      <NavBar/>
      <Hero/>
      <div>
        <About/>
      <Offerings />
      </div>
      
      <OfficerCarousel/>
      </div>
    <div className="h-full box-border m-0 p-0">
      
        <Footer />
      </div>
    </div>
  
  );
}


export default App;