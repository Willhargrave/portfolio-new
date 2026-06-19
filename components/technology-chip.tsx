import Image from "next/image";
import { technologyIcons } from "@/lib/technology-icons";

interface TechnologyChipProps {
  technology: string;
}

export function TechnologyChip({ technology }: TechnologyChipProps) {
  const icon = technologyIcons[technology];

  return (
    <li className="inline-flex min-h-8 items-center gap-2 whitespace-nowrap rounded-md bg-[color:var(--project-chip-background,var(--surface-alt))] px-2.5 py-1 text-sm text-[color:var(--project-chip-foreground,var(--muted))]">
      {icon ? (
        <Image
          src={icon.iconUrl}
          alt=""
          width={icon.imageWidth ?? 24}
          height={icon.imageHeight ?? 24}
          className={`${icon.imageClassName ?? "h-6 w-6"} object-contain`}
        />
      ) : null}
      <span className="whitespace-nowrap">{technology}</span>
    </li>
  );
}
