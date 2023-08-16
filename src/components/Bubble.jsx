import {  motion } from 'framer-motion'


export default function Bubble({ name, color }){
  const variants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1
    },
    final: {
      x: -30,
      y: 30,
      scale: 1
      
    }
  }
  // 

  return(
    <>
      <motion.div
        className='z-1 absolute top-[0px] left-[82%] h-auto w-auto'
        initial={{ transform: "perspective(1200px) translate(-50%, -50%)", x: 0, y: 0  }}
        animate={{ transform: "perspective(1200px) translate(-50%, -50%)", x: 20, y: 30  }}
        transition={{ repeat: Infinity, repeatType: 'mirror', repeatDelay: 4, duration: 2 }}
        variants={variants}
      >
        <div className='contents'>
          <div className='flex flex-row flex-none flex-nowrap overflow-visible items-center justify-start h-min'>
            <div className={`relative ${color} flex flex-none overflow-visible items-start justify-start rounded-xl px-4 py-2 h-min`}>
                <div className='flex flex-col flex-none shrink-0 justify-start whitespace-pre transform-none h-auto w-auto '>
                  <p className='font-bold p-0 m-0'>{name}</p>
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

