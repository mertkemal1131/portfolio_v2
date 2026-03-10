import { useApp } from "../context/AppContext";

export default function Profile() {
  const { t } = useApp();
  const { profileSection } = t;

  return (
    <section id="profile" className="bg-white dark:bg-zinc-950 py-12 sm:py-16">
      <div className="max-w-content mx-auto px-5 sm:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-10">
          {profileSection.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          <div>
            <h3 className="text-xl font-bold text-accent mb-6">
              {profileSection.basicInfo.label}
            </h3>
            <div className="space-y-4">
              {profileSection.basicInfo.fields.map((field) => (
                <div key={field.key} className="flex gap-6 text-sm">
                  <span className="w-40 flex-shrink-0 font-bold text-zinc-900 dark:text-zinc-100">
                    {field.key}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-6">
              {profileSection.aboutMe.label}
            </h3>
            <div className="space-y-5">
              {profileSection.aboutMe.paragraphs.map((para, i) => (
                <p key={i} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12" />
      </div>
    </section>
  );
}
