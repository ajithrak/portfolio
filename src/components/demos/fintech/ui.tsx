import React from 'react';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';
import { type Transaction, formatCurrency } from './data';

export const FintechToggle: React.FC<{ enabled: boolean; onToggle: () => void }> = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    aria-pressed={enabled}
    className={`relative w-10 h-[22px] rounded-full transition-colors ${enabled ? 'bg-teal-500' : 'bg-slate-700'}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-[18px]' : 'translate-x-0'
      }`}
    />
  </button>
);

export const FintechCard: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => <div className={`bg-slate-900 border border-slate-800 rounded-xl p-5 ${className}`}>{children}</div>;

export const BalanceStat: React.FC<{ label: string; value: string; change: string; positive?: boolean }> = ({
  label,
  value,
  change,
  positive,
}) => (
  <FintechCard>
    <p className="text-xs font-medium text-slate-400 mb-2">{label}</p>
    <p className="text-2xl font-bold text-white mb-1">{value}</p>
    <span className={`text-xs font-semibold ${positive ? 'text-emerald-400' : 'text-red-400'}`}>{change}</span>
  </FintechCard>
);

export const TransactionRow: React.FC<{ tx: Transaction }> = ({ tx }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3 min-w-0">
      <span
        className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
          tx.direction === 'in' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'
        }`}
      >
        {tx.direction === 'in' ? <FiArrowDownLeft size={14} /> : <FiArrowUpRight size={14} />}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white truncate">{tx.name}</p>
        <p className="text-xs text-slate-500">
          {tx.category} · {tx.date}
        </p>
      </div>
    </div>
    <span className={`text-sm font-semibold shrink-0 ${tx.direction === 'in' ? 'text-emerald-400' : 'text-slate-300'}`}>
      {tx.direction === 'in' ? '+' : '-'}
      {formatCurrency(tx.amount)}
    </span>
  </div>
);
