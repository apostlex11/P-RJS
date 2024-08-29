import {
    mobile,
    backend,
    creator,
    web,
    javascript,
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
    portfolio3js,
    valentines,
    discExchange,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "UC Berkeley Bootcamp Graduate",
      icon: creator,
    },
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "Back-End Developer",
      icon: backend,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const projects = [
    {
      name: "Portfolio ThreeJS",
      description:
        "Built a responsive portfolio with React, featuring 3D visuals via Three.js, integrated contact form with EmailJS, and styled using Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio3js,
      demo_link: "https://github.com/1",
      source_code_link: "https://github.com/apostlex11/P-RJS",
    },
    {
      name: "DiscExchange",
      description:
        "Developed a marketplace for vinyls, cassettes, and CDs, similar to eBay, focused on buying and selling physical music media. ",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL2",
          color: "orange-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Handlebars.js",
          color: "orange-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "multer",
          color: "pink-text-gradient",
        },
        {
          name: "dotenv",
          color: "green-text-gradient",
        },
        {
          name: "bcrypt",
          color: "orange-text-gradient",
        },
      ],
      image: discExchange,
      demo_link: "https://serene-forest-09402.herokuapp.com/",
      source_code_link: "https://github.com/apostlex11/DiscExchange",
    },
    {
      name: "My Valentines",
      description:
        "Created a playful website for my girlfriend, asking her to be my Valentine, where 'no' isn't an option.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: valentines,
      demo_link: "apostlex11.github.io/valentine/",
      source_code_link: "https://github.com/apostlex11/valentine",
    },
  ];
  
  export { services, technologies, projects };