// app/components/ProjectCard.jsx
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  link,
  tags = [],
  className = "",
}) {
  return (
    <article
      className={`card h-100 border-0 shadow-sm rounded-4 overflow-hidden transition-all ${className}`}
    >
      <div className="card-body d-flex flex-column gap-3">
        <h5 className="card-title fw-semibold mb-1">{title}</h5>
        <p className="card-text text-body-secondary flex-grow-1 mb-0">
          {description}
        </p>

        {tags.length > 0 ? (
          <ul className="list-inline small text-muted mb-0">
            {tags.map((tag) => (
              <li key={tag} className="list-inline-item badge bg-light text-dark">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {link ? (
          <Link
            href={link}
            className="btn btn-outline-primary stretched-link align-self-start"
          >
            View project
          </Link>
        ) : null}
      </div>
    </article>
  );
}