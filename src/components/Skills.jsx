import { useApp } from "../context/AppContext";

export default function Skills() {
  const { t } = useApp();
  const { skillsSection } = t;

  return (
    <section id="skills" className="bg-white dark:bg-zinc-950 py-12 sm:py-16">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-8">
          {skillsSection.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {skillsSection.skills.map((skill) => (
            <div key={skill.name}>
              <h3 className="text-lg font-semibold text-accent mb-3">
                {skill.name}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-800" />
      </div>
    </section>
  );
}
