import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../style'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {slideIn} from '../utils/motion'



// template_82qhing template
// service_qqzds68 service

// pub mEgaj0_6oaE5IjNzA

const Contact = () => {

  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send('service_qqzds68', 'template_82qhing', { from: form.name, to_name: 'Dominik', from_email: form.email, to_email: 'gagliodominik@gmail.com', message: form.message}, 'mEgaj0_6oaE5IjNzA').then(() => {
      setLoading(false)
      alert('Vielen Dank für Ihre Nachricht, ich werde mich schnellstmöglich bei Ihnen melden.')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);
      alert('Irgendwas ist schief gelaufen')
    }) 
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl ">
        <p className={styles.sectionSubText}>Eine Frage ?</p>
        <h3 className={styles.sectionHeadText}>
          Kontakt.
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Name
            </span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />

          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              E-Mail
            </span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="E-mail" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />

          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Nachricht / Frage
            </span>
            <textarea rows="7" type="message" name="message" value={form.message} onChange={handleChange} placeholder="Ihre Kontaktanfrage" className="resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" type="submit" >{loading ? 'Ihre Nachricht wird gesendet...' : 'Abschicken' }</button>
        </form>
      </motion.div>
      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" variants={slideIn('right', 'tween', 0.2, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")