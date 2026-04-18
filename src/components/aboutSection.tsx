import violao from "../assets/Violao.png";

const AboutSection = () => {
  return (
    <section id="sobre-mim" className="my-20">
      <h3 className="text-3xl text-heading font-heading border-b border-white pb-2 w-fit">
        Sobre mim
      </h3>
      <div className="flex items-center gap-12 py-10 px-navbar">
        <div>
          <p className="text-muted leading-relaxed mb-6 text-lg w-130 border-l-2 border-primary/40 pl-10">
            Sou o Elton, tenho 20 anos e o que começou como uma
            curiosidade explorando jogos na infância, hoje se tornou
            minha profissão. Sou graduando em Ciência da Computação
            pela Unisagrado e atuo como Desenvolvedor Fullstack,
            completamente apaixonado pelo ecossistema JavaScript e
            TypeScript.
          </p>
          <p className="text-muted leading-relaxed mb-6 text-lg w-130 border-l-2 border-primary/40 pl-10">
            Meu foco é simples: transformar problemas complexos em
            interfaces intuitivas e performáticas. Combinando a base
            analítica da faculdade com a prática de mercado acelerada
            do DevClub, desenvolvo aplicações modernas de ponta a
            ponta — desde a criação de APIs escaláveis no back-end até
            telas responsivas e acessíveis no front-end.
          </p>
          <p className="text-muted leading-relaxed mb-6 text-lg w-130 border-l-2 border-primary/40 pl-10">
            Mais do que escrever código, busco entregar soluções com
            arquitetura limpa e organização. Atualmente, estou
            disponível para projetos freelancer e oportunidades como
            Desenvolvedor Júnior, pronto para agregar valor e escalar
            resultados em uma nova equipe.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={violao}
            alt="foto-violao"
            className="rotate-310 w-180"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
