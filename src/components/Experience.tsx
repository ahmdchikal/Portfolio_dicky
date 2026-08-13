import Reveal from "@/components/Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-background-secondary/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="relative rounded-2xl border border-border bg-background p-6 pl-8 sm:p-8 sm:pl-10">
                <div className="absolute left-0 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]" />

                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-sm text-accent">{job.company}</p>
                  </div>
                  <span className="w-fit rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
