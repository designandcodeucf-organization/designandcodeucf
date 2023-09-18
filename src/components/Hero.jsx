import { delay } from "framer-motion"
import Bubble from "./Bubble"


function Hero() {
  return (  
    <>
      <section className="relative flex flex-col flex-none flex-nowrap overflow-visible content-center items-center justify-center pt-40 h-min w-full ">
        {/* hero inner */}
        <div className="relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center py-0 px-8 h-min max-w-[1240px] w-full">
          {/* heading & cta */}
          <div className="z-2 relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center h-min max-w-md w-full">
            <div className="relative flex flex-col flex-none flex-nowrap items-center justify-center gap-8 overflow-hidden h-min max-w-lg	 w-full">
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <h1 className="text-white text-center text-5xl font-bold">Introducing <br/>Design & Code</h1>
              </div>
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <p className="text-[#BBBBBB]  text-center font-medium">We are a UCF student organization that specializes in web design. Dedicated and focused on creating content for the digital world. </p>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-10 h-min-content overflow-hidden relative w-min-content"> */}
              <button className="transition duration-200 hover:scale-105 bg-white font-bold rounded-xl py-4 px-6 mt-8">Become a member</button>
            {/* </div> */}
          </div>
          

        </div>
      </section>
    </>
  )
}

export default Hero
