"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function getLocalizedPath(availableLocale: Locale): string {
    const segments = pathname.split("/");
    segments[1] = availableLocale;
    return segments.join("/") || `/${availableLocale}`;
  }

  function handleLocaleChange(
    event: MouseEvent<HTMLAnchorElement>,
    availableLocale: Locale,
  ): void {
    if (availableLocale === locale) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    const targetPath = getLocalizedPath(availableLocale);
    router.push(`${targetPath}${window.location.search}${window.location.hash}`, {
      scroll: false,
    });
  }

  return (
    <nav className="flex gap-2 text-sm" aria-label="Language switcher">
      {locales.map((availableLocale) => (
        <Link
          key={availableLocale}
          href={getLocalizedPath(availableLocale)}
          scroll={false}
          aria-current={availableLocale === locale ? "true" : undefined}
          onClick={(event) => handleLocaleChange(event, availableLocale)}
          className="rounded-md border border-[color:var(--border)] px-2.5 py-1 font-medium text-[color:var(--muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)] aria-current:border-[color:var(--accent)] aria-current:text-[color:var(--accent-strong)]"
        >
          {availableLocale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
