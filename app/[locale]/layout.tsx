import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getLanguageAlternates, isLocale, localeCopy, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams(): Array<{ locale: string }> {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  return {
    title: localeCopy[localeParam].siteTitle,
    description: site.description[localeParam],
    alternates: {
      languages: getLanguageAlternates(),
    },
    openGraph: {
      title: localeCopy[localeParam].siteTitle,
      description: site.description[localeParam],
      locale: localeParam === "ja" ? "ja_JP" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col" lang={localeParam}>
      <SiteHeader locale={localeParam} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={localeParam} />
    </div>
  );
}
