import { useApp } from "../context/AppContext";

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Hero() {
  const { t } = useApp();
  const { heroSection } = t;

  return (
    <section id="hero" className="pt-[88px] bg-white dark:bg-zinc-950">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 sm:py-16 md:py-20">

        <div className="flex justify-center mb-8 md:hidden">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-zinc-100 dark:ring-zinc-800">
            <img src={heroSection.profileImage} alt={heroSection.greeting} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <span className="block w-8 h-px bg-zinc-400 dark:bg-zinc-600" />
              <span className="text-sm text-accent">{heroSection.greeting}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-5 tracking-tight">
              {heroSection.line1}
              <br />
              {heroSection.line2}
            </h1>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
              {heroSection.intro}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-medium rounded hover:opacity-90 transition-opacity"
              >
                {heroSection.hireBtn}
              </a>
              <a
                href={heroSection.socials[1]?.link || "https://github.com"}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent text-sm font-medium rounded hover:bg-accent hover:text-white transition-colors"
              >
                <GithubIcon />
                {heroSection.socials[1]?.alt_text || "Github"}
              </a>
              <a
                href={heroSection.socials[0]?.link || "https://linkedin.com"}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent text-sm font-medium rounded hover:bg-accent hover:text-white transition-colors"
              >
                <LinkedinIcon />
                {heroSection.socials[0]?.alt_text || "Linkedin"}
              </a>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0 w-[220px] lg:w-[260px] xl:w-[300px]">
            <div className="rounded-lg overflow-hidden aspect-[3/4]">
              <img src={heroSection.profileImage} alt={heroSection.greeting} className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
