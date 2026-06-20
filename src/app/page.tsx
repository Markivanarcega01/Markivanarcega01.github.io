import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/Carousel";
import { projects } from "@/data/projects";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-24">
      {/* Hero */}
      <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
        {/* Left column — text */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {site.role}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <div className="mt-5 flex flex-col gap-2">
            {site.skills.map((row) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={row.join(",")}
                src={`https://skillicons.dev/icons?i=${row.join(",")}`}
                alt={`Tech stack: ${row.join(", ")}`}
                className="h-auto w-full max-w-md"
              />
            ))}
          </div>

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
              target="_blank"
              rel="noopener noreferrer"
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
        </div>

        {/* Right column — square photo with hover crossfade */}
        {site.avatar && (
          <div className="group relative aspect-square w-40 shrink-0 overflow-hidden rounded-[4px] ring-1 ring-black/10 sm:w-56 dark:ring-white/15">
            {/* Default photo — fades out on hover */}
            <Image
              src={site.avatar}
              alt={site.name}
              fill
              sizes="(min-width: 640px) 224px, 160px"
              priority
              className="object-cover object-[50%_18%] transition-opacity duration-500 ease-out group-hover:opacity-0"
            />
            {/* Hover photo — fades in on top */}
            {site.avatarHover && (
              <Image
                src={site.avatarHover}
                alt=""
                fill
                sizes="(min-width: 640px) 224px, 160px"
                aria-hidden
                className="object-cover object-[50%_18%] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
              />
            )}
          </div>
        )}
      </header>

      {/* About */}
      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
          About
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-black/70 dark:text-white/70">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

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

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
            Gallery
          </h2>
          <div className="mt-6">
            <Carousel items={gallery} />
          </div>
        </section>
      )}
    </main>
  );
}
