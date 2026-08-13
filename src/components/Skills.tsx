import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background-secondary/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Skills
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            What I bring to the table
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background-secondary px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
