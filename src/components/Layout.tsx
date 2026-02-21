import { Outlet, Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project');

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/10">
      <header className="border-b utilitarian-border bg-bg-light/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold uppercase tracking-tight font-serif text-primary">Jordan Murillo</span>
            <span className="text-xs uppercase tracking-[0.2em] opacity-60 font-mono">Junior Economist</span>
          </Link>
          <nav className="flex items-center gap-8">
            {isProjectPage && (
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors font-serif">
                Home
              </Link>
            )}
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors font-serif">
              <FileText size={16} />
              CV
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <Outlet />
      </main>
      <footer className="mt-20 border-t utilitarian-border py-12 bg-white/30">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold tracking-tight font-serif text-primary">Alex Rivera</span>
            </div>
            <p className="text-xs opacity-50 uppercase tracking-widest font-mono">Economic Research & Quantitative Analysis</p>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest font-mono">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="mailto:contact@rivera.econ" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 mt-12 pt-8 border-t utilitarian-border flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40 font-mono">
          <p>© {new Date().getFullYear()} Alex Rivera. All Rights Reserved.</p>
          <p>Built for utility & clarity.</p>
        </div>
      </footer>
    </div>
  );
}
