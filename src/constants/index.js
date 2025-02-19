import {
  mobile,
  backend,
  creator,
  data,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Data Analyst & Visualization Wiz",
    icon: data,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quantum Computing Enthusiast",
    icon: creator,
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

const experiences = [
  {
    title: "IT Intern & Medical Researcher",
    company_name: "Daktari Msafiri",
    icon: daktariMsafiri,  // Replace with actual icon reference
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Aug 2019",
    points: [
      "Developed internal IT solutions to enhance operational efficiency and streamline business processes.",
      "Conducted research on Autism Spectrum Disorder (ASD) to improve specialized patient care.",
      "Collaborated with software developers to optimize the company’s website for better user experience.",
      "Revamped business email communication systems, enhancing client engagement and brand perception.",
    ],
  },
  {
    title: "Junior IT Officer",
    company_name: "KeNHA (Kenya National Highways Authority)",
    icon: kenha,  // Replace with actual icon reference
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "Configured and optimized software solutions across multiple engineering departments, enhancing workflow efficiency.",
      "Performed laptop and software fine-tuning, improving system performance and user experience.",
      "Conducted IT asset inventory, identifying reusable devices and reducing unnecessary purchases.",
      "Provided IT troubleshooting and support, minimizing downtime and ensuring seamless operations.",
      "Assisted engineers in leveraging AutoCAD software for infrastructure projects.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "iTalanta",
    icon: italanta,  // Replace with actual icon reference
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Developed and maintained web applications using AngularJS, optimizing UI/UX for a seamless user experience.",
      "Eliminated technical debt by refactoring legacy code, improving system efficiency and maintainability.",
      "Implemented responsive design strategies to enhance cross-device compatibility.",
      "Collaborated with designers, product managers, and backend developers to create high-quality software solutions.",
      "Contributed to the enhancement of company-wide development best practices and coding standards.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Ergo Quantum",
    icon: ergoQuantum,  // Replace with actual icon reference
    iconBg: "#383E56",
    date: "April 2024 - Oct 2024",
    points: [
      "Designed and developed an interactive persistent homology visualization tool, enabling users to dynamically explore topological features.",
      "Implemented SHAP value visualizations for Betti curve dimensions, enhancing interpretability in machine learning models.",
      "Optimized data workflows by integrating multi-dimensional analysis and improving filtering mechanisms.",
      "Developed and maintained dynamic Power BI dashboards to track performance metrics and pipeline results.",
      "Collaborated with cross-functional teams to troubleshoot and enhance data visualizations, ensuring accurate and actionable insights.",
      "Led the transition of data visualization workflows from Jupyter Notebooks to Power BI, increasing accessibility and scalability.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
