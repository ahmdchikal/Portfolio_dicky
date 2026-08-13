import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionHeading>About Me</SectionHeading>
        </Reveal>

        <Reveal delay={100}>
          <div className="card mt-10 rounded-2xl p-8 text-left shadow-sm sm:p-10">
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
