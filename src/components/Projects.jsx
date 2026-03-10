import { useApp } from "../context/AppContext";

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col">
      <div className="rounded overflow-hidden mb-4 aspect-video bg-zinc-100 dark:bg-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-normal px-3 py-1 border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <a
          href={project.githubUrl || "https://github.com"}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          {project.github}
        </a>
        <a
          href={project.liveUrl || "https://vercel.app"}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          {project.live}
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useApp();
  const { projectsSection } = t;

  return (
    <section id="projects" className="bg-white dark:bg-zinc-950 py-12 sm:py-16">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-8 sm:mb-10">
          {projectsSection.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
          {projectsSection.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}