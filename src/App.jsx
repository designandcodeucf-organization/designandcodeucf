import OfficerCarousel from "./components/Carousel";
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function App() {

  return (
  <>
    <main className= " h-full box-border m-0 p-0">
      <div className="">
        <Hero/>
        <OfficerCarousel/>
        {/* <Footer /> */}
      </div>
    </main>
  </>
  );
}

export default App;