import React, {useState} from "react";
import Hero from "./components/Hero";
import MemberCarousel from "./components/Carousel";

function App() {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1601051297657-39a9b2ce2cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
     
    },
    // Add more member objects as needed
  ];


  return (
    <div className="App">
      <Hero/>
      <MemberCarousel/>
      
    </div>
  );
};

export default App;