import OfficerCarousel from "./components/Carousel";
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function App() {

  return (
    <div className="App">
      <>
      <div className="bg-black bg-opacity-100">
      
      <Hero/>
      
      <OfficerCarousel/>
      </div>

    

    <main className="h-full box-border m-0 p-0">
      <div className="contents">
        <div style={{minHeight:"100%", width:"auto"}}className="relative flex flex-col flex-nowrap gap-6 justify-start overflow-hidden p-0 min-h-full h-min">

        
        </div>
        <Footer />
      </div>

    </main>
    </>
    </div>
  );
}

export default App;