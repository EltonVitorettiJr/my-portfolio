// biome-ignore assist/source/organizeImports: <Falso positivo do Biome>
import PerfilPhoto from "../assets/Foto Frente (Sem Fundo).png";
import { FaNode, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="inicio" className="h-full w-full flex mt-8">
      <div className="text-heading mt-18 ml-9">
        <h2 className="border-b border-heading text-xl w-fit font-heading">
          Elton Antônio Vitoretti Junior
        </h2>

        <h1 className="font-bold text-6xl w-120 mt-6 font-heading">
          Desenvolvedor Full Stack
        </h1>

        <h3 className="w-120 mt-4 text-muted text-2xl">
          "Valorize tuas boas atitudes, pois elas só foram feitas por conta de
          sua coragem."
        </h3>

        <p className="text-muted mt-6">
          Seja bem-vindo ao meu portfólio! Veja mais sobre mim nas seções
          abaixo...
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
        <div className="text-muted flex items-center justify-center w-fit gap-3 mt-2 font-mono">
          <p>Tech Stack: </p>
          <FaReact size={19} className=" animate-spin-slow" />
          <FaNode size={19} />
          <RiTailwindCssFill size={19} />
          <BsTypescript size={19} />
        </div>
      </div>
      <div className="flex justify-start items-end w-full ml-55 relative">
        <img
          src={PerfilPhoto}
          alt="foto-elton"
          className="rounded-full w-110 drop-shadow-[0_0_30px_rgba(122,162,247,0.15)] z-10"
        />
        <div className="rounded-full w-110 h-110 bg-primary/80 absolute" />
        <div className="rounded-full w-107 h-107 bg-surface absolute ml-0.5" />
      </div>
    </section>
  );
};

export default HeroSection;
