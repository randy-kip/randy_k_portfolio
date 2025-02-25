import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a versatile Full Stack Developer with expertise in JavaScript, Python, and Ruby, specializing in building scalable, high-performance web applications. Proficient in frameworks like React and Ruby on Rails, I thrive on creating intuitive user experiences and efficient backend systems. Passionate about quantum computing, data analytics, machine learning, and interactive visualizations, I enjoy transforming complex data into actionable insights. I'm about bridging the gap between complexity and simplicity, connecting raw data to meaningful outcomes. Allow me to Contribute to Your Vision! 🚀
      </motion.p>

      {/* CV Button */}
      <div className="mt-6">
        <a
          href="public\resume\Randy_Kipkurui_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#915EFF] text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-all"
        >
          View My CV
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");