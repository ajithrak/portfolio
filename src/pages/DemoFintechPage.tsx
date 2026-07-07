import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { FintechShell } from '../components/demos/fintech/FintechShell';
import { FintechLogin } from '../components/demos/fintech/FintechLogin';
import { FintechDashboard } from '../components/demos/fintech/FintechDashboard';
import { FintechTransactions } from '../components/demos/fintech/FintechTransactions';
import { FintechProfile } from '../components/demos/fintech/FintechProfile';
import { FintechSettings } from '../components/demos/fintech/FintechSettings';

const PAGES: DemoPageDef[] = [
  { key: 'login', label: 'Login', render: () => <FintechLogin /> },
  {
    key: 'dashboard',
    label: 'Dashboard',
    render: (navigate) => (
      <FintechShell active="dashboard" onNavigate={navigate}>
        <FintechDashboard />
      </FintechShell>
    ),
  },
  {
    key: 'transactions',
    label: 'Transactions',
    render: (navigate) => (
      <FintechShell active="transactions" onNavigate={navigate}>
        <FintechTransactions />
      </FintechShell>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    render: (navigate) => (
      <FintechShell active="profile" onNavigate={navigate}>
        <FintechProfile />
      </FintechShell>
    ),
  },
  {
    key: 'settings',
    label: 'Settings',
    render: (navigate) => (
      <FintechShell active="settings" onNavigate={navigate}>
        <FintechSettings />
      </FintechShell>
    ),
  },
];

const DemoFintechPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Nexus Bank — Fintech Template"
    description="A ready-to-use banking product template: login, account overview, transactions, and settings, built with the same production patterns used on the JPMorgan Chase engagement."
    backHref="/fintech"
    backLabel="Back to case study"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-teal-500 text-slate-950"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-slate-800"
  />
);

export default DemoFintechPage;
