import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-gray-400">Have a project in mind or an open role? Let's connect.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Let's talk about your project</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm available for freelance work, full-stack web application development, and full-time software engineering roles.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span>yourname@email.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Available Globally (Remote / On-site)</span>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Connect</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-cyan-400 animate-bounce" />
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 flex items-center justify-center space-x-2 transition"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}