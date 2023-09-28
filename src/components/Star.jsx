import { easeInOut, motion } from 'framer-motion';

export default function Star({ width, hex, top, position, rotate, delay}) {
  return (
    <div className={`z-1 h-auto w-auto rotate-${rotate}`}>
      <div className={`absolute -top-${top} ${position}-0 animate-loadIn motion-reduce:animate-none`}>
        <motion.svg
          width={`${width}`}
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 md:w-auto"
          animate={{
            rotate: [-10, 10], // Define a rotation animation for shaking.
          }}
          transition={{
            duration: 2,
            ease: easeInOut,
            repeat: Infinity, // Set the shake animation to repeat indefinitely.
          }}
        >
          <path
            d="M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z"
            fill={`${hex}`}
          />
        </motion.svg>
      </div>
    </div>
  );
}
