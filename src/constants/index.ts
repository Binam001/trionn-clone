import project1Img from "../assets/images/project1.png";
import project2Img from "../assets/images/project2.png";
import project3Img from "../assets/images/project3.jpg";

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

export { viewProjects, progress };
