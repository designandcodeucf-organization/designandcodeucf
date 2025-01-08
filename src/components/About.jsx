import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <>
      <section
        ref={ref}
        className="relative flex flex-col flex-none flex-nowrap overflow-visible content-center items-center justify-center h-min w-full "
      >
        {/* hero inner */}
        <div className="relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center py-0 px-8 h-min max-w-[1240px] w-full">
          {/* heading & cta */}
          <div className="z-2 relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center h-min max-w-[600px] w-full">
            <div className="relative flex flex-col flex-none flex-nowrap items-center justify-center gap-8 overflow-hidden h-min max-w-[600px] w-full">
              <div
                className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full"
                id="AboutUs"
              >
                <h2 className="text-white text-center text-[4.2rem] text-5xl font-bold">
                  About us
                </h2>
              </div>
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <p className="text-[#BBBBBB] text-[1.6rem] text-center font-medium">
                  Design & Code is a UCF student club that specializes in web
                  design and development. Created by a group of Digital Media:
                  Web Design majors, we wanted to expand on our knowledge of the
                  web outside of the classroom and apply it to real-world
                  settings. We can only learn so much from semester-long
                  courses, especially considering the number of coding
                  languages, platforms, and extensions that exist on the World
                  Wide Web. Bringing in a team of designers, developers, and
                  everyone in between, Design & Code strives to help share
                  information on creating a bright technological future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
