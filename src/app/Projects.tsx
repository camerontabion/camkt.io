import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import { Card } from "~/components/Card";
import { Reveal } from "~/components/Reveal";
import { cn } from "~/utils/cn";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  ghLink?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "Lexsy",
    description:
      "Legal AI that helps attorneys with research, drafting, and the busywork that eats up their day. I was a founding engineer here and worked across the whole stack.",
    image: "/lexsy.png",
    link: "https://www.lexsy.ai/",
    featured: true,
  },
  {
    name: "Harpie",
    description:
      "Security tools that help keep your web3 wallet safe. I was the lead full stack engineer here.",
    image: "/harpie.png",
    link: "https://harpie.io",
  },
  {
    name: "Coop Do",
    description:
      "A workspace for keeping your projects, tasks, and team in one place instead of scattered across a dozen tabs.",
    image: "/coop-do.png",
    link: "https://coopdo.com",
  },
  {
    name: "Healage",
    description:
      "A dashboard for tracking patients, prescriptions, and medication reminders. Built with the Kirk Kerkorian School of Medicine at UNLV.",
    image: "/healage.png",
  },
];

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <Section id="projects" ariaLabelledBy="projects-heading">
      <Reveal>
        <Heading title="Projects" id="projects-heading" />
      </Reveal>
      <div className="flex flex-col gap-6 max-sm:gap-10">
        {featured.map((project) => (
          <Reveal key={project.name}>
            <FeaturedCard project={project} />
          </Reveal>
        ))}
        <div className="grid grid-cols-1 gap-6 max-sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const ProjectThumb = ({
  image,
  name,
  link,
  className,
}: {
  image: string;
  name: string;
  link?: string;
  className?: string;
}) => {
  const inner = (
    <>
      <img
        src={image}
        alt={`${name} project preview`}
        className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      {link && (
        <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-lg border border-border-strong bg-background/70 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      )}
    </>
  );

  const baseClass = cn(
    "relative block overflow-hidden rounded-xl border border-border bg-surface-2",
    className,
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${name}`}
        className={cn(
          baseClass,
          "transition-colors hover:border-border-strong",
        )}
      >
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
};

const ProjectTitle = ({ project }: { project: Project }) => (
  <div className="flex items-center justify-between gap-2">
    {project.link ? (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="underline-offset-4 transition-colors hover:text-primary-soft hover:underline"
      >
        <h3 className="font-display font-medium text-foreground text-lg">
          {project.name}
        </h3>
      </a>
    ) : (
      <h3 className="font-display font-medium text-foreground text-lg">
        {project.name}
      </h3>
    )}
    {project.ghLink && (
      <a
        href={project.ghLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} GitHub repository`}
        title={`${project.name} GitHub repository`}
        className="text-muted transition-colors hover:text-foreground"
      >
        <SiGithub className="size-5" />
      </a>
    )}
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <Card
    bareOnMobile
    className="group flex h-full flex-col gap-4 p-4 max-sm:p-0"
  >
    <ProjectThumb
      image={project.image}
      name={project.name}
      link={project.link}
      className="h-44 w-full"
    />
    <div className="flex flex-col gap-2 px-1 pb-1 max-sm:px-0 max-sm:pb-0">
      <ProjectTitle project={project} />
      <p className="text-muted text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  </Card>
);

const FeaturedCard = ({ project }: { project: Project }) => (
  <Card
    bareOnMobile
    className="group grid gap-6 p-5 max-sm:p-0 md:grid-cols-2 md:p-6"
  >
    <ProjectThumb
      image={project.image}
      name={project.name}
      link={project.link}
      className="h-56 w-full md:h-full md:min-h-[16rem]"
    />
    <div className="flex flex-col justify-center gap-4 md:pr-2">
      <ProjectTitle project={project} />
      <p className="text-base text-muted leading-relaxed">
        {project.description}
      </p>
    </div>
  </Card>
);
