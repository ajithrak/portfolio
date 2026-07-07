import React, { useState } from 'react';
import { FintechCard, TransactionRow } from './ui';
import { TRANSACTIONS } from './data';

const FILTERS = ['All', 'Income', 'Expense'] as const;

export const FintechTransactions: React.FC = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const filtered = TRANSACTIONS.filter((tx) => {
    if (filter === 'All') return true;
    if (filter === 'Income') return tx.direction === 'in';
    return tx.direction === 'out';
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold text-white">Transactions</h1>
        <div className="flex gap-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filter === f ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <FintechCard>
        <ul className="divide-y divide-slate-800">
          {filtered.map((tx) => (
            <li key={tx.id} className="py-3.5 first:pt-0 last:pb-0">
              <TransactionRow tx={tx} />
            </li>
          ))}
        </ul>
      </FintechCard>
    </div>
  );
};
