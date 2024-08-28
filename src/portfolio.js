/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vi's Portfolio",
  description:
    "Game Developer | Turning Dreams into Code | Passionate About Creating the Next Generation of Games",
  og: {
    title: "Vi Tiet Portfolio",
    type: "website",
    url: "http://www.google.ca/",
  },
};

//Home Page
const greeting = {
  title: "Vi Tiet",
  logo_name: " Vi Tiet ",
  nickname: "ttvpro007",
  subTitle: "I dream in code and wake up ready to bring those dreams to life.",
  resumeLink:
    "https://drive.google.com/file/d/1HVPpM3Hn5e-5Kdqo-DOclVri8bZEuaia/view?usp=sharing",
  portfolio_repository: "https://github.com/ttvpro007?tab=repositories",
  githubProfile: "https://github.com/ttvpro007",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ttvpro007",
  // linkedin: "https://www.linkedin.com/in/vitiet-programmer/",
  // gmail: "vitiet.programmer@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ttvpro007",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vitiet-programmer/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:vitiet.programmer@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Programmer - Game Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing 2D & 3D visualization of cutting edge technologies.",
        "⚡ Developing AR & VR applications to simulate complex technological novel ideas.",
        "⚡ Designing & Implementing features for passion game projects.",
        "⚡ Building reusable tools to shorten development time for Unity.",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "skill-icons:unity-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Unreal",
          fontAwesomeClassname: "fontisto:unreal-engine",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "XCode",
          fontAwesomeClassname: "logos:xcode",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed a wide range of games and applications with Unity and C# for Windows & Mac.",
        "⚡ Built applications using C++, focusing on object oriented programming and efficient code practices.",
        "⚡ Created an AR application for Apple Vision Pro utilizing Swift, enhancing user interaction with innovative software & hardware integration.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "vscode-icons:file-type-csharp2",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "vscode-icons:file-type-cpp3",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "skill-icons:swift",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Video & Audio Editing",
      fileName: "DesignImg",
      skills: [
        "⚡ Engineered complex audio signal processing pipelines for custom hardware using Max 8, while ensuring precision and efficiency.",
        "⚡ Edited moonshot demo videos with custom software and hardware, delivering high-impact visual presentations.",
        "⚡ Experienced in video editing with Clipchamp and Capcut, producing high quality content.",
      ],
      softwareSkills: [
        {
          skillName: "Max 8",
          imageSrc: "max8.png",
        },
        {
          skillName: "Clipchamp",
          imageSrc: "clipchamp.png",
        },
        {
          skillName: "Capcut",
          fontAwesomeClassname: "hugeicons:capcut-rectangle",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "CodeWars",
      iconifyClassname: "cib:codewars",
      style: {
        color: "#eb4034",
      },
      profileLink: "https://www.codewars.com/users/ttvpro007",
    },
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Toronto Film School",
      subtitle: "Diploma, Video Game Design & Development",
      logo_path: "tfs_logo.png",
      alt_name: "Toronto Film School",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ Mastered core concepts of game design and development, including level design, character creation, and game mechanics, leading to the successful completion of multiple game projects.",
        "⚡ Developed proficiency in industry-standard tools such as Unity, Unreal Engine, and 3D modeling software, applying them to create immersive and engaging gaming experiences.",
        "⚡ Collaborated with peers in team-based projects, honing skills in project management, problem-solving, and cross-disciplinary communication essential for the game development industry.",
      ],
      website_link: "https://www.torontofilmschool.ca/",
    },
    {
      title: "Sheridan College",
      subtitle:
        "Diploma, Practical Nursing, Vocational Nursing and Nursing Assistants",
      logo_path: "sc_logo.png",
      alt_name: "Sheridan College",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ Completed a comprehensive range of courses focused on nursing fundamentals, including anatomy, pharmacology, and mental health care, providing a solid foundation in patient care.",
        "⚡ Engaged in hands-on clinical practice, applying theoretical knowledge to real-world scenarios, and developing critical skills in patient assessment, medication administration, and care planning.",
        "⚡ Collaborated on research projects exploring evidence-based practices in nursing, contributing to studies on patient outcomes and nursing interventions.",
      ],
      website_link: "https://www.sheridancollege.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with many evolving startups as a Game Developer, Programmer, and Software Architect.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Virtual Environments 3D Visuals & User Interface Prototyping",
          company: "Unmodal Research Inc.",
          // company_url: "",
          logo_path: "unmodal_logo.png",
          duration: "September 2022 - Present",
          location: "Toronto, ON, Canada",
          description: [
            "● Developing & prototyping user interface for cutting edge projects.\n",
            "● Visualizing 2D-3D environment and simulation of complex novel ideas.\n",
            "● Documentation creation, management, and maintenance.\n",
            "● Video & Audio editing for projects demonstration & moonshots.\n",
          ],
          color: "#000000",
        },
        {
          title: "Game Developer",
          company: "VTOneUp",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "vtoneup_logo.png",
          duration: "Junly 2020 - Present",
          location: "Mississauga, ON, Canada",
          description: [
            "● Design and implement features for passion game projects.\n",
            "● Build reusable tools to shorten the development time of the production pipeline.\n",
            "● Write documentation for developed tools and maintain them regularly.\n",
          ],
          color: "#0879bf",
        },
        {
          title: "Registered Practical Nurse",
          company: "Family Medicine Clinic",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "cpso_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Mississauga, ON, Canada",
          description: [
            "● Managing physical as well as electronic health records of the clinic.\n",
            "● Assisting medical doctors in assessing the patients as well as booking and managing the workflow of the clinic.\n",
            "● Operating procedures such as wound care, injections, and health assessment.\n",
            "● Managing the office's equipment as well as stocking/restocking medical supplies and vaccines.\n",
            "● Training and supervising new employees.\n",
          ],
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    // title: "Volunteers",
    // experiences: [
    // {
    //   title: "Google Explore ML Facilitator",
    //   company: "Google",
    //   company_url: "https://about.google/",
    //   logo_path: "google_logo.png",
    //   duration: "June 2019 - April 2020",
    //   location: "Hyderabad, Telangana",
    //   description:
    //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //   color: "#4285F4",
    // },
    // {
    //   title: "Microsoft Student Partner",
    //   company: "Microsoft",
    //   company_url: "https://www.microsoft.com/",
    //   logo_path: "microsoft_logo.png",
    //   duration: "Aug 2019 - May 2020",
    //   location: "Hyderabad, Telangana",
    //   description:
    //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //   color: "#D83B01",
    // },
    // {
    //   title: "Mozilla Campus Captain",
    //   company: "Mozilla",
    //   company_url: "https://www.mozilla.org/",
    //   logo_path: "mozilla_logo.png",
    //   duration: "Oct 2019 - May 2020",
    //   location: "Kurnool, Andhra Pradesh",
    //   description:
    //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //   color: "#000000",
    // },
    // {
    //   title: "Developer Students Club Member",
    //   company: "DSC IIITDM Kurnool",
    //   company_url:
    //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //   logo_path: "dsc_logo.png",
    //   duration: "Jan 2018 - May 2020",
    //   location: "Kurnool, Andhra Pradesh",
    //   description:
    //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //   color: "#0C9D58",
    // },
    // {
    //   title: "Developer Program Member",
    //   company: "Github",
    //   company_url: "https://github.com/",
    //   logo_path: "github_logo.png",
    //   duration: "July 2019 - Present",
    //   location: "Work From Home",
    //   description:
    //     "I am actively contributing to few open sourced projects. I have contributed to projects of organizations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //   color: "#181717",
    // },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portrait_pic.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. Let's make those dreams into reality together.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "🚧 Coming soon... 🚧",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Caven St, Mississauga, ON L5G4J5, Canada",
    locality: "Mississauga",
    country: "Canada",
    region: "Ontario",
    postalCode: "L5G4J5",
    streetAddress: "Caven Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/WcVsTYhmzgsvaSSz6",
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
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
