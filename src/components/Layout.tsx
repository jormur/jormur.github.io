import { Outlet, Link, useLocation } from 'react-router-dom';
import { FileText, Sun, Moon, Linkedin, Github, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project');

  const [isDark, setIsDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/10">
      <header className="border-b utilitarian-border bg-background/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold uppercase tracking-tight font-serif text-primary">Jordan Murillo</span>
          </Link>
          <nav className="flex items-center gap-6">
            {isProjectPage && (
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors font-serif">
                Home
              </Link>
            )}
            <a href="https://drive.google.com/file/d/1PYt_X6mZc56uYGIUfrkCP7T8sgm0t6hd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors font-serif">
              <FileText size={16} />
              CV
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:text-primary transition-colors rounded-full"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <Outlet />
      </main>
      <footer className="mt-20 border-t utilitarian-border py-8 bg-surface/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-60 font-mono">
          <p>© {new Date().getFullYear()} Jordan Murillo. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/jordanmur/" className="hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://github.com/jormur" className="hover:text-primary transition-colors" aria-label="GitHub"><Github size={16} /></a>
            <a href="mailto:jordanmurillo21@gmail.com" className="hover:text-primary transition-colors" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
