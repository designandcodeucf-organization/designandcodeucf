

function Socials() {
  return (  
    <>
      <section className="my-[10rem] flex items-center justify-center w-full h-[min-content]">
        <div className="gap-[1rem] flex max-w-[80rem] px-[3.2rem] justify-center w-full s:flex-col ">
          <div className="flex flex-col gap-[1rem] w-full ">
            <div className="gap-[1rem] flex-nowrap flex">
              <div className=" flex-nowrap flex w-full">
                <div className="bg-[#1B1B1B] p-[3.2rem] rounded-xl flex-col gap-2 w-full">
                  <h3 className="text-white  text-[1.6rem] font-semibold">Linktree</h3>
                  <p className="text-[#777777] text-md font-semibold">Click on these links</p>
                </div>
              </div>
            </div>
            <div className=" s:-reverse gap-[1rem] flex-nowrap flex">
              <div className=" flex-nowrap flex w-full">
                <div className="bg-[#1B1B1B] p-[3.2rem] rounded-xl flex-col gap-2 w-full">
                  <h3 className="text-white text-[1.6rem] font-semibold">Discord</h3>
                  <p className="text-[#777777] text-md font-semibold">Click on these links</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] w-full">
            <div className=" gap-[1rem] flex-nowrap flex ">
              <div className=" flex-nowrap flex w-full">
                  <div className="bg-[#1B1B1B] p-[3.2rem] rounded-xl flex-col gap-2 w-full">
                    <h3 className="text-white  text-[1.6rem] font-semibold">Email</h3>
                    <p className="text-[#777777] text-md font-semibold">Click on these links</p>    
                  </div>
                </div>
              </div>
            <div className=" s:-reverse gap-[1rem] flex-nowrap flex">
            <div className=" flex-nowrap flex w-full">
                <div className="bg-[#1B1B1B] p-[3.2rem] rounded-xl flex-col gap-2 w-full">
                  <h3 className="text-white text-[1.6rem] font-semibold">Knight Connect</h3>
                    <p className="text-[#777777] text-md font-semibold">Click on these links</p>    

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Socials
