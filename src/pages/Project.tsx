import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Download, Code, Mail } from 'lucide-react';

export default function Project() {
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
          Impact of Interest Rates on Housing Affordability (2023)
        </h1>
        <p className="text-slate-600 text-lg mb-6 italic font-serif">
          A technical analysis of market volatility and housing supply using Python and Pandas.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 border-y utilitarian-border py-4 mb-12 font-mono">
          <span className="flex items-center gap-1"><Calendar size={14} /> Oct 12, 2023</span>
          <span className="flex items-center gap-1"><Clock size={14} /> 15 min read</span>
          <a href="#" className="ml-auto flex items-center gap-2 text-primary hover:bg-primary/10 px-3 py-1.5 rounded-sm transition-colors border border-transparent hover:border-primary font-medium">
            <Code size={14} /> View on GitHub
          </a>
        </div>

        {/* Notebook Start */}
        <div className="space-y-8">
          {/* Markdown Cell */}
          <div className="font-serif text-slate-800 space-y-4 leading-relaxed">
            <p>
              In this notebook, we analyze the causal relationship between central bank interest rate decisions and regional housing affordability indices. We specifically look at the rapid rate hike cycle of 2022-2023 and its immediate impact on mortgage demand and inventory levels.
            </p>
            <p>
              Data sources include the <strong>Federal Reserve Economic Data (FRED)</strong> and <strong>Zillow Research Data</strong>.
            </p>
          </div>

          {/* Code Cell */}
          <div className="flex gap-4">
            <div className="font-mono text-xs text-slate-400 min-w-[60px] pt-4 select-none">In [1]:</div>
            <div className="flex-1">
              <pre className="font-mono text-sm bg-stone-100 p-4 rounded-sm border utilitarian-border overflow-x-auto">
<code>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data from local parquet storage
df_fred = pd.read_parquet('data/interest_rates_daily.parquet')
df_zillow = pd.read_csv('data/housing_index_monthly.csv')

print(f"Loaded {len(df_fred)} interest rate entries.")`}</code>
              </pre>
              <div className="mt-2 text-xs text-slate-500 font-mono">
                Loaded 12,450 interest rate entries.
              </div>
            </div>
          </div>

          {/* Markdown Cell */}
          <div className="font-serif text-slate-800 space-y-4 leading-relaxed pt-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Data Preprocessing & Alignment</h2>
            <p>
              Since the interest rate data is reported daily while housing indices are monthly, we must resample the interest rates to a monthly mean to perform a valid correlation analysis.
            </p>
          </div>

          {/* Code Cell */}
          <div className="flex gap-4">
            <div className="font-mono text-xs text-slate-400 min-w-[60px] pt-4 select-none">In [2]:</div>
            <div className="flex-1">
              <pre className="font-mono text-sm bg-stone-100 p-4 rounded-sm border utilitarian-border overflow-x-auto">
<code>{`# Resampling FRED data to monthly frequency
df_fred['date'] = pd.to_datetime(df_fred['date'])
df_monthly_rates = df_fred.resample('M', on='date').mean()

# Merging datasets on timeframe
merged_data = pd.merge(df_monthly_rates, df_zillow, on='date')
merged_data.dropna(inplace=True)

# Visualizing the relationship
plt.figure(figsize=(10, 6))
sns.lineplot(data=merged_data, x='date', y='mortgage_rate', label='30-Year Fixed')
sns.lineplot(data=merged_data, x='date', y='affordability_index', label='Affordability Index')
plt.title('Rates vs Affordability (2018-2023)')
plt.show()`}</code>
              </pre>
              
              {/* Plot Output */}
              <div className="mt-6 p-4 bg-white rounded-sm border utilitarian-border">
                <img 
                  src="https://picsum.photos/seed/chart/800/500" 
                  alt="Analysis Chart" 
                  className="w-full h-auto rounded-sm shadow-sm opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <p className="text-center text-xs text-slate-500 mt-4 italic font-serif">Figure 1: Comparison between 30-Year Fixed Mortgage Rates and the Housing Affordability Index.</p>
              </div>
            </div>
          </div>

          {/* Markdown Cell */}
          <div className="font-serif text-slate-800 space-y-4 leading-relaxed pt-4">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Regression Analysis</h2>
            <p>
              We apply an Ordinary Least Squares (OLS) regression to determine the elasticity of housing prices relative to a 100-basis-point increase in the federal funds rate.
            </p>
          </div>

          {/* Code Cell */}
          <div className="flex gap-4">
            <div className="font-mono text-xs text-slate-400 min-w-[60px] pt-4 select-none">In [3]:</div>
            <div className="flex-1">
              <pre className="font-mono text-sm bg-stone-100 p-4 rounded-sm border utilitarian-border overflow-x-auto">
<code>{`import statsmodels.api as sm

X = merged_data['mortgage_rate']
y = merged_data['affordability_index']
X = sm.add_constant(X)

model = sm.OLS(y, X).fit()
model.summary()`}</code>
              </pre>
              
              {/* Table Output */}
              <div className="mt-4 overflow-x-auto bg-white p-4 border utilitarian-border rounded-sm">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-stone-100">
                      <th className="border utilitarian-border p-2 text-left">Variable</th>
                      <th className="border utilitarian-border p-2 text-left">Coefficient</th>
                      <th className="border utilitarian-border p-2 text-left">Std. Error</th>
                      <th className="border utilitarian-border p-2 text-left">t-Stat</th>
                      <th className="border utilitarian-border p-2 text-left">P&gt;|t|</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border utilitarian-border p-2">const</td>
                      <td className="border utilitarian-border p-2">142.12</td>
                      <td className="border utilitarian-border p-2">2.45</td>
                      <td className="border utilitarian-border p-2">58.01</td>
                      <td className="border utilitarian-border p-2">0.000</td>
                    </tr>
                    <tr className="bg-stone-50">
                      <td className="border utilitarian-border p-2">mortgage_rate</td>
                      <td className="border utilitarian-border p-2">-15.42</td>
                      <td className="border utilitarian-border p-2">0.82</td>
                      <td className="border utilitarian-border p-2">-18.80</td>
                      <td className="border utilitarian-border p-2">0.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Conclusion Markdown */}
          <div className="font-serif text-slate-800 space-y-4 leading-relaxed border-t utilitarian-border pt-12 mt-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Findings</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Inverse Correlation:</strong> There is a strong negative correlation (-0.88) between the 30-year fixed mortgage rate and the national affordability index.</li>
              <li><strong>Lag Effect:</strong> Changes in interest rates typically take 2-3 months to fully manifest in the housing affordability index.</li>
              <li><strong>Regional Variance:</strong> High-growth tech hubs showed higher sensitivity to rate hikes compared to the national average.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
