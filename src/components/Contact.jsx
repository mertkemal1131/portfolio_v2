import { useApp } from "../context/AppContext";

export default function Contact() {
  const { t } = useApp();
  const { contactSection } = t;

  return (
    <section id="contact" className="bg-white dark:bg-zinc-950 py-16 sm:py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
              {contactSection.line1}
              <br />
              {contactSection.line2}
            </h2>
            <a
              href={`mailto:${contactSection.email}`}
              className="inline-flex items-center gap-2 mt-6 text-sm text-accent hover:opacity-75 transition-opacity"
            >
              <span>✉</span>
              <span>{contactSection.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0 flex-wrap">
            {contactSection.links.map((link, i) => (
              <span key={link.label} className="flex items-center">
                {i > 0 && <span className="mx-2 text-zinc-300 dark:text-zinc-700 select-none">·</span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm transition-colors ${
                    link.label.toLowerCase().includes("github")
                      ? "text-accent hover:opacity-70"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
