import React from 'react';
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Section Component
const Section = ({ children }) => {
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
    >
      {children}
    </motion.section>
  );
};

// Interface Component
export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const projects = [
  {
    url: '/projects/text-recog.png',
    about: "Hand written text recognition using keras tensorflow and using IAM's Handwritten text dataset",
    domain: 'Machine Learning'
  },
  {
    url: '/projects/evidence-management.png',
    about: "Evidence Management system using blockchain is a robust system that can be used to store the complaints registered by users without revealing their actual id",
    domain: 'Blockchain'
  },
  {
    url: '/projects/chatbot.png',
    about: "Simple chatbot using gemini api and ollama(llama3 for text and llava for image analysis)",
    domain: 'GenAI'
  },
  {
    url: '/projects/manage.png',
    about: "A Jewellery store management app that can be used to manage an entire jewellery business let it be smallscale or largescale.",
    domain: 'Full-Stack'
  },
  {
    url: '/projects/ipl-score-prediction.png',
    about: "IPL match score prediction by using keras and tensorflow and data from 2016.",
    domain: 'Machine Learning'
  },
  {
    url: '/projects/handgesture.gif',
    about: "Controlling the volume of the pc using handgestures using opencv and mediapipe.",
    domain: 'Computer Vision'
  },
  {
    url: '/projects/instagram.png',
    about: "Full Stack Instagram clone using React for frontend , noedjs for backend and mongodb for database",
    domain: 'Full-Stack'
  }
]

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Section>
      <h1 className="text-5xl font-bold my-10">Projects</h1>
        <Slider {...settings} style={{ width:"99%",maxHeight: "90vh" }}>
        {projects.map((project, index) => (
          <div key={index} className='flex justify-center items-center flex-col mx-2 p-2'><Card project={project} /></div>
        ))}
        </Slider>
    </Section>
  );
};

const Card = (project) => {
  return (
      <div className="w-full rounded-xl h-96 bg-white p-2 flex justify-between items-center flex-col">
        <img
          className="w-full max-w-8/12 h-60 rounded-xl"
        src={project.project.url}
          alt=""
        />
      <div className='flex justify-end items-center flex-col'>
        <p>{project.project.about}</p>
        <p className='font-bold'>{project.project.domain}</p>
      </div>
      </div>
  );
};

// AboutSection Component
const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Divy Mav</span>
      </h1>
      <motion.p
        className="text-lg text-white md:text-gray-600 mt-4 p-2 rounded-lg"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        I develop interactive websites
        <br />
        A passionate developer who is keen to learn new technology <br /> to create new products with
        beautiful and engaging design
      </motion.p>
      <motion.button
        className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

// Skills Data
const skills = [
  { title: "React / React Native", level: 90 },
  { title: "DBMS", level: 70 },
  { title: "Nodejs", level: 90 },
  { title: "Typescript", level: 60 },
  { title: "Blockchain", level: 40 },
  { title: "AI/ML", level: 40 },
  { title: "Business Management", level: 50 },
];

// Languages Data
const languages = [
  { title: "🇺🇸 English", level: 80 },
  { title: "🇫🇷 French", level: 20 }
];

// SkillsSection Component
const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView="visible" className='flex justify-between items-start w-full flex-col md:flex-row md:bg-transparent bg-[rgba(255,255,255,0.3)] p-4 rounded-xl'>
        <div className='flex justify-center items-start flex-col'>
          <h2 className="text-5xl font-bold">Skills</h2>
          <div className="mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: 1 + index * 0.2 },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 1 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: 2 + index * 0.2 },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${lng.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 2 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

// ContactSection Component
const ContactSection = () => {
  return (
    <Section>
      <div className="p-8 w-96 w-full flex justify-center items-center flex-col md:flex-row">
      <h2 className="text-5xl font-bold">Contact me :</h2>
        <div className='flex justify-start items-center'>
          <a href="https://www.linkedin.com/in/divy-mav-7b82b0249/?originalSubdomain=in"><img src="/icons/linkedin.svg" className='w-2/12' alt="" srcset="" /></a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=divymav5@gmail.com&tf=cm"><img src="/icons/gmail.svg" alt="" srcset="" /></a>
          <a href='https://mail.google.com/mail/u/0/?fs=1&to=divymav5@gmail.com&tf=cm'><img src="/icons/whatsapp-circle.svg" className='w-4/12' alt="" srcset="" /></a>
        </div>
      </div>
    </Section>
  );
};
