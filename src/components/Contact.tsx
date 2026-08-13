import Reveal from "@/components/Reveal";
import { contact } from "@/data/portfolio";

const links = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "WhatsApp",
    value: contact.whatsapp,
    href: contact.whatsappLink,
  },
  {
    label: "LinkedIn",
    value: "achmad-dicky-adi-prastian",
    href: contact.linkedin,
  },
  {
    label: "Instagram",
    value: "@achmad.dickyy",
    href: contact.instagram,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background-secondary/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m currently open to IT Support and Technical Support
            roles. Feel free to reach out — I usually reply within a day.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 80}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {link.label}
                  </p>
                  <p className="mt-1 font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
                <span className="text-xl text-accent transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <p className="mt-8 text-sm text-muted">📍 {contact.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
