import type { Locale } from "@/lib/i18n";
import type { ProjectStatus } from "@/lib/projects";
import { statusLabels } from "@/lib/projects";

interface ProjectStatusBadgeProps {
  locale: Locale;
  status: ProjectStatus;
}

export function ProjectStatusBadge({
  locale,
  status,
}: ProjectStatusBadgeProps) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-[color:var(--project-border,var(--border))] bg-[color:var(--project-badge-background,var(--surface-alt))] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[color:var(--project-badge-foreground,var(--accent-strong))]">
      {statusLabels[status][locale]}
    </span>
  );
}
