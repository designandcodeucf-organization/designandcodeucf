import {  motion } from 'framer-motion'
import { useEffect, useState, useRef} from 'react';

export default function Bubble({ name, hex, right, coordinates }){

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on viewport resize
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  
  // Destructure the coordinates object
  let { mobileTop, mobileLeft, tabTop, tabLeft, desktopTop, desktopLeft, x, y } = coordinates
  console.log(desktopTop+ 'yo')

  // returns either the mobile position or desktop
  function handleTopQuery(){
    if (windowWidth < 810){
      return mobileTop
    }
    else if (windowWidth < 1200){
      return tabTop
    } else{
      return desktopTop
    }
  }
  function handleLeftQuery(){
    if (windowWidth < 810){
      return mobileLeft
    }
    else if (windowWidth < 1200){
      return tabLeft
    } else{
      return desktopLeft
    }
  }
  
  // place these positions in a ref
  let responsiveTop = useRef(handleTopQuery())
  let responsiveLeft = useRef(handleLeftQuery())

  console.log(responsiveLeft.current)
  // handles media query event listeners
  useEffect(()=>{
    // Adding resize event for windowWidth
    window.addEventListener('resize', updateWindowWidth)
    
    if (windowWidth <= 809){
      responsiveTop.current = mobileTop
      responsiveLeft.current = mobileLeft
    } else if(windowWidth < 1200) {
      responsiveTop.current = tabTop
      responsiveLeft.current = tabLeft
    }else{
      responsiveTop.current = desktopTop
      responsiveLeft.current = desktopLeft
    }

    //  Clean up the event listener when the component unmounts 
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };

  },[windowWidth, mobileTop, mobileLeft, tabTop, tabLeft, desktopLeft, desktopTop])

  // transition animation
  function template({ x, y }) {
    return `perspective(1200px) translate(-50%, -50%) translateX(${x}) translateY(${y}) scale(1)`
  }

  return(
    <>
      <motion.div
        className={`z-1 absolute h-auto w-auto `}
        style={{x: 0, y: 0, top:`${responsiveTop.current}`, left:`${responsiveLeft.current}`}}
        animate={{ x: `${x}`, y: `${y}` }}
        transformTemplate={template}
        transition={{  ease: "easeInOut", repeat: Infinity, repeatType: 'mirror', repeatDelay: 4, duration: 2 }}
      >
        <div className='contents'>
          <div className='flex flex-row flex-none flex-nowrap overflow-visible items-center justify-start h-min'>
            <div style={{backgroundColor:`${hex}`}} className={`relative flex flex-none overflow-visible items-start justify-start rounded-xl px-3 py-1.5 h-min`}>
                <div className='flex flex-col flex-none shrink-0 justify-start whitespace-pre transform-none pointer-events-none h-auto w-auto'>
                  <p className='font-bold text-[15px] p-0 m-0'>{name}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="  absolute flex items-center justify-center flex-none flex-row flex-nowrap gap-2.5 h-3.5 w-3.5 right-[-9px] top-[-9px] z-10 overflow-visible p-0"
        // Conditional rendering for the arrow
          style={!right ? { transform: 'rotate(-90deg) translateZ(0px)', opacity: 1, left: '-8px' } : null}
        >
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 14 15" xmlSpace="preserve">
            <path fill={hex} d="M11.1,0.5c1.4-0.3,2.7,1,2.4,2.4l-2.1,9.9c-0.4,2-3.5,2.2-4.5,0.4c-0.8-1.5-1.6-2.8-2.5-3.7C3.6,8.6,2.5,7.8,1.3,7.2c-1.8-1-1.6-4.2,0.4-4.7L11.1,0.5z"/>
          </svg>
        </div>
      </motion.div>
    </>
  )
}

