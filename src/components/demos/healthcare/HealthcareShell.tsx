import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
import { HEALTHCARE_NAV } from './data';

interface HealthcareShellProps {
  active: string;
  onNavigate: (key: string) => void;
  children: React.ReactNode;
}

export const HealthcareShell: React.FC<HealthcareShellProps> = ({ active, onNavigate, children }) => (
  <div className="min-h-[720px] flex bg-slate-50 text-slate-800">
    <aside className="w-56 shrink-0 border-r border-slate-200 bg-white p-4 hidden sm:flex sm:flex-col">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-white text-sm">
          C
        </div>
        <span className="font-bold text-slate-900">CareMe Health</span>
      </div>
      <nav className="space-y-1">
        {HEALTHCARE_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-sky-50 text-sky-700' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
              }`}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>

    <div className="flex-1 flex flex-col min-w-0">
      <header className="h-14 shrink-0 border-b border-slate-200 bg-white flex items-center justify-between px-4 sm:px-6">
        <div className="hidden sm:flex items-center gap-2 text-slate-400 text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 w-64">
          <FiSearch size={14} />
          <span>Search doctors, records...</span>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <FiBell size={18} className="text-slate-400" />
          <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-semibold">
            JD
          </span>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
    </div>
  </div>
);
