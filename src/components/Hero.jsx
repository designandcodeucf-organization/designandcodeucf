
function Hero() {
  return (  
    <>
      <section className="relative flex flex-col flex-none flex-nowrap overflow-visible content-center items-center justify-center pt-52 h-min w-full ">
        {/* hero inner */}
        <div className="relative flex flex-col flex-none flex-wrap content-center overflow-visible items-center justify-center px-4 h-min max-w-7xl w-full">
          {/* heading & cta */}
          <div className="z-2 relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center px-4 h-min max-w-md w-full">
            <div className="relative flex flex-col flex-none flex-nowrap items-center justify-center gap-8 overflow-hidden h-min max-w-lg	 w-full">
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <h1 className="text-white text-center text-5xl font-bold">Introducing <br/>Design & Code</h1>
              </div>
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <p className="text-[#BBBBBB] text-xl text-center font-medium">We are a UCF student organization that specializes in web design. Dedicated and focused on creating content for the digital world. </p>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-10 h-min-content overflow-hidden relative w-min-content"> */}
              <button className="transition duration-150 hover:scale-105 bg-white font-bold rounded-xl py-4 px-8 mt-8">Become a member</button>
            {/* </div>s */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

/*
function Hero() {
  return (  
    <>
    <section className=" zrelative content-center items-center justify-center flex-col flex py-8 max-w-full h-screen">
      <div>
        </div>
        <div className="content-center items-center justify-center flex-wrap flex-col flex max-w-7xl">
          <div className="w-full max-w-lg gap-8 flex-wrap flex-col flex">
            <h1 className="text-white text-center text-5xl font-bold">Introducing <br/>Design & Code</h1>
            <p className="text-[#BBBBBB] text-xl text-center">We are a UCF student organization that specializes in web design. Dedicated and focused on creating content for the digital world. </p>
          </div>
          <button className="transition duration-150 hover:scale-105 bg-white font-bold rounded-xl py-4 px-8 mt-8">Become a member</button>
        </div>
    </section>
    </>
  )
}

export default Hero

*/