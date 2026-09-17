import React, { useState } from 'react';

const SERVICES = [
  { id: 'web', label: 'Full Web App Development', cost: 1200 },
  { id: 'ui', label: 'UI/UX Design & Frontend', cost: 600 },
  { id: 'api', label: 'Backend API & Database', cost: 750 },
  { id: 'optimization', label: 'Performance Optimization', cost: 400 },
];

export default function ScopeEstimator() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [urgency, setUrgency] = useState(1);

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedCost = selectedServices.reduce((sum, serviceId) => {
    const item = SERVICES.find((s) => s.id === serviceId);
    return sum + (item ? item.cost : 0);
  }, 0) * urgency;

  return (
    <section id="estimator" className="py-20 px-4">
      <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-slate-900 border border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Interactive Project Estimator</h2>
        <p className="text-gray-400 text-center mb-8">Select services to estimate budget & scope</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {SERVICES.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`p-4 rounded-xl border text-left transition ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-500/10 text-white'
                    : 'border-slate-800 bg-slate-800/40 text-gray-400 hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-base">{service.label}</div>
                <div className="text-sm text-cyan-400 font-mono mt-1">+${service.cost}</div>
              </button>
            );
          })}
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-2">Timeline Urgency</label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(parseFloat(e.target.value))}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
          >
            <option value={1}>Standard Timeline (Normal Rate)</option>
            <option value={1.25}>Priority Delivery (+25%)</option>
            <option value={1.5}>Express Rush (+50%)</option>
          </select>
        </div>

        <div className="p-6 rounded-xl bg-slate-950 border border-cyan-500/30 text-center">
          <div className="text-sm text-gray-400">Estimated Total Cost</div>
          <div className="text-4xl font-extrabold text-cyan-400 my-2 font-mono">
            ${calculatedCost.toFixed(0)}
          </div>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400"
          >
            Inquire With This Scope
          </a>
        </div>
      </div>
    </section>
  );
}