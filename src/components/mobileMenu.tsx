import { MenuIcon, XIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface MobileMenuProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  menuIsOpen: boolean;
  setMenuIsOpen: () => void;
  activeSection: string;
  setActiveSection: () => void;

  handleMenu: () => void;
  getLinkClass: (sectionId: string) => string;
}

const MobileMenu = ({
  menuIsOpen,
  setMenuIsOpen,
  handleMenu,
  activeSection,
  setActiveSection,
  getLinkClass,
  ...props
}: MobileMenuProps) => {
  return (
    <div>
      <button
        type="button"
        className="md:hidden w-10 h-10 flex items-center justify-center"
        onClick={() => handleMenu()}
        {...props}
      >
        <MenuIcon
          className={`${menuIsOpen ? "hidden" : "block"}`}
          size={32}
        />
        {menuIsOpen && (
          <div className="relative flex justify-center items-center">
            <XIcon size={32} className="block" />
          </div>
        )}
      </button>
      {menuIsOpen && (
        <button
          className="absolute md:hidden flex flex-col mt-4 w-full
          left-0 leading-loose bg-background/80 backdrop-blur-md"
          type="button"
          onClick={() => handleMenu()}
        >
          <a
            href="#inicio"
            className={`${getLinkClass("inicio")} text-start border-y border-secondary/15 pl-6 py-1`}
          >
            Início
          </a>
          <a
            href="#sobre-mim"
            className={`${getLinkClass("sobre-mim")} text-start border-b border-secondary/15 pl-6 py-1`}
          >
            Sobre Mim
          </a>
          <a
            href="#projetos"
            className={`${getLinkClass("projetos")} text-start border-b border-secondary/15 pl-6 py-1`}
          >
            Projetos
          </a>
          <a
            href="#habilidades"
            className={`${getLinkClass("habilidades")} text-start border-b border-secondary/15 pl-6 py-1`}
          >
            Habilidades
          </a>
          <a
            href="#contato"
            className={`${getLinkClass("contato")} text-start border-b border-secondary/15 pl-6 py-1`}
          >
            Contato
          </a>
        </button>
      )}
    </div>
  );
};

export default MobileMenu;
