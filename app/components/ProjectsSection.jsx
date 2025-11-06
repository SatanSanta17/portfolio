import Card from "../ui/Card";
export default function ProjectsSection({ projects }) {
  return (
    <div className="flex flex-col gap-4 justify-center text-center mt-4 md:mt-8">
      <h1 className="text-2xl md:text-3xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
