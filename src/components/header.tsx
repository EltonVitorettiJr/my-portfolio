import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const menuObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      animationObserver.observe(section);
      menuObserver.observe(section);
    });

    return () => {
      animationObserver.disconnect();
      menuObserver.disconnect();
    };
  }, []);

  const getLinkClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "text-primary font-bold transition-colors"
      : "text-muted hover:text-secondary transition-colors";
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div
        className="flex justify-between md:justify-around p-4 border-b border-secondary/15
         text-heading font-heading items-center"
      >
        <div className="flex gap-4">
          <h3>Elton</h3>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#inicio" className={getLinkClass("inicio")}>
            Início
          </a>
          <a href="#sobre-mim" className={getLinkClass("sobre-mim")}>
            Sobre Mim
          </a>
          <a href="#projetos" className={getLinkClass("projetos")}>
            Projetos
          </a>
          <a
            href="#habilidades"
            className={getLinkClass("habilidades")}
          >
            Habilidades
          </a>
          <a href="#contato" className={getLinkClass("contato")}>
            Contato
          </a>
        </div>
        <div className="flex gap-6">
          <button
            type="button"
            className="border-none rounded-md bg-primary hidden md:block
          px-4 py-2 cursor-pointer hover:bg-secondary transition-colors"
          >
            Fale Comigo
          </button>
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            <MenuIcon size={32} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
