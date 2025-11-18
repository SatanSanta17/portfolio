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
      className={`h-full rounded-3xl border border-slate-200 bg-white shadow-md transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div className="flex h-full flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

        <p className="flex-grow text-base text-slate-600">{description}</p>

        {tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2 text-sm text-slate-500">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {link ? (
          <Link
            href={link}
            className="inline-flex items-center self-start rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            View project
          </Link>
        ) : null}
      </div>
    </article>
  );
}