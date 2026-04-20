import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactSection = () => {
  return (
    // Adicionei uma borda superior sutil para separar do resto do site
    <section
      id="contato"
      className="my-20 border-t border-primary/20 pt-20"
    >
      <div className="flex flex-col md:flex-row justify-between pr-0 md:pr-14">
        {/* Lado Esquerdo: A Chamada para Ação */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-4xl text-heading font-heading mb-6 w-fit">
            Vamos construir{" "}
            <span className="text-primary w-fit">algo incrível?</span>
          </h3>
          <p className="text-muted leading-relaxed mb-8 text-lg max-w-md w-fit">
            Estou sempre aberto a novos desafios, projetos ou
            oportunidades para agregar em uma nova equipe. Sinta-se à
            vontade para me mandar um 'Olá'!
          </p>

          {/* O toque de humanização: Sua localização */}
          <div className="flex items-center gap-3 text-muted font-mono w-fit">
            <MapPin className="size-5 text-primary" />
            <span className="w-fit">São Manuel, SP - Brasil</span>
          </div>
        </div>

        {/* Lado Direito: Os Cards de Conexão Rápidos */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Botão E-mail */}
          <a
            href="mailto:eltonvitorettijr@gmail.com"
            className="group flex items-center gap-6 p-5 rounded-2xl bg-surface/20 border border-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Mail className="size-7 text-primary" />
            </div>
            <div>
              <h4 className="text-heading font-bold text-lg">
                E-mail
              </h4>
              <span className="text-muted font-mono text-sm">
                Me mande uma mensagem
              </span>
            </div>
          </a>

          {/* Botão LinkedIn */}
          <a
            href="https://linkedin.com/in/elton-vitoretti-jr"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-6 p-5 rounded-2xl bg-surface/20 border border-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
              <FaLinkedin className="size-7 text-primary" />
            </div>
            <div>
              <h4 className="text-heading font-bold text-lg">
                LinkedIn
              </h4>
              <span className="text-muted font-mono text-sm">
                Vamos nos conectar
              </span>
            </div>
          </a>

          {/* Botão GitHub */}
          <a
            href="https://github.com/EltonVitorettiJr"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-6 p-5 rounded-2xl bg-surface/20 border border-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
              <FaGithub className="size-7 text-primary" />
            </div>
            <div>
              <h4 className="text-heading font-bold text-lg">
                GitHub
              </h4>
              <span className="text-muted font-mono text-sm">
                Veja meus códigos
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
