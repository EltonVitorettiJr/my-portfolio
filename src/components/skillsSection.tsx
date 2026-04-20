import type { CSSProperties } from "react";

import {
  backEndSkillsData,
  frontEndSkillsData,
  toolsSkillsData,
} from "../data/skills";

const SkillsSection = () => {
  return (
    <section
      id="habilidades"
      className="my-20 border-t border-primary/20 pt-10"
    >
      <h3 className="text-3xl text-heading font-heading border-b border-heading pb-2 mb-10 w-fit">
        Habilidades
      </h3>

      {/* Grid com 3 colunas para agrupar as tecnologias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pr-0 md:pr-14">
        {/* Bloco 1: Front-end */}
        <div className="flex flex-col gap-6 p-6 rounded-2xl bg-surface/20 border border-primary/10 backdrop-blur-sm">
          <h4 className="text-xl text-heading font-bold mb-2">
            Front-end
          </h4>
          <div className="flex flex-wrap gap-4">
            {/* O SEU GLOW EM AÇÃO AQUI */}
            {frontEndSkillsData.map((skill) => (
              <div
                className={`glow flex items-center gap-2 px-4 py-2 rounded-lg
                 bg-background/50 border border-white/5 text-[${skill.iconColor}]`}
                style={
                  {
                    "--glow-color": `${skill.iconGlowColor}`,
                  } as CSSProperties
                }
                key={skill.name}
              >
                {skill.icon}
                <span className="text-sm font-mono text-muted">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 2: Back-end & Dados */}
        <div className="flex flex-col gap-6 p-6 rounded-2xl bg-surface/20 border border-primary/10 backdrop-blur-sm">
          <h4 className="text-xl text-heading font-bold mb-2">
            Back-end & Dados
          </h4>
          <div className="flex flex-wrap gap-4">
            {backEndSkillsData.map((skill) => (
              <div
                className={`glow flex items-center gap-2 px-4 py-2 rounded-lg
                 bg-background/50 border border-white/5 text-[${skill.iconColor}]`}
                style={
                  {
                    "--glow-color": `${skill.iconGlowColor}`,
                  } as CSSProperties
                }
                key={skill.name}
              >
                {skill.icon}
                <span className="text-sm font-mono text-muted">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 3: Ferramentas (Git, Docker, Vercel, Figma...) */}
        <div className="flex flex-col gap-6 p-6 rounded-2xl bg-surface/20 border border-primary/10 backdrop-blur-sm">
          <h4 className="text-xl text-heading font-bold mb-2">
            Ferramentas
          </h4>
          <div className="flex flex-wrap gap-4">
            {toolsSkillsData.map((skill) => (
              <div
                className={`glow flex items-center gap-2 px-4 py-2 rounded-lg
                 bg-background/50 border border-white/5 text-[${skill.iconColor}]`}
                style={
                  {
                    "--glow-color": `${skill.iconGlowColor}`,
                  } as CSSProperties
                }
                key={skill.name}
              >
                {skill.icon}
                <span className="text-sm font-mono text-muted">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
