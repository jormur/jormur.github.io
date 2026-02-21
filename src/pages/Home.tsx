import { Link } from 'react-router-dom';
import { Code, LineChart, FileText, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 font-serif text-primary">Jordan Murillo</h1>
          <h2 className="text-xl font-mono opacity-60 mb-8 uppercase tracking-widest">Junior Economist</h2>
          <p className="text-xl md:text-2xl leading-snug max-w-3xl font-serif mb-8">
            Quantitative researcher specializing in econometric modeling and data-driven policy evaluation for emerging markets.
          </p>

          {/* Credentials & Contact */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t utilitarian-border">
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] opacity-50 mb-4">Credentials</h3>
              <p className="font-mono text-sm">
                <span className="opacity-50">Education:</span><br />
                BSc Economics, University of Research
              </p>
              <p className="font-mono text-sm">
                <span className="opacity-50">Location:</span><br />
                Washington, D.C.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] opacity-50 mb-4">Contact</h3>
              <div className="flex flex-col gap-2 font-mono text-sm">
                <a href="mailto:contact@rivera.econ" className="hover:text-primary transition-colors">contact@rivera.econ</a>
                <a href="/cv.pdf" className="hover:text-primary transition-colors">Download_CV_Rivera.pdf</a>
                <a href="#" className="hover:text-primary transition-colors">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>

        {/* Headshot */}
        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 overflow-hidden rounded-sm border utilitarian-border p-2 bg-white">
          <img
            src="https://picsum.photos/seed/economist/400/400"
            alt="Jordan Murillo"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <header className="mb-12 border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-black tracking-tight mb-4 font-serif text-primary">Relevant Technical Projects</h2>
          <p className="text-lg opacity-80 leading-relaxed max-w-2xl font-serif">
            A selection of data-driven projects focused on econometric modeling, statistical analysis, and automated reporting systems.
          </p>
        </header>

        <div className="space-y-12">
          {/* Project 1 */}
          <article className="group relative pb-12 border-b utilitarian-border last:border-0">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <Link to="/project/inflation-dynamics" className="text-2xl font-bold group-hover:text-primary transition-colors font-serif">
                Forecasting Regional Inflation Dynamics
              </Link>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-stone-200 text-[10px] font-bold uppercase tracking-widest rounded font-mono">Python</span>
                <span className="px-2 py-1 bg-stone-200 text-[10px] font-bold uppercase tracking-widest rounded font-mono">SQL</span>
                <span className="px-2 py-1 bg-stone-200 text-[10px] font-bold uppercase tracking-widest rounded font-mono">Tableau</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 font-mono">The Problem</h3>
                <p className="text-sm leading-relaxed opacity-80 font-serif">
                  Traditional consumer price indices often lag in capturing localized hyper-inflation trends in emerging markets. I needed to build a real-time tracking tool using web-scraped retail data to provide earlier warnings for policy shifts.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 font-mono">The Result</h3>
                <p className="text-sm leading-relaxed opacity-80 font-serif">
                  Developed a VAR model that outperformed standard benchmarks by 12% in short-term forecasting accuracy. Integrated results into a Tableau dashboard used by regional analysts for weekly briefing reports.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Link to="/project/inflation-dynamics" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline decoration-2 underline-offset-4 font-mono">
                <Code size={16} />
                View Notebook
              </Link>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline decoration-2 underline-offset-4 font-mono">
                <LineChart size={16} />
                Live Dashboard
              </a>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group relative pb-12 border-b utilitarian-border last:border-0">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <h2 className="text-2xl font-bold group-hover:text-primary transition-colors font-serif">Labor Market Resilience Post-Automation</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-stone-200 text-[10px] font-bold uppercase tracking-widest rounded font-mono">R (Tidyverse)</span>
                <span className="px-2 py-1 bg-stone-200 text-[10px] font-bold uppercase tracking-widest rounded font-mono">Stata</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 font-mono">The Problem</h3>
                <p className="text-sm leading-relaxed opacity-80 font-serif">
                  Assessing the impact of warehouse automation on entry-level employment rates across 50 mid-western counties. The primary challenge was reconciling disparate census data with private sector payroll estimates.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 font-mono">The Result</h3>
                <p className="text-sm leading-relaxed opacity-80 font-serif">
                  Automated the data cleaning pipeline using R, reducing processing time from 3 days to 40 minutes. Findings showed a 4% short-term dip in employment followed by a 6% increase in technical support roles within 18 months.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline decoration-2 underline-offset-4 font-mono">
                <FileText size={16} />
                Technical Paper (PDF)
              </a>
            </div>
          </article>

          {/* Project 3 */}
          <article className="group relative pb-12 border-b utilitarian-border last:border-0">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <h2 className="text-2xl font-bold group-hover:text-primary transition-colors font-serif">Trade Flow Visualization Pipeline</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-stone-200 text-[10px] font-bold uppercase tracking-widest rounded font-mono">SQL</span>
                <span className="px-2 py-1 bg-stone-200 text-[10px] font-bold uppercase tracking-widest rounded font-mono">D3.js</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 font-mono">The Problem</h3>
                <p className="text-sm leading-relaxed opacity-80 font-serif">
                  Sanitary and phytosanitary (SPS) regulations create invisible barriers to trade. This project mapped these barriers across the EU-African corridor using 10 years of customs dispute data.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 font-mono">The Result</h3>
                <p className="text-sm leading-relaxed opacity-80 font-serif">
                  Cleaned and normalized a database of 50,000+ entries. Created a custom Sankey visualization highlighting that SPS compliance costs effectively acted as an 8% tariff on agricultural exports from sub-Saharan Africa.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline decoration-2 underline-offset-4 font-mono">
                <Database size={16} />
                GitHub Repo
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
