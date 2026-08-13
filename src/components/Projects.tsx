import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <SectionHeading>Projects</SectionHeading>
        </Reveal>

        <div
          className={`mt-10 grid gap-6 text-left ${
            projects.length === 1 ? "mx-auto max-w-xl" : "sm:grid-cols-2"
          }`}
        >
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="card group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex h-32 flex-col justify-between bg-hero-1 p-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-4 text-sm font-semibold">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        View on GitHub →
                      </a>
                    ) : (
                      <span className="text-muted/60">GitHub link coming soon</span>
                    )}
                    {project.docUrl && (
                      <a
                        href={project.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        Documentation →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
