import Image from "next/image";
import { contact, profile } from "@/data/portfolio";
import { DownloadIcon, MailIcon, WhatsAppIcon, LinkedInIcon, ArrowRightIcon } from "@/components/icons";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("");

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-1 pb-16 pt-32 sm:pb-20 sm:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-hero-2"
        style={{ clipPath: "polygon(58% 0, 100% 0, 100% 100%, 76% 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-hero-2"
        style={{ clipPath: "polygon(52% 0, 56% 0, 74% 100%, 70% 100%)" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 sm:flex-row sm:items-center">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/15 shadow-xl sm:h-44 sm:w-44">
          {profile.photoUrl ? (
            <Image
              src={profile.photoUrl}
              alt={profile.name}
              fill
              sizes="176px"
              priority
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/40 to-hero-2">
              <span className="font-heading text-5xl font-bold text-white">
                {initials}
              </span>
            </div>
          )}
        </div>

        <div className="text-center sm:text-left">
          <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
            {profile.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {profile.titles.slice(0, 2).map((title, i) => (
              <span key={title} className="flex items-center gap-3">
                {i > 0 && <span className="hidden h-5 w-px bg-accent sm:block" />}
                <span className="text-lg text-white/70">{title}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>

            {profile.cvUrl ? (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            ) : (
              <a
                href="#contact"
                className="ml-1 flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
              >
                Get In Touch
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
