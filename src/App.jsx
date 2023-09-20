import OfficerCarousel from "./components/Carousel";
import Footer from "./components/Footer"
import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"

function App() {

  return (
    <div className="App">
      <>
      <div className=" bg-opacity-100">
      <NavBar/>
      <Hero/>
      
      <OfficerCarousel/>
      </div>
    <div className="h-full box-border m-0 p-0">
      
        <Footer />
      

    </div>
    </>
    </div>
  );
}

export default App;