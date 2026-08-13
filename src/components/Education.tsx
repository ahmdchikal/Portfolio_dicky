import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/portfolio";
import { BuildingIcon, CalendarIcon, GraduationCapIcon } from "@/components/icons";

export default function Education() {
  return (
    <section id="education" className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionHeading>Education</SectionHeading>
        </Reveal>

        <div className="mt-10 space-y-6">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="card flex flex-col items-center gap-4 rounded-2xl p-8 text-center shadow-sm sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hero-1 text-white">
                  <GraduationCapIcon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-muted">{edu.school}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {edu.period && (
                    <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                      <CalendarIcon /> {edu.period}
                    </span>
                  )}
                  {edu.faculty && (
                    <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                      <BuildingIcon /> {edu.faculty}
                    </span>
                  )}
                </div>

                {edu.description && (
                  <p className="max-w-xl text-sm leading-relaxed text-muted">
                    {edu.description}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
