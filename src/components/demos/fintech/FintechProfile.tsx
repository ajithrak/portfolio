import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { FintechCard } from './ui';

const LINKED_ACCOUNTS = [
  { name: 'Nexus Checking ••4821', balance: '$32,104.55' },
  { name: 'Nexus Savings ••1190', balance: '$16,134.57' },
  { name: 'Nexus Credit Card ••7742', balance: '-$1,240.00' },
];

export const FintechProfile: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <span className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xl font-bold">
        AM
      </span>
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white">Alex Morgan</h1>
          <FiCheckCircle className="text-teal-400" size={16} />
        </div>
        <p className="text-sm text-slate-400">Premium Member since 2021</p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <FintechCard>
        <h2 className="text-sm font-semibold text-white mb-4">Account details</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Email</dt>
            <dd className="text-slate-200">alex.morgan@nexusbank.com</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Phone</dt>
            <dd className="text-slate-200">+1 (555) 019-2231</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Member ID</dt>
            <dd className="text-slate-200">NB-88291-AM</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Security</dt>
            <dd className="text-emerald-400">2FA Enabled</dd>
          </div>
        </dl>
      </FintechCard>

      <FintechCard>
        <h2 className="text-sm font-semibold text-white mb-4">Linked accounts</h2>
        <ul className="space-y-3">
          {LINKED_ACCOUNTS.map((acc) => (
            <li key={acc.name} className="flex justify-between text-sm">
              <span className="text-slate-300">{acc.name}</span>
              <span className="font-medium text-white">{acc.balance}</span>
            </li>
          ))}
        </ul>
      </FintechCard>
    </div>
  </div>
);
