import Image from "next/image";
import { profile } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("");

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 pb-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 text-sm font-bold text-white">
              {profile.photoUrl ? (
                <Image
                  src={profile.photoUrl}
                  alt={profile.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/40 to-hero-2">
                  {initials}
                </span>
              )}
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-foreground">
                {profile.name}
              </p>
              <p className="text-xs text-muted">{profile.titles[0]}</p>
            </div>
          </div>

          <a
            href="#top"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
