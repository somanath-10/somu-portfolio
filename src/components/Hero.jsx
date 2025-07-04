import { motion } from "framer-motion";

import { styles } from "../styles";
import Me from '../assets/me.jpg';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

const Hero = () => {

  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Web Developer",
        "Full Stack Mobile Developer",
        "C++ Programmer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className={`relative z-0 w-full h-screen mx-auto sm:mb-0 mb-8`}>
        <div className="relative lg:w-[80%] lg:gap-[1rem] md:gap-[2rem] gap-[3rem] w-[95%] mx-auto top-[120px] h-auto flex lg:flex-row flex-col justify-between items-center">
          <div className={`mx-auto lg:w-[70%] w-full flex flex-row items-start gap-5`} >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Somanath Reddy</span>
              </h1>
              <p className={`${styles.heroSubText} mt-10 text-white-100`}>
                I am a <br></br><span className="role text-[#4fd446]" ref={el}></span>
              </p>
            </div>
          </div>
          <div className='relative lg:w-[30%] w-full flex justify-center items-center h-full animate-Profile'>
            {/* <img src={Me} className="w-full lg:max-w-[300px] max-w-[260px] z-0 mx-auto" alt="profile" /> */}
            <div className='max-w-[300px] w-[60%] h-[50%] max-h-[300px] mx-auto absolute z-[-10] top-[40%] left-[30%] rounded-full bg-[#8b7db8] shadow-sm blur-[70px]'></div>
            <div className='max-w-[300px] w-[60%] h-[50%] max-h-[300px] mx-auto absolute z-[-10] top-[10%] left-[0%] rounded-full bg-[#65eb5e] shadow-sm blur-[70px]'></div>
          </div>
        </div>

        <div className="absolute z-100 lg:bottom-12 md:bottom-8 bottom-4 w-full flex justify-center items-center">
          <a href="#about" className="z-100">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
