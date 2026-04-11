// biome-ignore assist/source/organizeImports: <Falso positivo do Biome>
import VerticalBar from "./verticalBar";
import PerfilPhoto from "../assets/Foto Frente (Sem Fundo).png";

const HeroSection = () => {
  return (
    <section id="inicio" className="h-full w-full flex">
      <VerticalBar />
      <div className="text-heading ml-50 mt-34">
        <p className="border-b border-heading text-xl w-fit">
          Elton Antônio Vitoretti Junior
        </p>
        <h1 className="font-bold text-6xl w-120 mt-6">
          Desenvolvedor Full Stack
        </h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <img
          src={PerfilPhoto}
          alt="foto-elton"
          className="rounded-full w-100"
        />
      </div>
    </section>
  );
};

export default HeroSection;
