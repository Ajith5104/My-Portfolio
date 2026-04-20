// Centralized data file for all portfolio content

export const personalInfo = {
  name: "Ajith M",
  title: "Full-Stack Developer",
  tagline: "Computer Science graduate and aspiring Full Stack Developer skilled in React.js and the MERN stack, focused on building responsive, user-friendly web applications with clean and efficient code.",
  email: "ajithkumar51046@gmail.com",
  location: "Chennai, TamilNadu",
  bio: `Completed internships as a Full Stack Developer and Python Developer, gaining hands-on experience in developing and maintaining scalable web applications. Built responsive user interfaces and implemented back-end functionality using React.js, Node.js, Express.js, HTML, CSS, and Bootstrap. Collaborated with developers to debug, optimize, and improve application performance while following clean coding practices. Gained practical exposure to real-world project development, databases (MongoDB, SQL), version control with Git/GitHub, and the software development life cycle (SDLC), strengthening my ability to build efficient and maintainable software solutions.`,
  avatar: "/hero.png",
  resumeUrl: "https://drive.google.com/file/d/1jclbKWcS-7WM9DahzCo-k6Gc54Kgn5mP/view?usp=sharing",
  roles: [
    "Full-Stack Developer",
    "Vibe code Developer",
    "React Developer",
    "SQL Developer",
  ],
  socials: {
    github: "https://github.com/Ajith5104/",
    linkedin: "https://www.linkedin.com/in/ajithkumar22/",
    phone: "+91 8754083032",
    whatsapp: "https://wa.me/8754083032",
    email: "ajithkumar51046@gmail.com",
  },
};

export const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Figma", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Canva", category: "Frontend", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vercel_logo_2025.svg/960px-Vercel_logo_2025.svg.png?_=20250401203515" },
  
  // Backend
  { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Python", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel", category: "Backend", icon: "https://www.svgrepo.com/show/354513/vercel-icon.svg" },

  // AI-Tools
  { name: "Antigravity", category: "AI-Tools", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LP15Mr8fskmgPrzaMxLoO3GLfnzerSMckg&s" },
  { name: "Claude", category: "AI-Tools", icon: "https://img.utdstc.com/icon/f06/c8d/f06c8dd977118107909fd81a376fed319f134df8674bfc329b9dd7a4d8b01098:200" },
  { name: "Lovable", category: "AI-Tools", icon: "https://lovable.dev/img/logo/lovable-icon-bg-light.png" },
  { name: "Visual Studio Code", category: "AI-Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];


export const projects = [
  {
    id: 1,
    title: "FitFusion-AI",
    year: "2026",
    description: "FitFusion-AI is a next-generation platform that leverages high-fidelity AI to enable users to virtually try on clothing items. By combining garment images with person photos, the application generates realistic, high-resolution previews using the state-of-the-art IDM-VTON model.",
    tags: ["React","Replicate API","Cloudinary API","Node.js","Express.js","MongoDB","Git","GitHub","Vercel"],
    category: "WEB-APPS",
    github: "https://github.com/Ajith5104/FitFusion-AI",
    live: "https://fit-fusion-ai-kappa.vercel.app/",
    img: "/projectimg/FitFusion.jpg",
  },
  {
    id: 2,
    title: "NutriMind-AI",
    year: "2026",
    description: "NutriMind-AI is a comprehensive, AI-powered health and nutrition management platform. It helps users generate personalized diet plans using OpenAI's GPT models, track their health metrics through integrated calculators, and manage their nutritional journey with a sleek, modern interface.",
    tags: ["React","OpenAI API","Node.js","Express.js","MongoDB","REST API","Git","GitHub","Vercel"],
    category: "WEB-APPS",
    github: "https://github.com/Ajith5104/NutriMind-AI",
    live: "https://nutri-mind-ai-j4pi.vercel.app",
    img: "/projectimg/NutriMind.jpg",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    year: "2025",
    description: "This e-commerce platform is built using the MERN stack—MongoDB, Express.js, React, and Node.js—to deliver a fast and scalable web application. The responsive frontend uses Bootstrap for a smooth user experience across devices. Secure payments are handled through the Stripe API, while real-time email notifications are managed using the Mailtrap API. The platform offers an intuitive interface for seamless product browsing and secure online shopping.",
    tags: ["React", "Express","Node.js","MongoDB","HTML5", "CSS3","Git","GitHub"],
    category: "WEB-APPS",
    github: "https://github.com/Ajith5104/greensCart",
    live: "https://github.com/Ajith5104/greensCart",
    img: "/projectimg/greensCart.jpg"  },
      {
    id: 4,
    title: "Tourism-Website",
    year: "2025",
    description: "Explore your next adventure with our tourism website built using the MERN stack—MongoDB, Express.js, React, and Node.js. The platform allows users to discover popular travel destinations, explore rich multimedia content, and easily plan their trips through an intuitive and responsive interface. Users can receive instant support and guidance through the integrated Tawk.to livechat. With modern technology and a user-friendly design, the website provides a smooth and engaging experience for planning the perfect vacation.",
    tags: ["React","Bootstrap", "Node.js", "Express.js","Tawk.to","Git","GitHub"],
    category: "WEBSITE",
    github: "https://github.com/Ajith5104/Tourism-Website",
    live: "https://github.com/Ajith5104/Tourism-Website/",
    img: "/projectimg/Tourism.jpg",
  },
  {
    id: 5,
    title: "Weather-Forecasting",
    year: "2025",
    description: "This project is a responsive weather forecasting web application built using HTML, CSS, and JavaScript. It fetches real-time weather data from the OpenWeatherMap API and displays key details such as temperature, humidity, wind speed, and weather conditions for any city. The interface is designed to be clean, responsive, and easy to use. The application is deployed online using Netlify for fast and reliable access.",
    tags: ["HTML","CSS","JavaScript","Openweathermap API","netlify","Git","GitHub"],
    category: "WEB-APPS",
    github: "https://github.com/Ajith5104/Weather-Forecasting-Web-App",
    live: "https://weather-live-application.netlify.app/",
    img: "/projectimg/weather.jpg",
  },

];

export const stats = [
  { label: "Projects Completed", value: "30+", icon: "🚀" },
  { label: "Years Experience", value: "3+", icon: "⚡" },
  { label: "GitHub Stars", value: "500+", icon: "⭐" },
  { label: "Happy Clients", value: "20+", icon: "🤝" },
];

export const education = [
  {
    degree: "Master's in Computer Science",
    institution: "Annamalai University",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Annamalai_University_logo.png", // Example logo
    duration: "2022 – 2024",
    // location: "Your Location",
    cgpa: "7.9/10",
    description: "Completed a Master of Science in Computer Science, building a strong foundation in software development, data structures, and database management. Strengthened problem-solving skills while gaining a solid understanding of scalable application design and core software engineering principles.",
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "Thiruvalluvar University",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/TUemblem.png?_=20200629155755", // Example logo
    duration: "2019 – 2022",
    // location: "Your Location",
    cgpa: "8.4/10",
    description: "Completed a Bachelor of Science in Computer Science with a strong foundation in programming, algorithms, and database systems.Built practical skills through academic projects focused on web development and software design. Developed strong problem-solving abilities and a solid understanding of core software development concepts.",
    // achievements: [
    //   "Secured 1st place in University Hackathon",
    //   "Completed certification in Full-Stack Development",
    //   "Academic excellence award for consistent performance"
    // ],
    // coursework: ["Web Development", "Databases", "Software Engineering", "Data Structures", "Algorithms"]
  }
];
