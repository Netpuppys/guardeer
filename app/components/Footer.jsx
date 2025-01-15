import React from 'react'
import footerImage from "../../public/delete/footer.png"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

const Footer = () => {
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
    >
        <Image
          src={footerImage}
          className="w-full h-fit mt-10"
          alt=""
        />
    </motion.div>
  )
}

export default Footer