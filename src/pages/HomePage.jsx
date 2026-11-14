import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/hero/Hero';
import SkillsSection from '../components/skills/SkillsSection';
import ScopeEstimator from '../components/estimator/ScopeEstimator';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/layout/Footer';
import ProjectsSection from '../components/projects/ProjectsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
<<<<<<< HEAD
        <ProjectsSection />
        <SkillsSection />
=======
        <SkillsSection />
        <ProjectsSection />
>>>>>>> e620e5f5ffb8934f35edeb4f4d7588587914b173
        <ScopeEstimator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}