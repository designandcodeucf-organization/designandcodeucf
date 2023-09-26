

function About() {
  return (  
    <>
      <section className=" my-[100px] flex items-center justify-center w-full h-[min-content]">
        <div className="gap-[10px] flex  max-w-[800px] px-8 ">
          <div className="flex-col gap-[10px] flex-nowrap  flex h-full">
            <div className="flex-col flex-nowrap  flex h-full">
              <div className="bg-[#1B1B1B] p-[32px] rounded-xl flex-col flex gap-2">
                <img className="w-[160px] h-[160px] rounded-xl"src="src/assets/javascript.png"></img>
                <h2 className="text-white font-semibold">Learn about Javascript</h2>
                <h2 className="text-[#777777] font-semibold">We are a UCF student club that specializes in web design. Dedicated and focused  creating content for the digital world. </h2>
              </div>
            </div>
            <div className="flex-col flex-nowrap flex h-full">
              <div className="bg-[#1B1B1B] p-[32px] rounded-xl flex-col flex gap-2">
                <h2 className="text-white font-semibold">Attend live workshops</h2>
                <h2 className="text-[#777777] font-semibold">We are a UCF student club that specializes in web design. Dedicated and focused  creating content for the digital world. </h2>
              </div>
            </div>
          </div>
          <div className="flex-col gap-[10px] flex-nowrap  flex h-full">
            <div className="flex-col flex-nowrap  flex h-full">
              <div className="bg-[#1B1B1B] p-[32px] rounded-xl flex-col flex gap-2">
                <h2 className="text-white font-semibold">Join speaker events</h2>
                <h2 className="text-[#777777] font-semibold">We are a UCF student club that specializes in web design. Dedicated and focused  creating content for the digital world. </h2>
              </div>
            </div>
            <div className="flex-col flex-nowrap  flex h-full">
              <div className="bg-[#1B1B1B] p-[32px] rounded-xl flex-col flex gap-2">
                <img className="w-[160px] h-[160px] rounded-xl"src="src/assets/figma-logo.png"></img>
                <h2 className="text-white font-semibold">Learn about UI/UX</h2>
                <h2 className="text-[#777777] font-semibold">We are a UCF student club that specializes in web design. Dedicated and focused  creating content for the digital world. </h2>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default About
