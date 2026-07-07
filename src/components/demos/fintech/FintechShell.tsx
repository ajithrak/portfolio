import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
import { FINTECH_NAV } from './data';

interface FintechShellProps {
  active: string;
  onNavigate: (key: string) => void;
  children: React.ReactNode;
}

export const FintechShell: React.FC<FintechShellProps> = ({ active, onNavigate, children }) => (
  <div className="min-h-[720px] flex bg-slate-950 text-slate-200">
    <aside className="w-56 shrink-0 border-r border-slate-800 p-4 hidden sm:flex sm:flex-col">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950 text-sm">
          N
        </div>
        <span className="font-bold text-white">Nexus Bank</span>
      </div>
      <nav className="space-y-1">
        {FINTECH_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-teal-500/10 text-teal-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
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
      <header className="h-14 shrink-0 border-b border-slate-800 flex items-center justify-between px-4 sm:px-6">
        <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 w-64">
          <FiSearch size={14} />
          <span>Search transactions...</span>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <FiBell size={18} className="text-slate-400" />
          <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold text-white">
            AM
          </span>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
    </div>
  </div>
);
