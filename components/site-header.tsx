import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localeCopy } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const copy = localeCopy[locale];
  const navItems = [
    { href: `/${locale}`, label: copy.nav.home },
    { href: `/${locale}#projects`, label: copy.nav.projects },
  ];

  return (
    <header className="border-b border-[color:var(--border)] bg-[color:var(--background)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Link
          href={`/${locale}`}
          className="w-fit text-lg font-semibold tracking-normal text-[color:var(--foreground)]"
        >
          {copy.siteTitle}
        </Link>

        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-[color:var(--muted)]"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[color:var(--accent-strong)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
