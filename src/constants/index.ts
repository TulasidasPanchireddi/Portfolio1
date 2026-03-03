import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";


import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
 
  tailwind,
  nodejs,
  mongodb,
  git,
  aiProject,
  bank,
  trello,
  django,
  sql,
  shopperstack,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
{ title: "Python Developer", icon: backend },
  { title: "React Developer", icon: web },
  { title: "Node.js Developer", icon: mobile },
  { title: "Full Stack Developer", icon: creator },
];

const technologies: TTechnology[] = [
   {
    name: "Python",
    icon: python,
   },
   {
    name: "Django",
    icon: django,
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
 
  {
    name: "sql",
    icon: sql,
  },
];

const experiences: TExperience[] = [
 {
  title: "React JS Intern",
  companyName: "Robowaves",
  icon: web,
  iconBg: "#383E56",
  points: [
    "Developed real-time web applications including Trello Clone and ShopperStack using React JS.",
    "Built reusable components and implemented modern responsive UI designs.",
    "Integrated REST APIs for dynamic data handling and state management.",
    "Implemented routing, authentication and interactive features.",
    "Collaborated with team members using Git and GitHub in an agile environment."
  ],
},
  {
    title: "Django Backend Developer",
    companyName: "Personal Project",
    icon: backend,
    iconBg: "#E6DEDD",
    
    points: [
      "Developed a Bank Management System using Python and Django framework.",
      "Implemented secure user authentication and hashed PIN-based login system.",
      "Integrated SQLite database for account and transaction management.",
      "Built complete CRUD operations with proper data validation and error handling."
    ],
  },
  
];



const projects: TProject[] = [
  {
    name:  "AI Enhanced Database Query Assistant",
    description:
       "Built an intelligent assistant using Django that converts natural language queries into SQL using GroqAI and LangChain.",
   tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
      { name: "langchain", color: "pink-text-gradient" },
    ],
    image: aiProject,
    sourceCodeLink: "https://github.com/TulasidasPanchireddi/AI_Enhnaced_Database_Query_Assistant",
  },
   {
    name: "Bank Management System",
    description:
      "Developed a secure banking application using Python and Django with authentication, hashed PIN security, account management, and transaction handling using ORMs",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
     
    ],
    image: bank,
    sourceCodeLink: "https://github.com/your-bank-project-link",
  },

  {
    name: "Trello Clone",
    description:
      "Developed a real-time task management application using React with drag-and-drop functionality, routing, authentication, and dynamic state management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: trello,
    sourceCodeLink: "https://github.com/geethamurthy595/Trello-Project",
  },

  {
    name: "ShopperStack E-commerce",
    description:
      "Built an e-commerce web application using React with product listing, cart management, authentication, and REST API integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: shopperstack,
    sourceCodeLink: "https://github.com/your-shopperstack-link",
  },
];

export { services, technologies, experiences, projects };
