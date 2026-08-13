import { contact, profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background-secondary px-4 py-1.5 text-sm text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Open to IT Support opportunities
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-muted sm:text-xl">
            {profile.titles.join(" · ")}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.bio[0]}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span>📍 {profile.location}</span>
            <span className="hidden sm:inline">·</span>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-accent"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm md:block">
          <div className="absolute inset-0 rounded-[2rem] border border-border bg-background-secondary/60 backdrop-blur-sm" />
          <div className="absolute inset-6 flex items-center justify-center rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent">
            <span className="font-heading text-7xl font-bold text-gradient">
              AD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
