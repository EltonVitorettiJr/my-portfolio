import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    //Observador que controla qual seção está ativa
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      //Esse threshold: 0.5 significa que a seção só é considerada "ativa"
      //quando pelo menos 50% dela estiver visível na tela do usuário.
      { threshold: 0.5 },
    );

    //Mandamos o espião observar todas as tags <section> da página
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    //Limpeza: quando o componente desmontar, desligamos o espião
    return () => observer.disconnect();
  }, []);

  //Função auxiliar para facilitar a escrita das classes do Tailwind
  const getLinkClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "text-primary font-bold transition-colors" // Estilo ATIVADO (Azul índigo)
      : "text-muted hover:text-secondary transition-colors"; // Estilo INATIVO (Cinza que brilha no hover)
  };

  return (
    <nav
      className="flex justify-around p-4 border-b border-secondary/15 
       text-heading font-heading items-center"
    >
      <div className="flex gap-4">
        <h3>Elton</h3>
      </div>
      <div className="flex gap-6">
        <a href="#inicio" className={getLinkClass("inicio")}>
          Início
        </a>
        <a href="#sobre-mim" className={getLinkClass("sobre-mim")}>
          Sobre Mim
        </a>
        <a href="#projetos" className={getLinkClass("projetos")}>
          Projetos
        </a>
        <a href="#habilidades" className={getLinkClass("habilidades")}>
          Habilidades
        </a>
        <a href="#contato" className={getLinkClass("contato")}>
          Contato
        </a>
      </div>
      <div className="flex gap-6">
        <button
          type="button"
          className="border-none rounded-md bg-primary
        px-4 py-2 cursor-pointer hover:bg-secondary transition-colors"
        >
          Fale Comigo
        </button>
        <button type="button">Menu</button>
      </div>
    </nav>
  );
};

export default Header;
