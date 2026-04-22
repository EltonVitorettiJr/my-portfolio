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
    <div
      className="group flex flex-col border border-primary/15
     bg-surface/30 backdrop-blur-sm rounded-2xl overflow-hidden
      hover:border-primary/40 transition-all duration-300"
    >
      <div className="h-48 bg-muted/10 overflow-hidden relative">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover group-hover:scale-105
          transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-heading mb-2">
          {name}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-6 grow">
          {description}
        </p>

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
