

function Offerings() {
  return (  
    <>
      <section className=" my-[10rem] flex items-center justify-center w-full h-[min-content]">
        <div className="gap-[1rem] flex s:flex-col max-w-[80rem] h-[min-content] px-[3.2rem] ">
          <div className="flex-col gap-[1rem] flex-nowrap flex h-full ">
            <div className="flex-col flex-nowrap flex grow">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <img className="w-[16rem] h-[16rem] rounded-xl"src="src/assets/javascript.png"></img>
                <h2 className="text-white text-[1.6rem] font-semibold pt-3">Learn about Javascript</h2>
                <p className="text-[#777777] text-md font-semibold">We are a UCF student club that specializes in web design.</p>
              </div>
            </div>
            <div className="flex-col flex-nowrap flex h-full">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <h2 className="text-white  text-[1.6rem] font-semibold">Attend live workshops</h2>
                <p className="text-[#777777] text-md font-semibold">We are a UCF student club that specializes in web design. Dedicated and focused  creating content for the digital world. </p>
              </div>
            </div>
          </div>
          <div className="flex-col s:flex-col-reverse gap-[1rem] flex-nowrap flex h-full">
            <div className="flex-col flex-nowrap  flex h-full">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <h2 className="text-white text-[1.6rem] font-semibold">Learn about Javascript</h2>
                <p className="text-[#777777] text-md font-semibold">We are a UCF student club that specializes in web design. Dedicated and focused  creating content for the digital world. </p>
              </div>
            </div>
            <div className="flex-col flex-nowrap  flex h-full">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <img className="w-[16rem] h-[16rem] rounded-xl"src="src/assets/figma-logo.png"></img>
                <h2 className="text-white text-[1.6rem] font-semibold pt-3">Learn about Javascript</h2>
                <p className="text-[#777777] text-md font-semibold">We are a UCF student club that specializes in web design. Dedicated and focused  creating content for the digital world. </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Offerings
