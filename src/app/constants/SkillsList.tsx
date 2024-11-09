// Icons
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

type Skills = {
  Logo: React.ComponentType<{ className: string }>;
  name: string;
  logoColor: string;
};

export const skillsList: Skills[] = [
  {
    Logo: FaHtml5,
    name: "HTML",
    logoColor: "text-red-500",
  },
  {
    Logo: IoLogoCss3,
    name: "CSS",
    logoColor: "text-blue-500",
  },
  {
    Logo: RiJavascriptFill,
    name: "Javascript",
    logoColor: "text-yellow-500",
  },
  {
    Logo: BiLogoTypescript,
    name: "Typescript",
    logoColor: "text-blue-500",
  },
  {
    Logo: FaReact,
    name: "React",
    logoColor: "text-sky-500",
  },
  {
    Logo: RiNextjsFill,
    name: "Next js",
    logoColor: "text-dark",
  },
  {
    Logo: FaBootstrap,
    name: "Bootstrap",
    logoColor: "text-violet-500",
  },
  {
    Logo: RiTailwindCssFill,
    name: "Tailwind",
    logoColor: "text-sky-500",
  },
];
