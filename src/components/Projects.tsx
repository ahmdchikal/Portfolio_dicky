import Reveal from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Projects
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Things I&apos;ve worked on
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-background-secondary p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.15)]">
                <h3 className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm font-medium">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
