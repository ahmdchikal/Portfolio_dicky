import Reveal from "@/components/Reveal";
import { contact } from "@/data/portfolio";
import { InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

const links = [
  { label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappLink, Icon: WhatsAppIcon },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon },
  { label: "LinkedIn", value: "achmad-dicky-adi-prastian", href: contact.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", value: "@achmad.dickyy", href: contact.instagram, Icon: InstagramIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="card rounded-2xl p-10 text-center shadow-sm sm:p-14">
            <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
              Let&apos;s Collaborate!
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              I&apos;m always open to new opportunities in IT Support and
              Technical Support. Don&apos;t hesitate to reach out!
            </p>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {links.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl bg-background px-4 py-3 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted">📍 {contact.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
