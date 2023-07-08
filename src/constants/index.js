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
    jobit,
    tripguide,
    threejs,
    incu,
    database,
    java,
    matlab,
    python,
    sql,
    swift
  } from "../assets";

  import { LukAR } from "../assets"
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "IOS Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "java",
      icon: java,
    },
    {
      name: "MATHLAB",
      icon: matlab,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Swift",
      icon: swift,
    },
  ];
  
  const experiences = [
    {
      title: "Sales Assistant",
      company_name: "Incu",
      icon: incu,
      iconBg: "#FF7007",
      date: "May 2022 - Present",
      points: [
        "Direct employees in daily operations such as serving customers, inventory taking, reconciling cash and managing in store marketing.",
        "Track and manage inventory at store",
        "Strong customer service, management and communication skills",
        "Maximum sales through the delivery of high quality customer service and outstanding product knowledge",
      ],
    },
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
      name: "LukAR",
      description:
        "Augmented reality shopping assistant that uses object detection with an AR UI to allow for users to efficiency conduct their grocery shopping.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "YOLO",
          color: "green-text-gradient",
        },
        {
          name: "roboflow",
          color: "pink-text-gradient",
        },
        {
          name: "colab",
          color: "blue-text-gradient",
        },
        {
          name: "Darknet",
          color: "orange-text-gradient",
        },
        {
          name: "unity",
          color: "pink-text-gradient",
        },
      ],
      image: LukAR,
      source_code_link: "https://github.com/YapSengKuang/AR-Glasses",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/YapSengKuang/Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };