import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactNode } from 'react';


// Define proper types for all data structures
type ProjectLink = {
  type: string;
  href: string;
  icon: ReactNode;
};

type Project = {
  title: string;
  active?: boolean;
  href?: string;
  dates?: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image?: string;
  video?: string;
};

export const DATA = {
  name: "Shiv Shah",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Full Stack Developer | DevOps | 3x AWS Certified | Prompt Engineer",
  summary: "I recently finished my Master's in Computer Science, where I got to work with Large Language Models (LLMs) and learned how to integrate their APIs into bigger systems. Before that, I did internships focused on JavaScript and Python based libraries like React,Node,Express, Typescript, Django, Numbpy,Pandas. which gave me a solid grounding in programming. I'm also really into automation, web scraping, and cloud deployment—I even have three AWS certifications! I love staying up-to-date with the latest tech trends and am always eager to learn new things and take on exciting projects.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "AWS",
    "Node.js",
    "Python",
    "Java",
    "FastAPI",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Figma",
    "Django",
    "Express",
    "Electron.js",
    "MongoDB",
    "Jmeter",
    "Web Scraping",
    "Vue.js",
    "TailwindCSS",
    "Selenium",
    "SQLite",
    "MySQL",
    "Redis",
    "Web Containers",
    "Go",
    "Google Cloud",
    "Prisma",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shiv-shah-0711b1210/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Vantro",
      badges: [],
      location: "Remote",
      title: "Software Engineer ",
      logoUrl: "icon1.png",
      start: "2024",
      end: "Present",
      description:
        "Building an Innovative Generative AI Based Prompt Management Platform for Enterprises using LLM like GPT-4, Claude 2 leveraging MERN Stack and Docker Containers and AWS Services. Designed multiple UI with React and Material UI v5. Developed various REST APIs utilizing Node.js, Flask and Mongo Db to enhance application functionality and performance. Engineered a multi-container setup for various products using Docker and Docker Compose, in line with microservices architecture, to improve application modularity and scalability. Implemented multipart file uploads and compression harnessing Apache Parquet, subsequently storing the outcomes in AWS S3 and containerized 10+ Rest API leveraging Flask , MongoDB and Docker containers."
         },
    {
      company: "F13 Technologies",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/icon2.png",
      start: "2022",
      end: "2022",
      description:
        "Consolidated Python and Django REST Framework models and converters for developing cloud-based applications. Developed and accomplished a user interface using HTML, CSS, and JavaScript, leveraging Pandas for data table visualization; reduced data analysis time by 40% and restructured data visualization accuracy for team. Engineered robust database functionalities utilizing MySQL Workbench for data management. Orchestrated application hosting on AWS, seamlessly integrating S3, Lambda, and Load Balancers for optimal performance.Deployed application on AWS cloud using python’s http server and AWS EC2 and Code Deploy services."
       },
    {
      company: "One Advanced",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/icon3.png",
      start: "2021",
      end: "2021",
      description:
      "Provided digitalized solutions for product support, resulting in a time savings of 20+ hours per week. Refined a cloud-based ERP with upgrades and bug fixes, covering financial tools, CRM, and payroll management. Managed OpenPeople an automated payroll system, expanding Progress 4GL for legacy system efficiency. Streamlined university management by developing an MVC, C#, and SQL Server interface, 56% increase in data administration efficiency."
    },
    {
      company: "Krina Infotech Solutions",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer / Full Stack Developer",
      logoUrl: "/icon4.png",
      start: "2020",
      end: "2021",
      description:
   "Spearheaded a web application overhaul using Figma, React, and Node.js, improving user experience and streamlining data processes. Achieved a 33% reduction in order processing time and boosted customer satisfaction by 25%. Established a sophisticated data storage architecture, synthesizing SQLite with AWS RDS through Docker for increased scalability. Connected models to URLs, boosting public access and leveraging on AWS services.Initiated automated testing using Selenium WebDriver, resulting in a 50% reduction in manual testing time and ensuring a seamless user experience across all platforms."  },
  ],
  education: [
    {
      school: "Stevens Institute of Technology",
      href: "https://www.stevens.edu/",
      degree: "Masters of Computer Science and Software Engineering",
      logoUrl: "/stevenslogo.jpeg",
      start: "2022",
      end: "2024",
    },
    {
      school: "Navrachana Institute of Technology",
      href: "https://nuv.ac.in/",
      degree: "Bachelor of Technology - Btech in Computer Science and Engineering",
      logoUrl: "/navrachana.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "CodePlay",
      active: true,
      description: 
      "I developed this application with a focus on full-stack development. It enables users to generate not just single files or isolated components but complete, production-ready codebases. Additionally, the app allows users to preview their code using a cloud container and download it as a structured ZIP file",
      technologies: [
        "React 18",
        "Typescript",
        "Vite",
        "React Router",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Web Containers",
        "Prompt Engineering",
      ],
      links: [
        {
          type: "Website",
          href: "https://code-play-ov4o.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "CoplayDemo.mp4",
    },
    {
      title: "Jive Joint",
      active: true,
      description:
      "The core idea behind this project is to enhance music management at venues such as bars, fine dining establishments, events, and functions. Users can add their favorite songs to a queue, and the song with the highest number of upvotes will play next. Additionally, users have the option to pay a fee to skip the queue and prioritize their song.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Docker",
        "Shadcn UI",
        "Next Oauth",

      ],
      links: [
        {
          type: "Website",
          href: "https://jiver-j45h.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/JiveJoint.mov",
    },
    {
      title: "Easy Pic Z",
      href: "https://svg-a9z7.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "The idea behind this project was to create a tool to assist with daily full-stack development tasks. It simplifies SVG-to-PNG conversion with features like high-resolution exports, custom zoom, automatic naming, and file filtering. It also includes tools for creating square images for social media, customizable backgrounds, and photo borders. Running locally, it ensures privacy and reliable performance while making image processing quick and user-friendly.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://svg-a9z7.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/easypicz.mov",
    },
    {
      title: "Reddit to Youtube Video Generator Auto Bot",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "I created a Reddit bot that automates the process of scraping data from Reddit, converting it into videos, adding audio, scheduling uploads, and posting them on YouTube without limitations. The primary goal of this project was to explore automation through my first hands-on experience and to learn cross-platform desktop application development using Electron.js. Additionally, it was designed to serve as a genuine YouTube automation tool, addressing the lack of practical solutions amidst the abundance of misleading content on the topic.",
      technologies: [
        "Python",
        "Electron.js",
        "React",
        "Selenium",
        "Scrapy",
        "AutoPy"
      ],
      links: [
        {
          type: "Desktop Application",
          href: " ",
          icon: <></>
         
        },
      ],
      image: "",
      video:
        "RedditBot.mov",
    },
      
  ],
} as const;
