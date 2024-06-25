import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// 8oFPBLsXA3P-ko4xC
// template_xxx40cr
// service_p0g2mft

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_p0g2mft',
        'template_xxx40cr',
        {
          from_name: form.name,
          to_name: 'Mohamed',
          from_email: form.email,
          to_email: 'mohamedabotreka40@gmail.com',
          message: form.message,
        },
        '8oFPBLsXA3P-ko4xC'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong');
        }
      );
  };
  return (
    <div
      className="xl:tp-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', 'twen', 0.2, 1)}
        className="flex-[.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="what's your name"
            className="bg-tertiary py-4 px-6 text-white
             placeholder:text-secondary rounded-lg 
            outlined-none border-none font-medium "
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="what's your email"
            className="bg-tertiary py-4 px-6 text-white
             placeholder:text-secondary rounded-lg 
            outlined-none border-none font-medium "
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
          </label>
          <textarea
            rows="7"
            value={form.message}
            name="message"
            onChange={handleChange}
            placeholder="what do you want to say"
            className="bg-tertiary py-4 px-6 text-white
             placeholder:text-secondary rounded-lg 
            outlined-none border-none font-medium "
          />
          <button
            tpye="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit
           text-white font-bold shadow-md shodow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'twen', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
