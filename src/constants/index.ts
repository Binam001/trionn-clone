import project1Img from "../assets/images/project1.png";
import project2Img from "../assets/images/project2.png";
import project3Img from "../assets/images/project3.jpg";
import client1 from "../assets/images/malte-kramer.webp";
import client2 from "../assets/images/doug-petrie.webp";
import client3 from "../assets/images/zoltan-csonka.webp";
import client4 from "../assets/images/albert-mizuno.webp";
import client5 from "../assets/images/stephen-dash.webp";

const viewProjects = [
  {
    id: 1,
    title: "dynamic code visualizer",
    tag: "Visualize, Learn",
    image: project1Img,
    webapp: "https://dynamic-code-visualizer-v2.vercel.app/",
  },
  {
    id: 2,
    title: "navigate the city",
    tag: "Track, Map, Route",
    image: project2Img,
    webapp: "https://navigate-the-city.vercel.app/",
  },
  {
    id: 3,
    title: "online attendance management system",
    tag: "Attendance, Manage, Report",
    image: project3Img,
    webapp: "https://github.com/Binam001/Project-OAMS",
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
];

const clientsMessage = [
  {
    id: 1,
    image: client4,
    name: "Albert Mizuno",
    position: "Founder of The Mizuno",
    message:
      "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.",
  },
  {
    id: 2,
    image: client5,
    name: "Stephen Dash",
    position: "Founder & CEO of Credible",
    message:
      "The Trionn team is extremely reliable, professional and talented. It has been a great pleasure collaborating with them over many months.",
  },
];

export { viewProjects, progress, clients, clientsMessage };
