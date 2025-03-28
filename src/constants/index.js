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
    swift,
    c,
    cpp,
    csharp,
    r,
    xcode,
    aws,
    yolo,
    tableau,
    unity,
    clothingApp,
    honoursProject
  } from "../assets";

  import { LukAR, portfolio } from "../assets"
  
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
    {
      name: "C",
      icon: c,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "AWS S3",
      icon: aws,
    },
    {
      name: "Tableau",
      icon: tableau,
    }
  ];
  
  const experiences = [
    {
      title: "Sales Assistant",
      company_name: "Incu",
      icon: incu,
      iconBg: "#FF7007",
      date: "May 2022 - Present",
      points: [
        "Developed excellent consultative skills while managing a high-pressured and dynamic environment.",
        "Built a comprehensive understanding of store products to effectively consult with clients and deliver high-quality and tailored service.",
        "Fostered strong customer relationships by consistently demonstrating empathy, active listening, and a commitment to meeting individual needs.",
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
        "Augmented reality shopping assistant that uses object detection with an AR UI to allow for users to efficiently conduct their grocery shopping.",
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
          name: "Unity",
          color: "pink-text-gradient",
        },
      ],
      image: LukAR,
      source_code_link: "https://github.com/YapSengKuang/AR-Glasses",
    },
    {
      name: "Portfolio",
      description:
        "Website that showcases my works, skills, accomplishments, experience, and contact information.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/YapSengKuang/Portfolio",
    },
    {
      name: "Clothing Tracking iOS App",
      description:
        "Created an iOS app for tracking clothing items using Swift and Core Data. Conducted market analysis to identify features that set it apart from competitors.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "Core Data",
          color: "green-text-gradient",
        },
        {
          name: "iOS",
          color: "pink-text-gradient",
        },
      ],
      image: clothingApp,
      source_code_link: "https://github.com/YapSengKuang/Clothing-Tracking-App",
    },
    {
      name: "Honours Project - Smart VR Sports Training",
      description:
        "Led a team to develop and enhance a VR sports training system to improve athletic performance through virtual simulations and experiments.",
      tags: [
        {
          name: "Unity",
          color: "pink-text-gradient",
        },
        {
          name: "VR",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: honoursProject,
      source_code_link: "https://github.com/YapSengKuang/Honours-VR-Project",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };