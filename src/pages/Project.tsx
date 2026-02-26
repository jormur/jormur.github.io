import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Code } from 'lucide-react';
import projectsData from '../data/projects.json';
import JupyterViewer from '../components/JupyterViewer';

export default function Project() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <div className="text-center py-24 font-mono text-muted">Project not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-10">
        <Link to="/" className="group flex items-center gap-2 text-primary text-sm font-medium hover:underline font-serif">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </nav>

      {/* Project Intro */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 font-serif text-primary">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="text-muted text-lg mb-6 italic font-serif">
            {project.subtitle}
          </p>
        )}
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted border-y utilitarian-border py-4 mb-12 font-mono">
          {project.date && <span className="flex items-center gap-1"><Calendar size={14} /> {project.date}</span>}
          {project.readTime && <span className="flex items-center gap-1"><Clock size={14} /> {project.readTime}</span>}
          <a href="#" className="ml-auto flex items-center gap-1 text-primary hover:bg-primary/10 px-3 py-1 rounded-sm transition-colors border border-transparent hover:border-primary">
            <Code size={14} /> View on GitHub
          </a>
        </div>

        {/* Notebook Start */}
        {project.notebookFile && (
          <JupyterViewer fileUrl={project.notebookFile} />
        )}
      </section>
    </div>
  );
}
