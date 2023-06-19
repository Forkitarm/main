import React from 'react'
import {motion } from 'framer-motion'
import {styles} from '../style'

const Hero = () => {

  const textAnimation = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.7, ease: "easeInOut", delay: 1.5}},
  };

  const pAnimation = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 1, ease: "easeInOut", delay: 1.5}},
  };

  const dotAnimation = {
    hidden: {opacity: 0,},
    visible: {opacity: 1, transition: {duration: 1, delay: 1.5, ease: "easeInOut"}},
  };
  const gradAnimation = {
    hidden: {height: 0},
    visible: {height: "240px", transition: {duration: 1.5, delay: 0.5}},
  }

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <motion.div initial="hidden" animate="visible" variants={dotAnimation} className="w-6 h-6 rounded-full bg-[#ec6b1e]" />
          <motion.div initial="hidden" animate="visible" variants={gradAnimation} className="w-1 sm:h-80 h-80 orange-gradient" />
          </div>
          <div>
            <motion.h1 initial="hidden" animate="visible" variants={textAnimation} className={`${styles.heroHeadText} text-white`}>
              Hi, Ich bin <span className="text-[#ec6b1e]">Dominik.</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={pAnimation} className={`${styles.heroSubText} mt-2 text-white-100`}>
              Ich entwickle 3D Visuals,<br className="sm:block hidden"/> Benutzeroberflächen und Webanwendungen.
            </motion.p>
          </div>
      </div>
      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start sm:flex hidden p-2 ">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div> 
        </a>
      </div>
    </section>
  )
}

export default Hero