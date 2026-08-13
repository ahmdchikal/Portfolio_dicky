import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

const stats = [
  { label: "Years of Study", value: "4+" },
  { label: "Support Tickets Resolved", value: "500+" },
  { label: "Projects Built", value: "4" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About Me
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Solving technical problems, one ticket at a time
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background-secondary p-5 text-center md:text-left"
                >
                  <p className="font-heading text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
