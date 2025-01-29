'use client'

import { useInView } from "react-intersection-observer";
import { motion } from "motion/react"

const AnimatedContainer = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false, // Animation triggers only once
    });

  return (
    <motion.div 
        ref={ref}
        initial={{ transform: "translateY(60px)", opacity: 0 }}
        animate={inView ? { transform: "translateY(0px)", opacity: 1 } : {}}
        transition={{
            type: "spring", // Spring effect for smooth animation
            stiffness: 100, // Adjust the stiffness of the spring (higher is snappier)
            damping: 10, // Controls how the spring settles (lower is more oscillatory)
        }}
        className="w-full h-full bg-yellow-blue-gradient p-[1px] rounded-[1.5rem]"
    >
        <div className="bg-black relative w-full h-full rounded-[1.5rem] overflow-hidden">
            {children}
        </div>
    </motion.div>
  )
}

export default AnimatedContainer