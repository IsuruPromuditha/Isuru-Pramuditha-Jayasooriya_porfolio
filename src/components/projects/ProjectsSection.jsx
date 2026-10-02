import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 'time-ticker',
    name: 'TimeTicker',
    description:
      'A versatile standalone application for efficient stock and parts management. Simplifies stock level tracking, component lifecycle monitoring, and inventory management for businesses.',
    stack: ['Java', 'Desktop GUI', 'MySQL'],
    github: 'https://github.com/IsuruPromuditha/TimeTicker',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'book-store-mern',
    name: 'Book Store MERN App',
    description:
      'A modern, responsive e-commerce application with Redux state management and secure token authentication. Features distinct Admin and User roles for complete store management.',
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/IsuruPromuditha/Book_store_MERN_Stack_app',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'student-management-api',
    name: 'Student Management System API',
    description:
      'A flexible RESTful API engineered for educational institutions to manage student records, course enrolments, and grades with robust CRUD operations and data validation.',
    stack: ['Node.js', 'Express', 'REST API', 'Database'],
    github: 'https://github.com/IsuruPromuditha/Student_Management_System-Rest_Api-',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lunalume-web',
    name: 'LunaLume Web',
    description:
      'A modern e-commerce platform featuring dynamic product sizing, category management, keyframe animations, and an integrated Botpress AI webchat assistant.',
    stack: ['PHP', 'Tailwind CSS', 'JavaScript', 'Botpress AI'],
    github: 'https://github.com/IsuruPromuditha/LunaLumeWeb',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lk-shoe',
    name: 'LK Shoe E-Commerce',
    description:
      'A responsive React 18 + Vite platform built for a Sri Lankan footwear brand. Designed with a Stealth Hype dark brutalist glassmorphism UI, interactive admin panel, and Framer Motion.',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/IsuruPromuditha/LK_shoe',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'quick-dine',
    name: 'QuickDine',
    description:
      'A full-stack restaurant table booking system allowing diners to discover venues, check real-time availability by date and party size, and manage online reservations.',
    stack: ['React', 'Node.js', 'Express', 'Database'],
    github: 'https://github.com/IsuruPromuditha/QuickDine-main',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'React', 'Node.js', 'PHP'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.stack.some((tech) => tech.includes(filter)));

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-3">
            Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Engineering Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-2">
            Explore full-stack web applications, REST APIs, and standalone software systems built across modern tech stacks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 border border-slate-800 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Banner Image */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition font-medium pt-4"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a
                  href={`/project/${project.id}`}
                  className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white transition pt-4"
                >
                  <span>Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}