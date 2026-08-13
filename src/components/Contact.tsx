import Reveal from "@/components/Reveal";
import { contact } from "@/data/portfolio";
import { InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

const links = [
  { label: "WhatsApp", href: contact.whatsappLink, Icon: WhatsAppIcon },
  { label: "Email", href: `mailto:${contact.email}`, Icon: MailIcon },
  { label: "LinkedIn", href: contact.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: contact.instagram, Icon: InstagramIcon },
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

            <div className="mt-8 flex items-center justify-center gap-4">
              {links.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
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
