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
            <div className={`relative ${color}  flex flex-none overflow-visible items-start justify-start rounded-xl px-4 py-2 h-min`}>
                <div className='flex flex-col flex-none shrink-0 justify-start whitespace-pre transform-none h-auto w-auto '>
                  <p className='font-bold'>{name}</p>
                </div>
            </div>
            <div className=" left-[-8px] absolute flex items-center justify-center flex-none flex-row flex-nowrap gap-2.5 h-3.5 w-3.5 right-[-9px] top-[-9px] z-10 overflow-visible p-0"
            style={{transform: 'rotate(-90deg) translateZ(0px)', opacity: 1}}>
              <div className="r-0 h-[15px] w-[15px] image-rendering-pixelated flex-shrink-0 bg-contain bg-no-repeat bg-center opacity-100 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2014%2015%22%3E%3Cpath%20d%3D%22M%2011.134%200.478%20C%2012.557%200.169%2013.823%201.435%2013.514%202.857%20L%2011.371%2012.715%20C%2010.934%2014.724%207.834%2014.936%206.887%2013.111%20C%206.13%2011.653%205.265%2010.283%204.345%209.362%20C%203.555%208.572%202.453%207.843%201.258%207.197%20C%20-0.573%206.207%20-0.376%202.98%201.658%202.538%20Z%22%20fill%3D%22%23FF9CEF%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')]"
              >
              </div>
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
            name="React"
            color="bg-pink-400"
          />
        </div>
        
      </section>
    </>
  )
}

export default Hero

