import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { ProjectScreenshot as ProjectScreenshotData } from "@/lib/projects";

interface ProjectScreenshotProps {
  locale: Locale;
  screenshot: ProjectScreenshotData;
  priority?: boolean;
}

export function ProjectScreenshot({
  locale,
  screenshot,
  priority = false,
}: ProjectScreenshotProps) {
  if (screenshot.type === "video") {
    return (
      <video
        aria-label={screenshot.alt[locale]}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        width={screenshot.width}
        height={screenshot.height}
        className="h-auto w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm"
      >
        <source src={screenshot.src} type={screenshot.mimeType} />
      </video>
    );
  }

  return (
    <Image
      src={screenshot.src}
      alt={screenshot.alt[locale]}
      width={screenshot.width}
      height={screenshot.height}
      priority={priority}
      className="h-auto w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm"
    />
  );
}
