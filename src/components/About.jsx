import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import {services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import {SectionWrapper} from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full cursor-pointer">
      <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)} className="w-full orange-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img className="w-16 h-16 object-contain" src={icon} alt={title}/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Übersicht.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Hallo Welt!<br></br>
      Wer bin ich?
      Mein Name ist Dominik Gaglio und ich bin Webentwickler und -designer mit einer Leidenschaft für die Erstellung visuell beeindruckender und benutzerfreundlicher Websites.
      <br></br>
      <br></br>
      Ich bin für Sie da
      um Ihre Website-Ziele in die Realität umzusetzen.
      Egal, ob Sie eine einfache Website-Aktualisierung oder eine von Grund auf neu erstellte Website benötigen, ich bin hier, um Ihre Vision zum Leben zu erwecken.
      </motion.p>
      <motion.a variants={fadeIn('', '', 0.5, 1)} className="text-[12px] text-[#ec6b1e]" target="_blank" href="https://threejs-journey.com/certificate/view/25620">Three.js Zertifikat</motion.a>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")