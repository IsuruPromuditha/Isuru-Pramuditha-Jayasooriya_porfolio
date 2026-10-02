import React, { useState } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 py-3.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 text-cyan-400 font-bold text-lg">
          <Code2 className="w-6 h-6" />
          <span className="text-white font-mono">Dev.Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Download Resume Button */}
          <a
            href="/Isuru Pramuditha Jaysooriya_Resume.pdf"
            download="Isuru Pramuditha Jaysooriya_Resume.pdf"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition font-semibold shadow-md shadow-cyan-500/10 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition font-semibold"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800 space-y-3 pb-2 px-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 py-1 font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Isuru Pramuditha Jaysooriya_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-2 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}