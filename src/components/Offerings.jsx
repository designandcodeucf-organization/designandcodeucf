function Offerings() {
  return (
    <>
      <section className="my-[10rem] flex items-center justify-center w-full h-[min-content]">
        <div className="gap-[1rem] flex s:flex-col max-w-[80rem] h-[min-content] px-[3.2rem] ">
          <div className="flex-col gap-[1rem] flex">
            <div className="flex-col flex-nowrap flex flex-grow">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <img
                  className="w-[16rem] h-[16rem] rounded-xl"
                  src="/assets/javascript.png"
                  alt="JavaScript"
                ></img>
                <h2 className="text-white text-[1.6rem] font-semibold pt-3">
                  Learn about Javascript.
                </h2>
                <p className="text-[#777777] text-md font-semibold">
                  Learn about the fundamental concepts of JavaScript and it's
                  libraries.
                </p>
              </div>
            </div>
            <div className="flex-col flex-nowrap flex">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <h2 className="text-white  text-[1.6rem] font-semibold">
                  Attend live workshops
                </h2>
                <p className="text-[#777777] text-md font-semibold">
                  Attend our hands-on workshops to sharpen your web design
                  skills.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col s:flex-col-reverse gap-[1rem] flex-nowrap flex">
            <div className="flex-col flex-nowrap flex h-full">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <h2 className="text-white text-[1.6rem] font-semibold">
                  Join speaker events
                </h2>
                <p className="text-[#777777] text-md font-semibold">
                  Hear from professionals about their first-hand experience in
                  the industry.
                </p>
              </div>
            </div>
            <div className="flex-col flex-nowrap flex flex-grow">
              <div className="bg-[#1B1B1B] p-[3.2rem] h-full rounded-xl flex-col flex gap-2">
                <img
                  className="w-[16rem] h-[16rem] rounded-xl"
                  src="/assets/figma-logo.png"
                  alt="Figma Logo"
                ></img>
                <h2 className="text-white text-[1.6rem] font-semibold pt-3">
                  Learn about UI/UX
                </h2>
                <p className="text-[#777777] text-md font-semibold">
                  Sharpen your UI/UX skills with Figma or Adobe XD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offerings;
