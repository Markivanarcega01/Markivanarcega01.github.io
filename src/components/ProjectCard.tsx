import type { Project } from "@/data/projects";

const ArrowIcon = () => (
  <svg
    className="size-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/50 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1.5 text-sm text-black/70 dark:text-white/70">
            {project.description}
          </p>
        </div>

        {/* Resume-matching metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <dl className="grid grid-cols-3 gap-2 rounded-xl bg-black/[0.03] p-3 dark:bg-white/[0.03]">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <dt className="text-[11px] uppercase tracking-wide text-black/50 dark:text-white/50">
                  {m.label}
                </dt>
                <dd className="text-base font-semibold tabular-nums">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {/* Tech tags */}
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-black/70 dark:border-white/15 dark:text-white/70"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            Visit site <ArrowIcon />
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black/70 underline-offset-4 hover:underline dark:text-white/70"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
