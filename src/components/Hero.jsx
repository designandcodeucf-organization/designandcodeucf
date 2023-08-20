import {  motion } from 'framer-motion'


function Bubble({ name, color }){
  const position = {
    initial: {
      x: 0,
      y: 0,
    },
    final: {
      x: -30,
      y: 30,
      
    }
  }

  return(
    <>
      <motion.div
        className='z-1 absolute h-auto w-auto top-[-2%] left-[72%]'
        initial="initial" 
        animate="final"
        transition={{ repeat: Infinity, repeatType: 'mirror', repeatDelay: 4, duration: 2 }}
        variants={position}
      >
        <div className='contents'>
          <div className='flex flex-row flex-none flex-nowrap overflow-visible items-center justify-start h-min'>
            <div className={`relative ${color} flex flex-none overflow-visible items-start justify-start rounded-xl px-4 py-2 h-min`}>
                <div className='flex flex-col flex-none shrink-0 justify-start whitespace-pre transform-none h-auto w-auto '>
                  <p className='font-bold'>{name}</p>
                </div>
            </div>
            <div className=''>

            </div>
          </div>
        </div>

      </motion.div>
    </>
  )
}
function Hero() {
  return (  
    <>
<<<<<<< HEAD
    <section>
      <h1>Introducing Design & Code</h1>
      <p>We are a UCF student organization that specializes in web design. Dedicated and focused on creating content for the digital world. </p>
      <button>Become a member</button>
    </section>
=======
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
              <button className="transition duration-200 hover:scale-105 bg-white font-bold rounded-xl py-4 px-8 mt-8">Become a member</button>
            {/* </div>s */}
          </div>
          <Bubble
            name="Polina"
            color="bg-pink-500"
          />
        </div>
        
      </section>
>>>>>>> main
    </>
  )
}

export default Hero

