import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups, softSkills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <SectionHeading>Skills</SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="card h-full rounded-2xl p-6 shadow-sm">
                <h3 className="border-b-2 border-accent pb-2 font-heading text-base font-bold text-foreground">
                  {group.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <div
                          className="skill-bar-fill h-full rounded-full bg-accent"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={skillGroups.length * 80}>
            <div className="card h-full rounded-2xl p-6 shadow-sm">
              <h3 className="border-b-2 border-accent pb-2 font-heading text-base font-bold text-foreground">
                Soft Skills
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
