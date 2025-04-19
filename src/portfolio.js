/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tiago Martinho",
  description:
    "I am a Computer Science and Engineering finalist student, passionate about software development, challenges and Rugby.",
  og: {
    title: "Tiago Martinho's Website",
    type: "website",
    url: "https://tmartinho.pt",
  },
};

//Home Page
const greeting = {
  title: "Tiago Martinho",
  logo_name: "Tiago Martinho",
  nickname: "Computer Science & Engineering Student",
  subTitle:
    "I am a master's finalist student in Computer Science and Engineering, passionate about software development, challenges and Rugby.",
  resumeLink:
    "https://www.canva.com/design/DAFcAqGTokg/8vxnWbl915jQVOYrjgrkIA/edit?utm_content=DAFcAqGTokg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  githubProfile: "https://github.com/tiagomartinhoo",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/tiagomartinhoo",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tiago-martinhoo/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tiagomartinho.work@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tiagomartinhoo/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Programming Languages",
      fileName: "coding.svg",
      skills: [
        "🚀 Proficient in Java, Kotlin, JavaScript, TypeScript, and Python",
        "🚀 Skilled in web development using HTML and CSS",
      ],
      softwareSkills: [
        { skillName: "Java", imageSrc: "java.png" },
        { skillName: "Kotlin", imageSrc: "kotlin.png" },
        { skillName: "C", imageSrc: "c.png" },
        { skillName: "JavaScript", imageSrc: "javascript.png" },
        { skillName: "TypeScript", imageSrc: "typescript.png" },
        { skillName: "Python", imageSrc: "python.png" },
        { skillName: "Dart", imageSrc: "dart.png" },
        { skillName: "HTML", imageSrc: "html.png" },
        { skillName: "CSS", imageSrc: "css.png" },
      ],
    },
    {
      title: "Cloud & Databases",
      fileName: "cloud.svg",
      skills: [
        "🚀 Experienced with cloud platforms like Google Cloud Platform and Azure",
        "🚀 Skilled in managing databases such as PostgreSQL, MongoDB, and Elasticsearch",
      ],
      softwareSkills: [
        { skillName: "Google Cloud Platform", imageSrc: "gcp.png" },
        { skillName: "Azure", imageSrc: "azure.png" },
        { skillName: "Azure DevOps", imageSrc: "azure-devops.png" },
        { skillName: "Terraform", imageSrc: "terraform.png" },
        { skillName: "Firebase", imageSrc: "firebase.png" },
        { skillName: "PostgreSQL", imageSrc: "postgreSQL.png" },
        { skillName: "MongoDB", imageSrc: "mongoDB.png" },
        { skillName: "Elasticsearch", imageSrc: "elasticsearch.png" },
      ],
    },
    {
      title: "Backend Development",
      fileName: "backend.svg",
      skills: [
        "🚀 Expertise in backend development using Spring and Node.js",
        "🚀 Configuring and managing servers with Nginx",
      ],
      softwareSkills: [
        { skillName: "Spring", imageSrc: "spring.png" },
        { skillName: "Node.js", imageSrc: "nodejs.png" },
        { skillName: "Nginx", imageSrc: "nginx.png" },
      ],
    },
    {
      title: "Frontend Development",
      fileName: "frontend.svg",
      skills: [
        "🚀 Developing responsive UI/UX with Jetpack Compose and React",
        "🚀 Styling applications using Bootstrap and Tailwind CSS",
      ],
      softwareSkills: [
        { skillName: "Jetpack Compose", imageSrc: "jetpack_compose.png" },
        { skillName: "React", imageSrc: "react.png" },
        { skillName: "Bootstrap", imageSrc: "bootstrap.png" },
        { skillName: "Tailwind CSS", imageSrc: "tailwind.png" },
      ],
    },
    {
      title: "OS & Tools",
      fileName: "tools.svg",
      skills: [
        "🚀 Proficient with tools like Docker, Postman, and Git",
        "🚀 Experienced in monitoring systems with Grafana",
      ],
      softwareSkills: [
        { skillName: "Android", imageSrc: "android.png" },
        { skillName: "Linux", imageSrc: "linux.png" },
        { skillName: "Docker", imageSrc: "docker.png" },
        { skillName: "Postman", imageSrc: "postman.png" },
        { skillName: "Grafana", imageSrc: "grafana.png" },
        { skillName: "Git", imageSrc: "git.png" },
        { skillName: "GitHub", imageSrc: "github.png" },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Master of Science - Computer Science and Engineering",
      subtitle: "NOVA School of Science and Technology",
      logo_path: "nova_sst.png",
      alt_name: "NOVA SST",
      duration: "2023 - 2025",
      descriptions: [
        "Deepened my knowledge, exploring specialized areas of computing and frontend development. My research interests encompass Artificial Intelligence, Frontend Development and Cloud Technologies.",
      ],
      website_link: "https://www.fct.unl.pt/en/education/course/masters-computer-science-and-engineering",
    },
    {
      title: "Bachelor of Science - Computer Science and Engineering",
      subtitle: "Instituto Superior de Engenharia de Lisboa",
      logo_path: "isel.png",
      alt_name: "ISEL",
      duration: "2020 - 2023",
      descriptions: [
        "I have studied basic software engineering concepts of Computer Science, such as Algorithms and Data Structures, Object-Oriented Programming, Software Engineering, Databases, Computer Networks, among others."
      ],
      website_link: "https://www.isel.pt/en/curso/bsc-degree/computer-science-and-computer-engineering",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "So far I have actively contributed to full-stack development and cloud infrastructure projects, working collaboratively with teams to design and implement innovative solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experiences",
      work: true,
      experiences: [
        {
          title: "Projects Department Member",
          company: "In-Nova - Consultoria Júnior da FCT NOVA",
          company_url: "https://innova.pt/",
          logo_path: "innova.png",
          duration: "Oct 2023 - Present",
          location: "Lisbon, Portugal",
          description:
            "Collaborated on full-stack projects using advanced technologies. Demonstrated strong problem-solving skills and dedication to project timelines through active participation in challenging initiatives.",
          color: "#28B463",
          roles: [
            {
              title: "Project Manager",
              duration: "Jul 2024 - Present",
              description:
              "Managed projects applying agile project management for efficient delivery, led critical app development for the Innovation Week event, and managed full-stack projects.",
            },
            {
              title: "Projects Department Member",
              duration: "Oct 2023 - Jul 2024",
              description:
              "Collaborated on full-stack projects using advanced technologies. Demonstrated strong problem-solving skills and dedication to project timelines through active participation in challenging initiatives.",  
            }
          ]
        },
        {
          title: "IT Manager",
          company: "Academia Ubuntu Rugby",
          company_url: "https://ubunturugby.pt/",
          logo_path: "ubuntu.png",
          duration: "Sep 2023 - Present",
          location: "Sintra, Portugal",
          description:
            "Responsible for providing IT support and maintaining the team’s website. Successfully developed and launched the team’s website from scratch, enhancing online presence and user engagement.",
          color: "#FF5733",
        },
        {
          title: "Cloud Intern",
          company: "NTT DATA Europe & Latam",
          company_url: "https://pt.nttdata.com/",
          logo_path: "nttdata.png",
          duration: "Jul 2024 - Aug 2024",
          location: "Lisbon, Portugal",
          description:
            "Collaborated with the DevOps team to enhance and automate monitoring dashboards in Grafana for Azure resources and pipelines. Gained hands-on experience in cloud monitoring and automation.",
          color: "#0078D7",
        },
        {
          title: "Technology Sales Associate",
          company: "Xiaomi Store Portugal",
          company_url: "https://www.xiaomistore.pt/",
          logo_path: "xiaomi.png",
          duration: "Dec 2021 - Jun 2023",
          location: "Sintra, Portugal",
          description:
            "I was part of a technology work team where I perform several tasks. I developed my communication skills, organization skills and ability to follow instructions and achieve the goals set by my superiors.",
          color: "#F47B20",
        }
      ],
    },
    {
      title: "Other Experiences",
      experiences: [
        {
          title: "Campus Ambassador",
          company: "BNP Paribas",
          company_url: "https://www.bnpparibas.pt/",
          logo_path: "BNP_Paribas.png",
          duration: "Jan 2025 - Present",
          location: "Lisbon, Portugal",
          description: "Actively promoted BNP Paribas' initiatives and values on campus, engaging with students and fostering a positive image of the company. Developed strong communication and networking skills.",
          color: "#FF5733",
        },
        {
          title: "JEE Winter Conference 2025 Staff Marketing",
          company: "JE Europe",
          company_url: "https://juniorenterprises.eu/",
          logo_path: "jeeurope.png",
          duration: "Nov 2024 - Apr 2025",
          location: "Brussels, Belgium",
          description: "Worked as part of the Marketing Team for the largest JEE Winter Conference ever, ensuring smooth communication and engagement across digital channels. Managed real-time social media updates, crafted engaging content, and contributed to the event’s visibility.",
          color: "#FF5733",
        },
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "This is where I showcase the projects I’ve worked on, highlighting my experience and the skills I’ve developed along the way.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "About Me",
    profile_image_path: "contact.JPG",
    description:
      "I am a Computer Science and Engineering finalist student, passionate about software development, challenges and rugby, of which I am a Portuguese Federation athlete. " +
      "My research interests encompass Artificial Intelligence, Full-Stack Development and Cloud Technologies. " +
      "Since 2016, Rugby have taught me the power of teamwork, resilience, and discipline. Guided by the philosophy \"I am because we are\" I believe that individual success is rooted in collective achievement. I apply these values both on the field and in my professional life."
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
