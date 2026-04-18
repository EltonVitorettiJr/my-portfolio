import projectsData from "../data/projects";
import ProjectCard from "./projectCard";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="my-20">
      <h3 className="text-3xl text-heading font-heading border-b pb-2 border-white w-fit">
        Projetos
      </h3>
      <div className="grid grid-cols-2 gap-8 py-10 pr-14">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
