import React from 'react';
import { BalanceStat, FintechCard, TransactionRow } from './ui';
import { SPEND_TREND, TRANSACTIONS, formatCurrency } from './data';

export const FintechDashboard: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-xl font-bold text-white">Good morning, Alex</h1>
      <p className="text-sm text-slate-400">Here's what's happening with your accounts today.</p>
    </div>

    <div className="grid sm:grid-cols-3 gap-4">
      <BalanceStat label="Total Balance" value={formatCurrency(48239.12)} change="+2.4% this month" positive />
      <BalanceStat label="Income (MTD)" value={formatCurrency(12400)} change="+8.1% vs last month" positive />
      <BalanceStat label="Expenses (MTD)" value={formatCurrency(4120.55)} change="-3.2% vs last month" />
    </div>

    <div className="grid lg:grid-cols-3 gap-4">
      <FintechCard className="lg:col-span-2">
        <h2 className="text-sm font-semibold text-white mb-6">Spending overview</h2>
        <div className="flex items-end gap-3 h-40">
          {SPEND_TREND.map((m) => (
            <div key={m.label} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-teal-500/80 rounded-t" style={{ height: `${m.value}%` }} />
              <span className="text-[10px] text-slate-500">{m.label}</span>
            </div>
          ))}
        </div>
      </FintechCard>

      <FintechCard>
        <h2 className="text-sm font-semibold text-white mb-4">Recent transactions</h2>
        <ul className="space-y-4">
          {TRANSACTIONS.slice(0, 4).map((tx) => (
            <li key={tx.id}>
              <TransactionRow tx={tx} />
            </li>
          ))}
        </ul>
      </FintechCard>
    </div>
  </div>
);
