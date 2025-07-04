import { x } from "../assets";
import { gmail } from "../assets";
import { linkedin } from "../assets";
import { github } from "../assets";
import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  weatherApp,
  ecomzy,
  studyNotion,
  NitapHms,
  thinkLogic,
  express,
  sql,
  code,
  nitap,
  cpp,
  postgreSQL,
  linux,
  python,
  java,
  mui,
  bootstrap,
  postman,
  bash,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer (Web)",
    icon: web,
  },
  {
    title: "React Native Developer (Mobile)",
    icon: mobile,
  },
  {
    title: "C++ Programmer",
    icon: code,
  }
];

const technologies = [
  {
    name : "C++",
    icon : cpp
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name : "Python",
    icon : python
  },
  {
    name : "JAVA",
    icon : java
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name : "PostgreSQL",
    icon : postgreSQL
  },
  {
    name: "git",
    icon: git,
  },
  {
    name : "Linux",
    icon : linux
  },
 

 
  {
    name : "Postman",
    icon : postman
  },
];

const experiences = [
  {
    title: "Full Stack App Developer Intern",
    company_name: " Think Logic Tech Solutions Private Limited",
    icon: thinkLogic,
    iconBg: "#e1e1e3",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Developed a scalable PG Management application by designing a refined schema, ensuring high scalability.",
      "Built key features like authentication and PG booking, enhancing user experience and operational flexibility.",
      "Integrated Razorpay for payment processing, increasing payment speed by 60%, and Hyperverge for photo ID verification, reducing verification time by 80%.",
      "Implemented CRON jobs to automatically raise payment requests every month and manage complaints, saving PG owners 90% of their time and improving overall system efficiency."
    ],
  },
  {
    title: "Front-end  Mobile Developer",
    company_name: "National Institute of Technology, Andhra Pradesh",
    icon: nitap,
    iconBg: "#e1e1e3",
    date: "May 2024 - July 2024",
    points: [
      "Developed an official cross-platform mobile application for the College Hostel Management System, serving a user base of 2,500 students across the campus.",
      "Leading full-stack development with React Native, Node.js, and Express.js.",
      "Managing databases with PostgreSQL and Prisma ORM.",
      "Implemented features: Dynamic Hostel Room Booking, Outing Applications, Mess Feedback, Hostel Complaints, and Daily Attendance.",
      "Implemented user authentication and authorization for three different account types using JWT and cookies.",
      "Using GitHub for version control and project management.",
    ],
  }
];

const projects = [

  {
    name: "StudyNotion",
    description:
      "The fully functional web platform connects mentors and students for coding courses, providing easy access to content. Key features include an interactive instructor dashboard, a user-friendly cart system with payment gateway integration, and a ratings and reviews system. This platform streamlines course management and enhances the overall learning experience.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: studyNotion,
    live_link: "https://studynotion-seven-lac.vercel.app/",
    source_code_link: "https://github.com/somanath-10/studynotion",
  },
  {
    name: "Ecomzy",
    description:
      "A fully functional web cart implemented with a highly interactive user interface that enhances the shopping experience. It allows users to manage different items, adjust their quantities, and view a summary of their selections. Utilized local storage and Redux Toolkit for efficient state management, ensuring that user selections are preserved even after refreshing the page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "localstorage",
        color: "green-text-gradient",
      },
    ],

    image: ecomzy,
    live_link: "https://ecomzy-shopping-cart-pearl.vercel.app/",
    source_code_link: "https://github.com/somanath-10/Ecomzy-shopping-cart",
  },
  {
    name: "Weather App",
    description:
      "Built using Vanilla JS, this application detects the user's location and fetches weather information for that location using the OpenWeather API. It efficiently retrieves and renders real-time weather data, providing users with current conditions based on their geographic location. The project showcases the use of JavaScript’s geolocation API and external API integration without relying on additional frameworks or libraries.",
    tags: [
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
      {
        name: "openweatherapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    live_link: "https://weather-app-zeta-five-6hfi8937tx.vercel.app/",
    source_code_link: "https://github.com/somanath-10/Weather_app",
  },
];

const socials = [
  {
    name: "Gmail",
    image: gmail,
    link: "mailto:somanathr1006@gmail.com",
  },
  {
    name: "Linked In",
    image: linkedin,
    link: "https://www.linkedin.com/in/somanathreddys/",
  },
  // {
  //   name: "X (Twitter)",
  //   image: x,
  //   link: "https://x.com/AbhiramT_04",
  // },
  {
    name: "Github",
    image: github,
    link: "https://github.com/somanath-10",
  },
];

export { services, technologies, experiences, projects, socials };