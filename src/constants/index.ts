import lightLogo from "/redLogo.png";
import darkLogo from "/whiteLogo.png";
import comboImg1 from "/images/comboPacks/family-combo.png";
import comboImg2 from "/images/comboPacks/friends-combo.png";
import comboImg3 from "/images/comboPacks/solo-combo.png";
import comboImg4 from "/images/comboPacks/light-solo-combo.png";
import client1 from "../assets/images/malte-kramer.webp";
import client2 from "../assets/images/doug-petrie.webp";
import client3 from "../assets/images/zoltan-csonka.webp";
import client4 from "../assets/images/albert-mizuno.webp";
import client5 from "../assets/images/stephen-dash.webp";
import teamImg1 from "../assets/images/team/sunny_rathod.webp";
import teamImg2 from "../assets/images/team/prabhatsinh_maka.webp";
import teamImg3 from "../assets/images/team/gaurav_joshi.webp";
import teamImg4 from "../assets/images/team/viral_maru.webp";
import teamImg5 from "../assets/images/team/bhagirathsinh_jadeja.webp";
import teamImg6 from "../assets/images/team/rushi_vasani.webp";
import teamImg7 from "../assets/images/team/ayaz_kadri.webp";
import teamImg8 from "../assets/images/team/umang_vaghamshi.webp";
import teamImg9 from "../assets/images/team/nilesh_gujarati.webp";
import teamImg10 from "../assets/images/team/vaishnavi_kacha.webp";
import teamImg11 from "../assets/images/team/dhaval_bhadukiya.webp";
import teamImg12 from "../assets/images/team/dhruv_solanki.webp";
import teamImg13 from "../assets/images/team/rahul_solanki.webp";
import teamImg14 from "../assets/images/team/sandip_rathod.webp";
import eventListAImg1 from "../assets/images/event/1.webp";
import eventListAImg2 from "../assets/images/event/2.webp";
import eventListAImg3 from "../assets/images/event/3.webp";
import eventListAImg4 from "../assets/images/event/4.webp";
import eventListAImg5 from "../assets/images/event/5.webp";
import eventListAImg6 from "../assets/images/event/6.webp";
import eventListAImg7 from "../assets/images/event/7.webp";
import eventListBImg1 from "../assets/images/event/8.webp";
import eventListBImg2 from "../assets/images/event/9.webp";
import eventListBImg3 from "../assets/images/event/10.webp";
import eventListBImg4 from "../assets/images/event/11.webp";
import eventListBImg5 from "../assets/images/event/12.webp";
import eventListBImg6 from "../assets/images/event/13.webp";
import eventListBImg7 from "../assets/images/event/14.webp";

const comboLists = [
  {
    id: 1,
    title: "family combo",
    price: "1000",
    image: comboImg1,
  },
  {
    id: 2,
    title: "friends combo",
    price: "750",
    image: comboImg2,
  },
  {
    id: 3,
    title: "solo combo",
    price: "300",
    image: comboImg3,
  },
  {
    id: 4,
    title: "light solo combo",
    price: "175",
    image: comboImg4,
  },
];

const progress = [
  {
    id: 1,
    title: "awards & recognition",
    count: 20,
  },
  {
    id: 2,
    title: "guests served",
    count: 999,
  },
  {
    id: 3,
    title: "signature dishes",
    count: 20,
  },
  {
    id: 4,
    title: "years of service",
    count: 10,
  },
];

const clients = [
  {
    id: 1,
    image: client1,
    name: "Malte Kramer",
    rating: 4.2,
    // position: "Founder & CEO of Luxury Presence",
    // videoLink: "https://www.youtube.com/",
    message:
      "Shyam's has become our family's favorite place. Incredible food, welcoming staff, and an experience that always leaves us smiling.",
  },
  {
    id: 2,
    image: client2,
    name: "Doug Petrie",
    rating: 4.7,
    // position: "Founder & CEO of Fast Resume",
    // videoLink: "https://www.youtube.com/",
    message:
      "From starters to desserts, everything was top-notch. The chefs here are real flavor masters. Can't wait to come back.",
  },
  {
    id: 3,
    image: client3,
    name: "Zoltan Csonka",
    rating: 4.5,
    // position: "Founder & CEO of Ventigence",
    // videoLink: "https://www.youtube.com/",
    message:
      "I loved the cozy atmosphere and the attention to detail in every dish. Shyam's truly knows how to make dining special.",
  },
  {
    id: 4,
    image: client4,
    name: "Albert Mizuno",
    rating: 4.5,
    // position: "Founder of The Mizuno",
    message:
      "Shyam's is amazing! Every dish bursts with flavor, and the staff makes you feel right at home. My favorite spot in the city.",
  },
  {
    id: 5,
    image: client5,
    name: "Stephen Dash",
    rating: 3.5,
    // position: "Founder & CEO of Credible",
    message:
      "A culinary adventure in every bite. The flavors are bold, creative, and perfectly balanced. Highly recommend Shyam's for any foodie.",
  },
];

const dishLists = [
  {
    id: 1,
    image: "/images/dish/dish1.png",
  },
  {
    id: 2,
    image: "/images/dish/dish2.png",
  },
  {
    id: 3,
    image: "/images/dish/dish3.png",
  },
  {
    id: 4,
    image: "/images/dish/dish4.png",
  },
  {
    id: 5,
    image: "/images/dish/dish5.png",
  },
  {
    id: 6,
    image: "/images/dish/dish6.png",
  },
];

// const menuLists = [
//   {
//     id: 1,
//     name: ,
//     price: ,
//     image: ,
//   }
// ]

const socialLists = [
  {
    id: 1,
    name: "Facebook",
    image: "/images/socialLinks/facebook.svg",
  },
  {
    id: 2,
    name: "Instagram",
    image: "/images/socialLinks/instagram.svg",
  },
  {
    id: 3,
    name: "Whatsapp",
    image: "/images/socialLinks/whatsapp.png",
  },
];

const sideMenuLists = [
  {
    id: 1,
    name: "home",
    to: "/",
  },
  {
    id: 2,
    name: "menu",
    to: "/menu",
  },
  {
    id: 3,
    name: "about",
    to: "/aboutus",
  },
  {
    id: 4,
    name: "team",
    to: "/team",
  },
  {
    id: 5,
    name: "contact",
    to: "/contact",
  },
];

// const workLists = [
//   {
//     id: 1,
//     title: "loftloom",
//     tag: "UI Design, UX, Wireframe",
//     image: project1Img,
//     className: "w-full",
//   },
//   {
//     id: 2,
//     title: "8octa",
//     tag: "Research, Branding",
//     image: project4Img,
//     className: "w-full md:w-1/2 lg:w-[35%]",
//   },
//   {
//     id: 3,
//     title: "imusic",
//     tag: "Research, UX, UI Design",
//     image: project2Img,
//     className: "w-full lg:w-[70%]",
//   },
//   {
//     id: 4,
//     title: "technis",
//     tag: "UX, UI Design, Development",
//     image: project3Img1,
//     className: "w-full h-[80%]",
//   },
//   {
//     id: 5,
//     title: "merit global",
//     tag: "UX, UI Design, Development",
//     image: project5Img,
//     className: "w-full lg:w-[70%]",
//   },
//   {
//     id: 6,
//     title: "reyden",
//     tag: "UX, UI Design, Development",
//     image: project6Img,
//     className: "w-full md:w-[55%] lg:w-[35%]",
//   },
//   {
//     id: 7,
//     title: "crowdmouth",
//     tag: "UI Design, UX, Wireframe",
//     image: project7Img,
//     className: "w-full w-[80%] lg:ml-20",
//   },
//   {
//     id: 8,
//     title: "stuffosome",
//     tag: "Research, Branding",
//     image: project8Img,
//     className: "",
//   },
//   {
//     id: 9,
//     title: "shore",
//     tag: "UI Design, UX, Wireframe",
//     image: project9Img,
//     className: "w-full w-[80%]",
//   },
//   {
//     id: 10,
//     title: "keypro",
//     tag: "UI Design, UX, Wireframe",
//     image: project10Img,
//     className: "w-full w-[75%]",
//   },
//   {
//     id: 11,
//     title: "essence reality",
//     tag: "Research, UX, UI Design",
//     image: project11Img,
//     className: "w-full md:w-[55%] lg:w-[80%] h-3/4",
//   },
//   {
//     id: 12,
//     title: "metagram",
//     tag: "UI Design, UX, Wireframe",
//     image: project12Img,
//     className: "w-[100%] h-1/2",
//   },
//   {
//     id: 13,
//     title: "better penny",
//     tag: "UI Design, UX, Wireframe",
//     image: project13Img,
//     className: "",
//   },
//   {
//     id: 14,
//     title: "forever dolls",
//     tag: "UX Research, UI Design",
//     image: project14Img,
//     className: "w-full lg:w-[70%] lg:ml-20",
//   },
//   {
//     id: 15,
//     title: "aeomax",
//     tag: "UX, UI Design, Wireframe",
//     image: project15Img,
//     className: "w-full lg:w-[75%]",
//   },
//   {
//     id: 16,
//     title: "fast resume",
//     tag: "UX, UI Design, Wireframe",
//     image: project16Img,
//     className: "w-[100%]",
//   },
//   {
//     id: 17,
//     title: "financr",
//     tag: "UX, UI Design, Wireframe",
//     image: project17Img,
//     className: "w-full md:w-[55%] lg:w-[80%] lg:ml-10 h-1/2",
//   },
//   {
//     id: 18,
//     title: "monotex",
//     tag: "UX, UI Design, Wireframe",
//     image: project18Img,
//     className: "",
//   },
//   {
//     id: 19,
//     title: "homebid",
//     tag: "UX, UI Design, Wireframe",
//     image: project19Img,
//     className: "w-[100%]",
//   },
//   {
//     id: 20,
//     title: "ogre",
//     tag: "UX, UI Design, Wireframe",
//     image: project20Img,
//     className: "w-full md:w-[55%] lg:w-[80%] lg:ml-10",
//   },
//   {
//     id: 21,
//     title: "flow row",
//     tag: "UX, UI Design, Wireframe",
//     image: project21Img,
//     className: "w-full lg:w-[80%]",
//   },
// ];

// const partnerSideA = [
//   {
//     id: 1,
//     image: partnerSideAImg1,
//   },
//   {
//     id: 2,
//     image: partnerSideAImg2,
//   },
//   {
//     id: 3,
//     image: partnerSideAImg3,
//   },
//   {
//     id: 4,
//     image: partnerSideAImg4,
//   },
//   {
//     id: 5,
//     image: partnerSideAImg5,
//   },
//   {
//     id: 6,
//     image: partnerSideAImg6,
//   },
//   {
//     id: 7,
//     image: partnerSideAImg7,
//   },
//   {
//     id: 8,
//     image: partnerSideAImg8,
//   },
//   {
//     id: 9,
//     image: partnerSideAImg9,
//   },
//   {
//     id: 10,
//     image: partnerSideAImg10,
//   },
// ];

// const partnerSideB = [
//   {
//     id: 1,
//     image: partnerSideBImg1,
//   },
//   {
//     id: 2,
//     image: partnerSideBImg2,
//   },
//   {
//     id: 3,
//     image: partnerSideBImg3,
//   },
//   {
//     id: 4,
//     image: partnerSideBImg4,
//   },
//   {
//     id: 5,
//     image: partnerSideBImg5,
//   },
//   {
//     id: 6,
//     image: partnerSideBImg6,
//   },
//   {
//     id: 7,
//     image: partnerSideBImg7,
//   },
//   {
//     id: 8,
//     image: partnerSideBImg8,
//   },
// ];

const serviceLists = [
  {
    id: 1,
    title1: "design",
    desc: "Your designs, a fierce roar in the digital wilderness, carve an indelible social footprint, capturing the very essence of your unique identity.",
    content: [
      "User interface",
      "Web & Mobile apps",
      "User experience",
      "SaaS product design",
      "Websites",
      "Design systems",
      "Visual design",
      "Interaction design",
      "Prototypes",
    ],
  },
  {
    id: 2,
    title1: "develop",
    title2: "ment",
    desc: "In this design jungle, we don't just roar concepts; we bring them to life with practicality, emphasizing micro animations and interactions.",
    content: [
      "React JS",
      "HTML5 & CSS3",
      "Next JS",
      "LESS & SASS",
      "Node JS",
      "Bootstrap",
      "Angular JS",
      "Tailwind",
      "WordPress",
      "Foundation",
      "Magento",
      "Javascript",
      "Shopify",
      "jQuery",
      "Laravel",
      "PHP",
    ],
  },
  {
    id: 3,
    title1: "brand",
    title2: "ing",
    desc: "Our goal is your brand's wild influence. Exclusive logos, mockups, and corporate identities make your unique value stand out.",
    content: [
      "Visual identity",
      "Graphic designs",
      "Branding strategy",
      "Style guide",
      "Mockups",
      "Typography",
    ],
  },
];

const processLists = [
  {
    id: 1,
    title: "Research and Planning",
    lists: [
      "Project Planning",
      "Expectations Setting",
      "Competitor Analysis",
      "Digital Strategy",
      "UX Research",
    ],
  },
  {
    id: 2,
    title: "Creativity and UX Design",
    lists: [
      "Visual Moodboards",
      "User Interface Design",
      "User Experience Design",
      "Interactive Design",
      "Design System",
    ],
  },
  {
    id: 3,
    title: "Technology and Development",
    lists: [
      "Web Develepment",
      "Front-end Development",
      "Custom CMS Integrations",
      "E-commerce Development",
      "SAAS Implementation",
    ],
  },
  {
    id: 4,
    title: "Testing and Launch",
    lists: [
      "Usability testing",
      "Performance testing",
      "Funcationality testing",
      "Security testing",
      "Integration testing",
    ],
  },
  {
    id: 5,
    title: "Evaluate and Evolve",
    lists: [
      "Review",
      "Website optimisation",
      "3rd Party Evaluation",
      "Server performance",
      "Improvement",
    ],
  },
];

// const techStackListsA = [
//   {
//     id: 1,
//     image: techStackAImg1,
//   },
//   {
//     id: 2,
//     image: techStackAImg2,
//   },
//   {
//     id: 3,
//     image: techStackAImg3,
//   },
//   {
//     id: 4,
//     image: techStackAImg4,
//   },
//   {
//     id: 5,
//     image: techStackAImg5,
//   },
//   {
//     id: 6,
//     image: techStackAImg6,
//   },
//   {
//     id: 7,
//     image: techStackAImg7,
//   },
//   {
//     id: 8,
//     image: techStackAImg8,
//   },
//   {
//     id: 9,
//     image: techStackAImg9,
//   },
//   {
//     id: 10,
//     image: techStackAImg10,
//   },
// ];
// const techStackListsB = [
//   {
//     id: 1,
//     image: techStackBImg1,
//   },
//   {
//     id: 2,
//     image: techStackBImg2,
//   },
//   {
//     id: 3,
//     image: techStackBImg3,
//   },
//   {
//     id: 4,
//     image: techStackBImg4,
//   },
//   {
//     id: 5,
//     image: techStackBImg5,
//   },
//   {
//     id: 6,
//     image: techStackBImg6,
//   },
//   {
//     id: 7,
//     image: techStackBImg7,
//   },
//   {
//     id: 8,
//     image: techStackBImg8,
//   },
//   {
//     id: 9,
//     image: techStackBImg9,
//   },
//   {
//     id: 10,
//     image: techStackBImg10,
//   },
//   {
//     id: 11,
//     image: techStackBImg11,
//   },
// ];

const teamLists = [
  {
    id: 1,
    name: "Sunny Rathod",
    position: "Founder & CEO",
    image: teamImg1,
  },
  {
    id: 2,
    name: "Prabhatsinh Maka",
    position: "Executive Chef",
    image: teamImg2,
  },
  {
    id: 3,
    name: "Gaurav Joshi",
    position: "Sous Chef",
    image: teamImg3,
  },
  {
    id: 4,
    name: "Viral Maru",
    position: "Sous Chef",
    image: teamImg4,
  },
  {
    id: 5,
    name: "Bhagirathsinh jadeja",
    position: "Line Cook",
    image: teamImg5,
  },
  {
    id: 6,
    name: "Rushi Vasani",
    position: "Line Cook",
    image: teamImg6,
  },
  {
    id: 7,
    name: "Ayaz kadri",
    position: "Line Cook",
    image: teamImg7,
  },
  {
    id: 8,
    name: "Umang Vaghamshi",
    position: "Prep Cook",
    image: teamImg8,
  },
  {
    id: 9,
    name: "Nilesh Gujarati",
    position: "Bartender",
    image: teamImg9,
  },
  {
    id: 10,
    name: "Vaishnavi Kacha",
    position: "Barback",
    image: teamImg10,
  },
  {
    id: 11,
    name: "Dhaval Bhadukiya",
    position: "Waiter",
    image: teamImg11,
  },
  {
    id: 12,
    name: "Dhruv Solanki",
    position: "Waiter",
    image: teamImg12,
  },
  {
    id: 13,
    name: "Rahul Solanki",
    position: "Waiter",
    image: teamImg13,
  },
  {
    id: 14,
    name: "Sandip Rathod",
    position: "Cashier",
    image: teamImg14,
  },
];

const teamHireLists = [
  {
    id: 1,
    post: "Web/Mobile designers",
  },
  {
    id: 2,
    post: "Front-end designers",
  },
  {
    id: 3,
    post: "Back-end designers",
  },
];

const eventListsA = [
  {
    id: 1,
    image: eventListAImg1,
  },
  {
    id: 2,
    image: eventListAImg2,
  },
  {
    id: 3,
    image: eventListAImg3,
  },
  {
    id: 4,
    image: eventListAImg4,
  },
  {
    id: 5,
    image: eventListAImg5,
  },
  {
    id: 6,
    image: eventListAImg6,
  },
  {
    id: 7,
    image: eventListAImg7,
  },
];
const eventListsB = [
  {
    id: 1,
    image: eventListBImg1,
  },
  {
    id: 2,
    image: eventListBImg2,
  },
  {
    id: 3,
    image: eventListBImg3,
  },
  {
    id: 4,
    image: eventListBImg4,
  },
  {
    id: 5,
    image: eventListBImg5,
  },
  {
    id: 6,
    image: eventListBImg6,
  },
  {
    id: 7,
    image: eventListBImg7,
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Email",
    link: ["hello@trionn.com"],
  },
  {
    id: 2,
    title: "Phone",
    link: ["+91 98241 82099"],
  },
  {
    id: 3,
    title: "Teams",
    link: ["Talk to Trionn"],
  },
  {
    id: 4,
    title: "Follow on",
    // link: "hello@trionn.com",
    // social: ["Dribbble", "LinkedIn", "Instagram", "Behance", "Facebook"],
    link: ["Dribbble", "LinkedIn", "Instagram", "Behance", "Facebook"],
  },
];

export {
  lightLogo,
  darkLogo,
  comboLists,
  progress,
  clients,
  dishLists,
  socialLists,
  sideMenuLists,
  // workLists,
  // partnerSideA,
  // partnerSideB,
  // awardLists,
  serviceLists,
  processLists,
  // techStackListsA,
  // techStackListsB,
  teamLists,
  teamHireLists,
  eventListsA,
  eventListsB,
  footerLinks,
};
