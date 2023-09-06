import {
    mobile,
    backend,
    creator,
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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    encrypt,
    opencv,
    portf,
    parking,
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
      title: "Open Source Contributor", 
      icon: mobile,
    }, 
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
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
    
    
  ];
  
  const experiences = [
    {
      title: "ML Intern",
      company_name: "1Stop.ai",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2022 - November 2022",
      points: ["My main goal during this internship was to enhance my knowledge and skills in machine learning. I was eager to explore various aspects of this dynamic field.",
              "I actively engaged in creating several projects throughout my internship to apply the concepts I learned.",
              "One of my notable projects involved developing a sentiment analysis model for restaurant reviews. This project allowed me to work with natural language processing techniques and sentiment classification algorithms.",
              "Another significant project I undertook was the development of a volume control system using hand gesture recognition. This project delved into computer vision and gesture recognition, combining it with machine learning to create an interactive system.",
        ,
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Inventory management system using ML for SME",
      description:
        "Web-based platform that allows users to manage their inventory and predict future profit using amchine learning models",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "XGBoost",
          color: "blue-text-gradient",
        },
        {
          name: "Scikitlearn",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sid99i/Inventory-management-system-using-ML-for-SME",
    },
    {
      name: "Real-time Emotion Detection and Chatbot",
      description:
        "This project combines computer vision and natural language processing (NLP) techniques to detect emotions from webcam video streams and engage in interactive text-based conversations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sid99i/Emotion-detection-webapp-with-open-ai",
    },
    {
      name: "Enhanced Parking System",
      description:
        "A real-time system which tells you the available spaces in parking area using machine learning",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Android studios",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: parking,
      source_code_link: "https://github.com/sid99i/EnhanceParking",
    },
    {
      name: "3D Portfolio website ",
      description:
        "A portfolio website using 3D graphics and animations. ",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "React three Fiber",
          color: "blue-text-gradient",
        },
      ],
      image: portf,
      source_code_link: "https://github.com/sid99i/3D-portfolio-website",
    },
    {
      name: "DELHI METRO Shortest Path Finder",
      description:
        "Given a network of stations and their connections, this program calculates the shortest path and distance between two selected stations using weighted edges that represent the travel time between stations.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Dijkstra's algorithm",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sid99i/Delhi-metro-shortest-path-finder",
    },
    {
      name: "Image Encryption and Decryption with tkinter",
      description:
        " Python code for image encryption and decryption. This is a simple project to demonstrates the process of encrypting and decrypting images using a user-provided key.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
      ],
      image: encrypt,
      source_code_link: "https://github.com/sid99i/Visual-cryptography-for-images",
    },
    {
      name: "Real-time Hand Gesture Volume Control",
      description:
        "A real-time hand gesture-based volume control system. This project allows you to control the volume of your computer's audio output by using hand gestures captured by your webcam.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: opencv,
      source_code_link: "https://github.com/sid99i/Volume-control-using-hand-gestures",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };