import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

export interface Project {
  name: string;
  description: string;
  stack: string[];
  deployLink: string;
  gitHubLink: string;
  img: {
    src: string;
    alt: string;
  };
}

interface ProjectProps {
  project: Project;
}

function ProjectCard({ project }: ProjectProps) {
  const { deployLink, description, gitHubLink, img, name, stack } =
    project;

  return (
    // Card com borda sutil e efeito de vidro. O "group" permite animar coisas dentro dele quando o mouse passa no card inteiro.
    <div
      className="group flex flex-col border border-primary/15
     bg-surface/30 backdrop-blur-sm rounded-2xl overflow-hidden
      hover:border-primary/40 transition-all duration-300"
    >
      {/* 1. Área da Imagem (A Vitrine) */}
      <div className="h-48 bg-muted/10 overflow-hidden relative">
        {/* A imagem dá um leve zoom quando passa o mouse */}
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover group-hover:scale-105
          transition-transform duration-500"
        />
      </div>

      {/* 2. Área de Conteúdo */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-heading mb-2">
          {name}
        </h3>

        {/* Descrição focada no problema resolvido e na arquitetura */}
        <p className="text-muted text-sm leading-relaxed mb-6 grow">
          {description}
        </p>

        {/* 3. Tech Stack (As tags) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tec) => (
            <span
              key={tec}
              className="text-xs font-mono text-primary
           bg-primary/10 px-2 py-1 rounded-md"
            >
              {tec}
            </span>
          ))}
        </div>

        {/* 4. Ações (Links) */}
        <div
          className="flex gap-4 border-t border-primary/10
         pt-4 mt-auto"
        >
          <a
            href={deployLink}
            className="flex items-center gap-2 text-sm text-heading
             hover:text-primary transition-colors"
            target="_blank"
            rel="noopener"
          >
            <ExternalLink className="size-4" />
            Ver Deploy
          </a>
          <a
            href={gitHubLink}
            className="flex items-center gap-2 text-sm text-muted
             hover:text-heading transition-colors"
            target="_blank"
            rel="noopener"
          >
            <BsGithub className="size-4" />
            Código Fonte
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
