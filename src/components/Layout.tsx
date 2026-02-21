import { Outlet, Link, useLocation } from 'react-router-dom';
import { FileText, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project');
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/10">
      <header className="border-b utilitarian-border bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold uppercase tracking-tight font-serif text-primary dark:text-stone-200">Alex Rivera</span>
          </Link>
          <nav className="flex items-center gap-8">
            {isProjectPage && (
              <Link to="/" className="text-sm font-medium hover:text-primary dark:hover:text-primary/80 transition-colors font-serif">
                Home
              </Link>
            )}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="hover:text-primary dark:hover:text-primary/80 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary dark:hover:text-primary/80 transition-colors font-serif">
              <FileText size={16} />
              CV
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <Outlet />
      </main>
      <footer className="mt-20 border-t utilitarian-border py-12 bg-white/30 dark:bg-black/10 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-60 font-mono">
          <p>© {new Date().getFullYear()} Alex Rivera. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary dark:hover:text-primary/80 transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hover:text-primary dark:hover:text-primary/80 transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="mailto:contact@rivera.econ" className="hover:text-primary dark:hover:text-primary/80 transition-colors" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
