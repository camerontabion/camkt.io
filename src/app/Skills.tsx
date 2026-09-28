import {
  SiCplusplus,
  SiCss,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Card } from "~/components/Card";
import { Reveal } from "~/components/Reveal";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

const iconClass =
  "size-10 max-md:size-8 grayscale transition duration-500 ease-out group-hover:grayscale-0 motion-reduce:transition-none";

interface SkillImageProps {
  src: string;
  alt: string;
  className?: string;
}

const SkillImage = ({ src, alt, className }: SkillImageProps) => (
  <div className="relative size-10 max-md:size-8">
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  </div>
);

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  label: string;
  skills: Skill[];
}

const imageIconClass =
  "size-full object-contain grayscale transition duration-500 ease-out group-hover:grayscale-0 motion-reduce:transition-none";

const groups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      {
        name: "React",
        icon: <SiReact color="default" className={iconClass} />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs color="default" className={iconClass} />,
      },
      {
        name: "TanStack Start",
        icon: (
          <SkillImage
            src="/tanstack-start.png"
            alt="TanStack Start"
            className={imageIconClass}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss color="default" className={iconClass} />,
      },
      { name: "HTML", icon: <SiHtml5 color="default" className={iconClass} /> },
      { name: "CSS", icon: <SiCss color="default" className={iconClass} /> },
    ],
  },
  {
    label: "Backend & data",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs color="default" className={iconClass} />,
      },
      {
        name: "Convex",
        icon: (
          <SkillImage
            src="/convex.svg"
            alt="Convex"
            className={imageIconClass}
          />
        ),
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql color="default" className={iconClass} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb color="default" className={iconClass} />,
      },
    ],
  },
  {
    label: "Languages",
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript color="default" className={iconClass} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript color="default" className={iconClass} />,
      },
      {
        name: "Python",
        icon: <SiPython color="default" className={iconClass} />,
      },
      { name: "Go", icon: <SiGo color="default" className={iconClass} /> },
      {
        name: "C++",
        icon: <SiCplusplus color="default" className={iconClass} />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" ariaLabelledBy="skills-heading">
      <Reveal>
        <Heading title="Skills" id="skills-heading" />
      </Reveal>
      <div className="flex flex-col gap-8">
        {groups.map((group) => (
          <Reveal key={group.label}>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-primary-soft/90 text-sm italic">
                {group.label}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4">
                {group.skills.map(({ name, icon }) => (
                  <Card
                    key={name}
                    bareOnMobile
                    className="group flex h-full flex-col items-center justify-center gap-3 p-4 text-center max-sm:p-2 md:p-5"
                  >
                    {icon}
                    <p className="text-muted text-xs transition-colors group-hover:text-foreground">
                      {name}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
