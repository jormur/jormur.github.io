import { Link } from 'react-router-dom';
import { Code, LineChart, FileText, Database, Linkedin, Github, Mail } from 'lucide-react';
import projectsData from '../data/projects.json';

const iconMap: Record<string, any> = {
  notebook: Code,
  dashboard: LineChart,
  pdf: FileText,
  github: Database
};

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 font-serif text-primary">Jordan Murillo</h1>
          <h2 className="text-xl font-mono text-muted mb-8 uppercase tracking-widest">Research Analyst</h2>
          <p className="text-xl md:text-xl leading-snug max-w-3xl font-serif mb-8">
            Originally from Belize, I moved to Taiwan on scholarship and have since built my academic and professional career in Taipei. I earned my Master's in Applied Economics from National Chengchi University, where I specialized in econometrics and causal inference.<br /><br />

            I currently work as a Research Analyst at MacroMicro, where I analyze macroeconomic and financial data and contribute to research publications.<br /><br />

            I'm always open to thoughtful conversations. Feel free to reach out.
          </p>

          {/* Contact */}
          <div className="pt-8 border-t utilitarian-border">
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a href="https://www.linkedin.com/in/jordanmur/" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-alt hover:bg-surface transition-colors border utilitarian-border font-medium">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="mailto:jordanmurillo21@gmail.com" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-alt hover:bg-surface transition-colors border utilitarian-border font-medium">
                <Mail size={18} />
                Email
              </a>
              <a href="https://drive.google.com/file/d/1PYt_X6mZc56uYGIUfrkCP7T8sgm0t6hd/view?usp=sharing" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-alt hover:bg-surface transition-colors border utilitarian-border font-medium">
                <FileText size={18} />
                CV
              </a>
              <a href="https://github.com/jormur" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-alt hover:bg-surface transition-colors border utilitarian-border font-medium">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Headshot */}
        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 overflow-hidden">
          <img
            src="/assets/img/headshot.JPG"
            alt="Jordan Murillo"
            className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <header className="mb-12 border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-black tracking-tight mb-4 font-serif text-primary">Relevant Projects</h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl font-serif">
            A selection of data-driven projects focused on econometric modeling and statistical analysis.
          </p>
        </header>

        <div className="space-y-12">
          {projectsData.map((project) => (
            <article key={project.id} className="group relative pb-12 border-b utilitarian-border last:border-0">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                {project.links.some(l => l.type === 'notebook') ? (
                  <Link to={`/project/${project.id}`} className="text-2xl font-bold group-hover:text-primary transition-colors font-serif">
                    {project.title}
                  </Link>
                ) : (
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors font-serif">{project.title}</h2>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-surface-alt text-[10px] font-bold uppercase tracking-widest rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2 font-mono">The Problem</h3>
                  <p className="text-sm leading-relaxed text-foreground/80 font-serif">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2 font-mono">The Result</h3>
                  <p className="text-sm leading-relaxed text-foreground/80 font-serif">
                    {project.result}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                {project.links.map((link, i) => {
                  const Icon = iconMap[link.type] || Code;
                  const isInternal = link.type === 'notebook';
                  const LinkComponent = isInternal ? Link : 'a';

                  return (
                    <LinkComponent
                      key={i}
                      to={isInternal ? link.url : undefined}
                      href={!isInternal ? link.url : undefined}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline decoration-2 underline-offset-4 font-mono"
                    >
                      <Icon size={16} />
                      {link.label}
                    </LinkComponent>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
