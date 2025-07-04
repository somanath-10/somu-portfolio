import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { redirect } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[290px] w-full cursor-pointer">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a final year Computer Science and Engineering undergraduate at the National Institute of Technology (NIT), Andhra Pradesh. I am a skilled software developer with experience in programming languages such as C++, JavaScript, Python, C, and Java. I specialize in frameworks like React, React Native, Node.js, and Express.js. I am also proficient in working with databases like MongoDB and PostgreSQL. Additionally, I have strong problem-solving abilities, demonstrated through my expertise in Data Structures and Algorithms.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className=" bg-black-100 p-8 rounded-2xl max-w-[360px]  min-h-[40px] flex justify-center items-center gap-2 cursor-pointer mt-4 "
        onClick={() => window.open("https://drive.google.com/file/d/1gBBcy9HIJBJ9dqwcMbDdp8NBWdWBG2ez/view?usp=sharing", "_blank")}
      >
        <h3 className="text-white text-[18px] font-bold text-center">
          Check Out My Resume!!
        </h3>
        <img src={redirect} alt="redirect" className="h-4" />
      </motion.div>

      <div className="mt-20 flex flex-wrap xs:gap-12 gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
