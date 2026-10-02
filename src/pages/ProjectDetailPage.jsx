import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
          Project Case Study
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Project Details: <span className="text-cyan-400">{projectId}</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          Detailed technical architecture, database design, and key full-stack engineering highlights for this project.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
        >
          ← Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}