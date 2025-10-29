export default function ProjectsSection({ projects }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center rounded mt-5 p-3"
      id="projects"
    >
      <h1>Projects</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-md-1">
        {projects.map((project) => (
          <div className="project col" key={project.title}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
