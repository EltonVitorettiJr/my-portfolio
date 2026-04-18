import type { Project } from "../components/projectCard";
import devBills from "../assets/devbills.png";
import itsTooDelicious from "../assets/itsTooDelicious.png";
import medAgenda from "../assets/medAgenda.png";
import psikoWithAOne from "../assets/psikoWithAOne.png";

const projectsData: Project[] = [
  {
    name: "DevBills",
    description:
      "O DevBills é uma aplicação Fullstack desenvolvida para facilitar o controle financeiro pessoal.Com uma interface moderna e intuitiva, o usuário consegue gerenciar suas entradas e saídas, visualizar o saldo atual e analisar seus gastos através de gráficos interativos.",
    deployLink:
      "https://dev-bills-devbills-interface.e01wj1.easypanel.host/",
    gitHubLink: "https://github.com/EltonVitorettiJr/Devbills",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Fastify",
      "MongoDB",
    ],
    img: {
      alt: "imagem-devbills",
      src: devBills,
    },
  },
  {
    name: "ItsTooDelicious",
    description:
      "Este é um projeto Fullstack robusto desenvolvido para simular a experiência real de uma hamburgueria digital. O sistema conecta clientes à cozinha em tempo real, gerenciando desde a escolha dos produtos até o status final da entrega.",
    deployLink:
      "https://its-too-delicious-frontend.e01wj1.easypanel.host",
    gitHubLink:
      "https://github.com/EltonVitorettiJr/Its-Too-Delicious-FullStack",
    stack: [
      "React",
      "JavaScript",
      "Styled-Components",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Sequelize",
    ],
    img: {
      alt: "imagem-itstoodelicious",
      src: itsTooDelicious,
    },
  },
  {
    name: "MedAgenda",
    description:
      "Este é um projeto Front-end moderno desenvolvido para gerenciar a rotina de atendimentos de um consultório médico. O sistema oferece uma interface intuitiva para cadastro de pacientes e controle total da agenda, substituindo processos manuais por uma solução digital ágil.",
    deployLink:
      "https://www.linkedin.com/posts/elton-vitoretti-jr_boa-tarde-rede-me-senti-na-obriga%C3%A7%C3%A3o-activity-7419040571094163456-9j0i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFESCNwBVhmpoqSck75GoCs5Q2l-HbyQWqE",
    gitHubLink: "https://github.com/EltonVitorettiJr/MedAgenda",
    stack: ["React", "TypeScript", "TailwindCSS", "Supabase"],
    img: {
      alt: "imagem-medagenda",
      src: medAgenda,
    },
  },
  {
    name: "Psiko With A One",
    description:
      "Este é um projeto de portfólio dinâmico e responsivo desenvolvido para o artista de VFX PsikoWithAOne. O site apresenta seus trabalhos mais recentes, com um sistema de filtragem de categoria e um design mobile-first.",
    deployLink: "https://psiko-with-a-one.vercel.app/",
    gitHubLink: "https://github.com/EltonVitorettiJr/PsikoWithAOne",
    stack: ["React", "Styled-Components", "Vercel"],
    img: {
      alt: "imagem-psikowithaone",
      src: psikoWithAOne,
    },
  },
];

export default projectsData;
