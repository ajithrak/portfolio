import React from 'react';

export const FintechLogin: React.FC = () => (
  <div className="min-h-[720px] bg-slate-950 flex items-center justify-center p-8">
    <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950">
          N
        </div>
        <span className="text-lg font-bold text-white">Nexus Bank</span>
      </div>

      <h2 className="text-xl font-semibold text-white mb-1">Welcome back</h2>
      <p className="text-sm text-slate-400 mb-6">Sign in to manage your accounts</p>

      <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
      <input
        readOnly
        value="alex.morgan@nexusbank.com"
        className="w-full mb-4 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-sm focus:outline-none"
      />

      <label className="block text-xs font-medium text-slate-400 mb-1">Password</label>
      <input
        readOnly
        type="password"
        value="password123"
        className="w-full mb-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-sm focus:outline-none"
      />

      <div className="flex justify-end mb-6">
        <span className="text-xs text-teal-400 cursor-pointer">Forgot password?</span>
      </div>

      <button className="w-full py-2.5 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-colors">
        Sign In
      </button>

      <p className="text-center text-xs text-slate-500 mt-6">Protected by 256-bit encryption</p>
    </div>
  </div>
);
