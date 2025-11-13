import project1Img from "../assets/images/loftloom-main-landscape.webp";
import project2Img from "../assets/images/imusic-main-landscape.webp";
import project3Img from "../assets/images/technis-main-landscape.webp";
import project3Img1 from "../assets/images/technis-main.webp";
import project4Img from "../assets/images/8octa-main.webp";
import project5Img from "../assets/images/merit-global-main.webp";
import project6Img from "../assets/images/reyden-main.webp";
import project7Img from "../assets/images/crowdmouth-main.webp";
import project8Img from "../assets/images/stuffosome-main.webp";
import project9Img from "../assets/images/shore-main.webp";
import project10Img from "../assets/images/keypro-main.webp";
import project11Img from "../assets/images/essence-realty-main.webp";
import project12Img from "../assets/images/metagram-main.webp";
import project13Img from "../assets/images/better-penny-main.webp";
import project14Img from "../assets/images/forever-dolls-main.webp";
import project15Img from "../assets/images/aeomax-main.webp";
import project16Img from "../assets/images/fast-resume-main.webp";
import project17Img from "../assets/images/financr-main.webp";
import project18Img from "../assets/images/monotex-main.webp";
import project19Img from "../assets/images/homebid-main.webp";
import project20Img from "../assets/images/ogre-main.webp";
import project21Img from "../assets/images/flow-row-main.webp";
import client1 from "../assets/images/malte-kramer.webp";
import client2 from "../assets/images/doug-petrie.webp";
import client3 from "../assets/images/zoltan-csonka.webp";
import client4 from "../assets/images/albert-mizuno.webp";
import client5 from "../assets/images/stephen-dash.webp";
import dribbble1 from "../assets/images/dribbble1.webp";
import dribbble2 from "../assets/images/dribbble2.webp";
import dribbble3 from "../assets/images/dribbble3.webp";
import dribbble4 from "../assets/images/dribbble4.webp";
import dribbble5 from "../assets/images/dribbble5.webp";
import dribbble6 from "../assets/images/dribbble6.webp";
import socialImage1 from "../assets/images/basketBall.svg";
import socialImage2 from "../assets/images/linkedin.svg";
import socialImage3 from "../assets/images/instagram.svg";
import socialImage4 from "../assets/images/behance.svg";
import socialImage5 from "../assets/images/facebook.svg";

const viewProjects = [
  {
    id: 1,
    title: "loftloom",
    tag: "UI Design, UX, Wireframe",
    image: project1Img,
  },
  {
    id: 2,
    title: "imusic",
    tag: "Research, UX, UI Design",
    image: project2Img,
  },
  {
    id: 3,
    title: "technis",
    tag: "UX, UI Design, Development",
    image: project3Img,
  },
];

const progress = [
  {
    id: 1,
    title: "awards & recognition",
    count: 50,
  },
  {
    id: 2,
    title: "projects completed",
    count: 900,
  },
  {
    id: 3,
    title: "creative minds",
    count: 20,
  },
  {
    id: 4,
    title: "years of experience",
    count: 20,
  },
];

const clients = [
  {
    id: 1,
    image: client1,
    name: "Malte Kramer",
    position: "Founder & CEO of Luxury Presence",
    videoLink: "https://www.youtube.com/",
  },
  {
    id: 2,
    image: client2,
    name: "Doug Petrie",
    position: "Founder & CEO of Fast Resume",
    videoLink: "https://www.youtube.com/",
  },
  {
    id: 3,
    image: client3,
    name: "Zoltan Csonka",
    position: "Founder & CEO of Ventigence",
    videoLink: "https://www.youtube.com/",
  },
  {
    id: 4,
    image: client4,
    name: "Albert Mizuno",
    position: "Founder of The Mizuno",
    message:
      "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.",
  },
  {
    id: 5,
    image: client5,
    name: "Stephen Dash",
    position: "Founder & CEO of Credible",
    message:
      "The Trionn team is extremely reliable, professional and talented. It has been a great pleasure collaborating with them over many months.",
  },
];

// const clientsMessage = [
//   {
//     id: 1,
//     image: client4,
//     name: "Albert Mizuno",
//     position: "Founder of The Mizuno",
//     message:
//       "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.",
//   },
//   {
//     id: 2,
//     image: client5,
//     name: "Stephen Dash",
//     position: "Founder & CEO of Credible",
//     message:
//       "The Trionn team is extremely reliable, professional and talented. It has been a great pleasure collaborating with them over many months.",
//   },
// ];

const dribbble = [
  {
    id: 1,
    image: dribbble1,
  },
  {
    id: 2,
    image: dribbble2,
  },
  {
    id: 3,
    image: dribbble3,
  },
  {
    id: 4,
    image: dribbble4,
  },
  {
    id: 5,
    image: dribbble5,
  },
  {
    id: 6,
    image: dribbble6,
  },
];

const socialLists = [
  {
    id: 1,
    name: "Dribble",
    image: socialImage1,
  },
  {
    id: 2,
    name: "LinkedIn",
    image: socialImage2,
  },
  {
    id: 3,
    name: "Instagram",
    image: socialImage3,
  },
  {
    id: 4,
    name: "Behance",
    image: socialImage4,
  },
  {
    id: 5,
    name: "Facebook",
    image: socialImage5,
  },
];

const sideMenuLists = [
  {
    id: 1,
    name: "work",
    to: "/work",
  },
  {
    id: 2,
    name: "about",
    to: "/about",
  },
  {
    id: 3,
    name: "services",
    to: "/services",
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

const workLists = [
  {
    id: 1,
    title: "loftloom",
    tag: "UI Design, UX, Wireframe",
    image: project1Img,
    className: "w-full",
  },
  {
    id: 2,
    title: "8octa",
    tag: "Research, Branding",
    image: project4Img,
    className: "w-[35%]",
  },
  {
    id: 3,
    title: "imusic",
    tag: "Research, UX, UI Design",
    image: project2Img,
    className: "w-[70%]",
  },
  {
    id: 4,
    title: "technis",
    tag: "UX, UI Design, Development",
    image: project3Img1,
    className: "w-full h-[80%]",
  },
  {
    id: 5,
    title: "merit global",
    tag: "UX, UI Design, Development",
    image: project5Img,
    className: "w-[70%]",
  },
  {
    id: 6,
    title: "reyden",
    tag: "UX, UI Design, Development",
    image: project6Img,
    className: "w-[35%]",
  },
  {
    id: 7,
    title: "crowdmouth",
    tag: "UI Design, UX, Wireframe",
    image: project7Img,
    className: "w-[80%] ml-20",
  },
  {
    id: 8,
    title: "stuffosome",
    tag: "Research, Branding",
    image: project8Img,
    className: "",
  },
  {
    id: 9,
    title: "shore",
    tag: "UI Design, UX, Wireframe",
    image: project9Img,
    className: "w-[80%]",
    // className: "w-[80%] ml-54",
  },
  {
    id: 10,
    title: "keypro",
    tag: "UI Design, UX, Wireframe",
    image: project10Img,
    className: "w-[75%]",
  },
  {
    id: 11,
    title: "essence reality",
    tag: "Research, UX, UI Design",
    image: project11Img,
    className: "w-[80%] h-3/4",
  },
  {
    id: 12,
    title: "metagram",
    tag: "UI Design, UX, Wireframe",
    image: project12Img,
    className: "w-[100%] h-1/2",
  },
  {
    id: 13,
    title: "better penny",
    tag: "UI Design, UX, Wireframe",
    image: project13Img,
    className: "",
  },
  {
    id: 14,
    title: "forever dolls",
    tag: "UX Research, UI Design",
    image: project14Img,
    className: "w-[70%] ml-20",
  },
  {
    id: 15,
    title: "aeomax",
    tag: "UX, UI Design, Wireframe",
    image: project15Img,
    className: "w-[75%]",
  },
  {
    id: 16,
    title: "fast resume",
    tag: "UX, UI Design, Wireframe",
    image: project16Img,
    className: "w-[100%]",
  },
  {
    id: 17,
    title: "financr",
    tag: "UX, UI Design, Wireframe",
    image: project17Img,
    className: "w-[80%] ml-10 h-1/2",
  },
  {
    id: 18,
    title: "monotex",
    tag: "UX, UI Design, Wireframe",
    image: project18Img,
    className: "",
  },
  {
    id: 19,
    title: "homebid",
    tag: "UX, UI Design, Wireframe",
    image: project19Img,
    className: "w-[100%]",
  },
  {
    id: 20,
    title: "ogre",
    tag: "UX, UI Design, Wireframe",
    image: project20Img,
    className: "w-[80%] ml-10",
  },
  {
    id: 21,
    title: "flow row",
    tag: "UX, UI Design, Wireframe",
    image: project21Img,
    className: "w-[80%]",
  },
];

export {
  viewProjects,
  progress,
  clients,
  // clientsMessage,
  dribbble,
  socialLists,
  sideMenuLists,
  workLists,
};
