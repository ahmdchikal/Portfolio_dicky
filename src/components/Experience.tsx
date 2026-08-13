import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <SectionHeading>Experience</SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="card h-full rounded-2xl p-6 shadow-sm sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-heading text-lg font-bold text-accent">
                    {job.role}
                  </h3>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">{job.company}</p>

                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
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
