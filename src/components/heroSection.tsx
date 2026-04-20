// biome-ignore assist/source/organizeImports: <Falso positivo do Biome>
import PerfilPhoto from "../assets/Foto Frente (Sem Fundo).png";
import { FaNode, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="inicio" className="h-150 w-full flex mt-10">
      <div className="text-heading mt-18 ml-9">
        <h2 className="border-b border-heading text-xl w-fit font-heading">
          Elton Antônio Vitoretti Junior
        </h2>

        <h1 className="font-bold text-6xl w-120 mt-6 font-heading">
          Desenvolvedor Full Stack
        </h1>

        <h3 className="w-120 mt-4 text-muted text-2xl">
          "Valorize tuas boas atitudes, pois elas só foram feitas por
          conta de sua coragem."
        </h3>

        <p className="text-muted mt-6">
          Seja bem-vindo ao meu portfólio! Veja mais sobre mim nas
          seções abaixo...
        </p>

        <div className="mt-4">
          <button
            type="button"
            className="border-none rounded-md bg-primary font-sans
          px-4 py-2 hover:bg-secondary transition-colors"
          >
            Meu Currículo
          </button>
          <a
            href="#projetos"
            className="border border-primary text-primary hover:bg-secondary/10
            px-4 py-2.5 rounded-md transition-colors ml-4 hover:border-secondary
            hover:text-secondary"
          >
            Ver Projetos
          </a>
        </div>
        <div className="text-muted flex items-center justify-center w-fit gap-3 mt-3 font-mono">
          <p>Tech Stack: </p>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener"
            className="hover:scale-110 transition-all"
          >
            <FaReact
              size={19}
              className="animate-spin-slow hover:text-[#58c4dc]"
            />
          </a>
          <a
            href="https://nodejs.org/pt-br"
            target="_blank"
            rel="noopener"
            className="hover:scale-110 transition-all"
          >
            <FaNode size={19} className="hover:text-[#55a345]" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener"
            className="hover:scale-110 transition-all"
          >
            <RiTailwindCssFill
              size={19}
              className="hover:text-[#00bcff]"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener"
            className="hover:scale-110 transition-all"
          >
            <BsTypescript
              size={19}
              className="hover:text-[#3178c6]"
            />
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center w-full relative">
        <img
          src={PerfilPhoto}
          alt="foto-elton"
          className="rounded-full object-cover z-10
            w-full max-w-100 aspect-square 
            drop-shadow-[0_0_30px_rgba(122,162,247,0.15)]
            border-8 border-surface 
            ring-4 ring-primary/80"
        />
      </div>
    </section>
  );
};

export default HeroSection;
