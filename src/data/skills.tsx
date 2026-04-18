import type { ReactNode } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaDocker, FaFigma, FaNodeJs } from "react-icons/fa6";
import {
  RiSupabaseFill,
  RiTailwindCssFill,
  RiVercelFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiFastify,
  SiKnexdotjs,
  SiSequelize,
  SiStyledcomponents,
} from "react-icons/si";

interface Skills {
  icon: ReactNode;
  name: string;
  iconGlowColor: string; //RGBA
  iconColor: string; //HEX
}

export const frontEndSkillsData: Skills[] = [
  {
    name: "React",
    icon: <DiReact />,
    iconColor: "#61DAFB",
    iconGlowColor: "97, 218, 251",
  },
  {
    name: "TypeScript",
    icon: <BsTypescript />,
    iconColor: "#3178C6",
    iconGlowColor: "49, 120, 198",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    iconColor: "#38BDF8",
    iconGlowColor: "56, 189, 248",
  },
  {
    name: "Styled-Components",
    icon: <SiStyledcomponents />,
    iconColor: "#f928a0",
    iconGlowColor: "249, 40, 160",
  },
];

export const backEndSkillsData: Skills[] = [
  {
    name: "NodeJs",
    icon: <FaNodeJs />,
    iconColor: "#539E43",
    iconGlowColor: "83, 158, 67",
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
    iconColor: "#47A248",
    iconGlowColor: "71, 162, 72",
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    iconColor: "#336791",
    iconGlowColor: "51, 103, 145",
  },
  {
    name: "Fastify",
    icon: <SiFastify />,
    iconColor: "#e2e0e0",
    iconGlowColor: "226, 224, 224",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    iconColor: "#f7f4f4",
    iconGlowColor: "247, 244, 244",
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill />,
    iconColor: "#3ecf8e",
    iconGlowColor: "62, 207, 142",
  },
];

export const toolsSkillsData: Skills[] = [
  {
    name: "Docker",
    icon: <FaDocker />,
    iconColor: "#2560ff",
    iconGlowColor: "37, 96, 255",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    iconColor: "#874fff",
    iconGlowColor: "135, 79, 255",
  },
  {
    name: "Sequelize",
    icon: <SiSequelize />,
    iconColor: "#2e3b69",
    iconGlowColor: "46, 59, 105",
  },
  {
    name: "Knex",
    icon: <SiKnexdotjs />,
    iconColor: "#e16426",
    iconGlowColor: "225, 100, 38",
  },
  {
    name: "Vercel",
    icon: <RiVercelFill />,
    iconColor: "#ededed",
    iconGlowColor: "237, 237, 237",
  },
];
