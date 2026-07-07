import React, { useState } from 'react';

export const HealthcareLogin: React.FC = () => {
  const [role, setRole] = useState<'Patient' | 'Provider'>('Patient');

  return (
    <div className="min-h-[720px] bg-sky-50 flex items-center justify-center p-8">
      <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-white">C</div>
          <span className="text-lg font-bold text-slate-900">CareMe Health</span>
        </div>

        <div className="flex gap-1.5 bg-slate-100 rounded-lg p-1 mb-6">
          {(['Patient', 'Provider'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                role === r ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-500'
              }`}
            >
              Sign in as {r}
            </button>
          ))}
        </div>

        <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
        <input
          readOnly
          value="jordan.davis@careme.health"
          className="w-full mb-4 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none"
        />

        <label className="block text-xs font-medium text-slate-500 mb-1">Password</label>
        <input
          readOnly
          type="password"
          value="password123"
          className="w-full mb-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none"
        />

        <div className="flex justify-end mb-6">
          <span className="text-xs text-sky-600 cursor-pointer">Forgot password?</span>
        </div>

        <button className="w-full py-2.5 rounded-lg bg-sky-500 text-white font-semibold text-sm hover:bg-sky-600 transition-colors">
          Sign In
        </button>

        <p className="text-center text-xs text-slate-400 mt-6">HIPAA-compliant · Data encrypted in transit and at rest</p>
      </div>
    </div>
  );
};
