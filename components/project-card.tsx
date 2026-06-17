import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localeCopy } from "@/lib/i18n";
import type { Project } from "@/lib/projects";
import { ProjectStatusBadge } from "./project-status-badge";
import { TechnologyChip } from "./technology-chip";

interface ProjectCardProps {
  locale: Locale;
  project: Project;
}

export function ProjectCard({ locale, project }: ProjectCardProps) {
  const content = project.content[locale];
  const screenshot = project.screenshots[0];

  return (
    <article className="flex h-[760px] w-[min(88vw,920px)] shrink-0 snap-center flex-col overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm">
      <div className="h-[320px] shrink-0 overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--surface)]">
        {screenshot ? (
          <div className="flex h-full items-start justify-center overflow-hidden">
            <Image
              src={screenshot.src}
              alt={screenshot.alt[locale]}
              width={screenshot.width}
              height={screenshot.height}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 920px, 86vw"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center p-8 text-center text-sm leading-6 text-[color:var(--muted)]">
            {content.screenshotUnavailable ??
              (locale === "ja"
                ? "スクリーンショットは近日追加予定です。"
                : "Screenshot coming soon.")}
          </div>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal text-[color:var(--foreground)] sm:text-3xl">
              {content.name}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[color:var(--muted)]">
              {content.shortSummary}
            </p>
          </div>
          <ProjectStatusBadge locale={locale} status={project.status} />
        </div>

        <p className="max-w-4xl text-sm leading-6 text-[color:var(--muted)]">
          {content.detailedDescription}
        </p>

        <div className="grid gap-4 lg:grid-cols-1">
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--accent-strong)]">
              {locale === "ja" ? "使用技術" : "Technologies"}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechnologyChip key={technology} technology={technology} />
              ))}
            </ul>
          </section>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="font-heading mt-auto inline-flex w-fit items-center rounded-md bg-[color:var(--foreground)] px-4 py-2 text-sm font-medium text-[color:var(--background)] transition-colors hover:bg-[color:var(--accent-strong)]"
        >
          {localeCopy[locale].actions.viewProject}
        </a>
      </div>
    </article>
  );
}
