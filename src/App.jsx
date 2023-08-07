import React, {useState} from "react";
import Hero from "./components/Hero";
import OfficerCarousel from "./components/Carousel";

function App() {

  return (
    <div className="App">
      <>
      <div className="bg-black bg-opacity-80">
      
      <Hero/>
      
      <OfficerCarousel/>
      </div>
    </>  
    </div>
  );
};

export default App;