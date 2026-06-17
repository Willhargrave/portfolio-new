import Image from "next/image";
import { technologyIcons } from "@/lib/technology-icons";

type Skill =
  {
    name: string;
    iconUrl: string;
    imageClassName?: string;
    imageHeight?: number;
    imageWidth?: number;
  };

const skills: Skill[] = [
  {
    name: "JavaScript",
    iconUrl: technologyIcons.JavaScript.iconUrl,
  },
  {
    name: "HTML",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "React",
    iconUrl: technologyIcons.React.iconUrl,
    imageClassName: "h-16 w-16",
    imageHeight: 64,
    imageWidth: 64,
  },
  {
    name: "TypeScript",
    iconUrl: technologyIcons.TypeScript.iconUrl,
  },
  {
    name: "Next.js",
    iconUrl: technologyIcons["Next.js"].iconUrl,
    imageClassName: "h-12 w-12",
    imageHeight: 48,
    imageWidth: 48,
  },
  {
    name: "Vue.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Python",
    iconUrl: technologyIcons.Python.iconUrl,
  },
  {
    name: "Java",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Ruby",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  },
  {
    name: "Go",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    imageClassName: "h-12 w-16",
    imageHeight: 48,
    imageWidth: 64,
  },
  {
    name: "MongoDB",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL/Postgres",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    imageClassName: "h-14 w-20",
    imageHeight: 56,
    imageWidth: 80,
  },
  {
    name: "Git",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    iconUrl: technologyIcons.AWS.iconUrl,
    imageClassName: "h-14 w-20",
    imageHeight: 56,
    imageWidth: 80,
  },
  {
    name: "Microsoft Azure",
    iconUrl: technologyIcons["Microsoft Azure"].iconUrl,
  },
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Docker",
    iconUrl: technologyIcons.Docker.iconUrl,
  },
];

export function SkillsCarousel() {
  return (
    <div
      className="mt-10 flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto pt-3 pb-4"
      aria-label="Languages and tools"
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group flex w-24 shrink-0 snap-start flex-col items-center gap-3"
        >
          <div className="flex h-20 items-center justify-center">
            <Image
              src={skill.iconUrl}
              alt={skill.name}
              width={skill.imageWidth ?? 56}
              height={skill.imageHeight ?? 56}
              className={`${skill.imageClassName ?? "h-14 w-14"} object-contain drop-shadow-[0_8px_0_rgba(23,23,23,0.14)] transition-[filter,transform] duration-200 group-hover:-translate-y-0.5 group-hover:brightness-110 group-hover:drop-shadow-[0_0_18px_rgba(15,118,110,0.3)]`}
            />
          </div>
          <p className="w-full whitespace-nowrap text-center text-xs font-medium leading-4 text-[color:var(--muted)]">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );
}
