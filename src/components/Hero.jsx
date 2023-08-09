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
    <section>
      <h1>Introducing Design & Code</h1>
      <p>We are a UCF student organization that specializes in web design. Dedicated and focused on creating content for the digital world. </p>
      <button>Become a member</button>
    </section>
    </>
  )
}

export default Hero

