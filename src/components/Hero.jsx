import { delay } from "framer-motion";
import Star from "./Star";

function Hero() {
  return (
    <>
      <section className="relative flex flex-col flex-none flex-nowrap overflow-visible content-center items-center justify-center h-min w-full ">
        {/* hero inner */}
        <div className="relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center py-0 px-8 h-min max-w-[50rem] w-full">
          {/* heading & cta */}
          <div className="z-2 relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center h-min max-w-[44.8rem] w-full">
            <div className="relative flex flex-col flex-none flex-nowrap items-center justify-center gap-4 overflow-hidden h-min w-full">
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <h1 className="z-10 text-[white] text-center text-lg font-bold">
                  Introducing <br />
                  <span className="text-[#facc15]">Design & Code</span>
                </h1>
              </div>
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <p className="text-[#BBBBBB]  text-md text-center font-medium">
                  We are a UCF student organization that specializes in web
                  design. Dedicated and focused on creating content for the
                  digital world.{" "}
                </p>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-10 h-min-content overflow-hidden relative w-min-content"> */}
            <a
              href="https://knightconnect.campuslabs.com/engage/organization/designandcode"
              target="_blank"
              rel="noreferrer"
            >
              <button className="transition duration-200 hover:scale-105 text-md bg-white font-bold rounded-xl py-4 px-4 mt-8">
                Become a Member
              </button>
            </a>
            {/* </div> */}
          </div>
          <Star
            hex="#FACC15"
            width={52}
            position="-left-[.4rem] -top-[1.6rem]"
            delay={5}
            rotate={[10, -10]}
          />
          <Star
            hex="#5DA9E9"
            width={52}
            position="-right-[.4rem] -top-[1.6rem]"
            delay={1}
            rotate={[-10, 10]}
          />
          <Star
            hex="#EFE9F4"
            width={24}
            position="-left-[.4rem] top-[3.2rem]"
            delay={3}
            rotate={[10, -10]}
          />
          <Star
            hex="#E75A7C"
            width={24}
            position="-right-[.4rem] top-[3.2rem]"
            delay={1.5}
            rotate={[-10, 10]}
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
