// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/htmlLogo.png";
import cssLogo from "./assets/tech_logo/cssLogo.png";
import javascriptLogo from "./assets/tech_logo/javascriptLogo.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import pythonLogo from "./assets/tech_logo/python.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";

// // Experience Section Logo's
import company_logo from "./assets/company_logo/companyLogo.webp";

// // Education Section Logo's
import school from "./assets/education_logo/schoolLogo.jpg";
import college from "./assets/education_logo/college.jpg";
import bachelor from "./assets/education_logo/bachelor.png";

// // Project Section Logo's
import ChatApp from "./assets/work_logo/chatApp.png";
import ecommerce from "./assets/work_logo/E-commerce.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: company_logo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      " Next Js",
    ],
  },
  // {
  //   id: 1,
  //   img: agcLogo,
  //   role: "Fullstack Engineer",
  //   company: "Agumentik Group of Companies",
  //   date: "July 2023 - March 2024",
  //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "HTML",
  //     "CSS",
  //     "SQL",
  //   ],
  // },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  // },
];

export const education = [
  {
    id: 0,
    img: bachelor,
    school: "ACHS College",
    date: "2078 - present",
    grade: "running",
    desc: "I currently studying Bachelor's of Computer Application (BCA) from BSA College, Lalitpur",
    degree: "Bachelor of Computer Application (BCA)",
  },
  {
    id: 1,
    img: college,
    school: "New Summit College",
    date: "2078",
    gpa: "3.36",
    desc: "I completed my class 12 education from New Summit College, Kathmandu, under the NEB board, where I studied Physics, Chemistry, and Mathematics, English with Computer Science.",
    degree: "School Leaving Certificate (SLC)",
  },
  {
    id: 2,
    img: school,
    school: "Arghakhanchi Secondary Boarding School",
    date: "2075",
    gpa: "3.40",
    desc: "I completed my class 10 education from Arghakhanchi Secondary Boarding School, under the SEE Board, where I studied Science with Computer.",
    degree: "SEE",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-commerce System",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: ecommerce,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/sandeshgm/ecommerce-sports",
    webapp: "https://github.com/sandeshgm/ecommerce-sports",
  },
  {
    id: 1,
    title: "Chat Application",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: ChatApp,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/sandeshgm/chat-app",
    webapp: "https://chat-app-2di6.onrender.com",
  },
];
