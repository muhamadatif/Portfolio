import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.74)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
           py-5 px-12 min-h-[280px]
           flex justify-evenly items-center flex-col
           "
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px]  max-w-7xl leading-[30px] "
        >
          "I am a passionate Full-Stack Web and Mobile Developer with over 4
          years of experience building modern, responsive, and scalable
          applications. I bring strong problem-solving skills to web and mobile
          development. I specialize in React, React Native, JavaScript, HTML,
          CSS (including Tailwind and Sass), and backend technologies like
          Node.js, Express, and MongoDB. I also have experience with Next.js for
          server-side rendering and REST APIs. I have built various projects,
          including web apps, e-commerce platforms, and mobile applications. I
          am dedicated to delivering high-quality work, meeting deadlines, and
          continuously improving my skills. If you're looking for a reliable
          developer who understands your business needs, let's work together!"
        </motion.p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
