import Reveal from "@/components/Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Education
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Academic background
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-background-secondary p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-accent">{edu.school}</p>
                  </div>
                  {edu.period && (
                    <span className="w-fit rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {edu.period}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {edu.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
