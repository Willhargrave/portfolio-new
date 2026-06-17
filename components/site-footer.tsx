import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localeCopy } from "@/lib/i18n";
import { site } from "@/lib/site";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const copy = localeCopy[locale];

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[color:var(--muted)] sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 {site.name}</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          <Link href={`/${locale}#projects`}>{copy.nav.projects}</Link>
          <a href={`mailto:${site.email}`}>{copy.nav.contact}</a>
          <a href={site.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
