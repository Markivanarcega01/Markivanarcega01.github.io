import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-24">
      {/* Hero */}
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {site.role}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-black/70 dark:text-white/70">
          {site.tagline}
        </p>

        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={site.links.resume}
            className="underline-offset-4 hover:underline"
          >
            Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </nav>
      </header>

      {/* Projects */}
      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
          Deployed Projects
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
