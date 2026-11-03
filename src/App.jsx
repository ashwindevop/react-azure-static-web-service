import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-6 mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30">
            ☁️
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AshWin - Azure Cloud Lab Portal - Ashwin
            </h1>
            <p className="text-xs text-slate-400">Deployed via Azure Static Web Apps & GitHub Actions</p>
          </div>
        </div>

        {/* Live Clock Component */}
        <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 px-5 py-2.5 rounded-2xl shadow-xl flex flex-col items-center md:items-end">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xl font-mono font-bold text-emerald-300 tracking-wider">
              {formattedTime}
            </span>
          </div>
          <span className="text-xs text-slate-400 mt-0.5">{formattedDate}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto w-full space-y-8 flex-1">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-800/50 border border-blue-500/20 p-8 md:p-12 shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              🚀 Live Deployment Ready
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Multi-Cloud Architecture & Hands-on Lab Environment
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Welcome to the production showcase dashboard. This static web app is optimized for high availability, zero downtime, global distribution via Azure CDN, and instant CI/CD deployment pipeline.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#features" className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition-all shadow-lg shadow-blue-600/30">
                Explore Core Modules
              </a>
              <a href="#tech-stack" className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-semibold text-sm text-slate-300 transition-all">
                Tech Stack Details
              </a>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 border border-slate-700/60 hover:border-blue-500/50 p-6 rounded-2xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Azure Static Web Apps</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Automated building and hosting directly from GitHub. Built-in global content delivery network with free SSL/TLS certificates.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 hover:border-cyan-500/50 p-6 rounded-2xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-4">
              ⚙️
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Automated CI/CD</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Pre-configured GitHub Actions workflow automatically builds and updates your web application on every code push to the main branch.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/50 p-6 rounded-2xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-4">
              🔒
            </div>
            <h3 className="text-lg font-bold text-white mb-2">High Availability & Scale</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Designed for enterprise scalability, seamless API connectivity using Azure Functions, and high-performance frontend rendering.
            </p>
          </div>
        </section>

        {/* Tech Stack Badge Row */}
        <section id="tech-stack" className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Powered By Modern Cloud Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {['React 18', 'Vite', 'Tailwind CSS', 'Azure Static Web Apps', 'GitHub Actions', 'Azure Functions Ready'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-medium text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full border-t border-slate-800 pt-6 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-2">
        <p>© 2026 Azure Cloud Engineering Showcase. Built with React & Azure SWA.</p>
        <p className="flex items-center gap-1">
          Status: <span className="text-emerald-400 font-semibold">Online & Healthy</span>
        </p>
      </footer>
    </div>
  );
}
