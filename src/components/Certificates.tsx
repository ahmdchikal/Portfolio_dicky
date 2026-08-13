import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certificates } from "@/data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <SectionHeading>Certificates &amp; Awards</SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 80}>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted">{cert.issuer}</p>
                  <p className="mt-1 text-xs font-medium text-accent">{cert.date}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
