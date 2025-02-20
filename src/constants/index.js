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
  azure,
  postgres,
  python,
  rails,
  jupyter,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ergo,
  italanta,
  kenha,
  msafiri,
  auctioneers,
  bliss,
  nahla,
  peperuka,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "PostgresSQL",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "IT Intern & Medical Researcher",
    company_name: "Daktari Msafiri",
    icon: msafiri,
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
    icon: kenha,
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
    icon: italanta,
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
    icon: ergo,
    iconBg: "#FFFFFF",
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
    name: "Nahla Naturals",
    description:
      "Fully responsive e-commerce website designed to showcase and sell natural products. Integrated Sanity CMS for dynamic content management and built an intuitive shopping experience with optimized performance and mobile responsiveness.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "sanitycms",
        color: "green-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: nahla,
    source_code_link: "https://github.com/randy-kip/nahla-naturals",
  },
  {
    name: "Auctioneers Web Platform",
    description:
      "Dynamic auction website where users can bid in real-time while sellers set their desired prices. Built with a Ruby on Rails backend supporting complex business logic, real-time updates, and secure transactions, ensuring a seamless and intuitive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rubyonrails",
        color: "green-text-gradient",
      },
      {
        name: "auction",
        color: "pink-text-gradient",
      },
    ],
    image: auctioneers,
    source_code_link: "https://github.com/sereyatiampati/Auctioneers-ReactJS-Client",
  },
  {
    name: "Peperuka Local Vendors",
    description:
      "Full-stack platform connecting local vendors with customers, promoting local commerce. Built with a Ruby on Rails backend and a ReactJS frontend, featuring vendor profiles, product catalogs, and secure transactions. Currently scaling to support additional urban areas.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "rubyonrails",
        color: "green-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: peperuka,
    source_code_link: "https://github.com/randy-development-work/phase-4-peperuka-project-client",
  },
  {
    name: "Destination Bliss",
    description:
      "Interactive travel app that enables users to discover and bookmark destinations. Developed using FlutterFlow’s low-code platform, featuring dynamic search, filtering options, and smooth performance across devices for an enhanced travel discovery experience.",
    tags: [
      {
        name: "flutterflow",
        color: "blue-text-gradient",
      },
      {
        name: "travelapp",
        color: "green-text-gradient",
      },
      {
        name: "mobileapp",
        color: "pink-text-gradient",
      },
    ],
    image: bliss,
    source_code_link: "https://destination-bliss.flutterflow.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };
