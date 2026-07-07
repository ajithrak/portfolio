import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { HealthcareShell } from '../components/demos/healthcare/HealthcareShell';
import { HealthcareLogin } from '../components/demos/healthcare/HealthcareLogin';
import { HealthcareDashboard } from '../components/demos/healthcare/HealthcareDashboard';
import { HealthcareAppointments } from '../components/demos/healthcare/HealthcareAppointments';
import { HealthcareProfile } from '../components/demos/healthcare/HealthcareProfile';
import { HealthcareSettings } from '../components/demos/healthcare/HealthcareSettings';

const PAGES: DemoPageDef[] = [
  { key: 'login', label: 'Login', render: () => <HealthcareLogin /> },
  {
    key: 'dashboard',
    label: 'Dashboard',
    render: (navigate) => (
      <HealthcareShell active="dashboard" onNavigate={navigate}>
        <HealthcareDashboard />
      </HealthcareShell>
    ),
  },
  {
    key: 'appointments',
    label: 'Appointments',
    render: (navigate) => (
      <HealthcareShell active="appointments" onNavigate={navigate}>
        <HealthcareAppointments />
      </HealthcareShell>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    render: (navigate) => (
      <HealthcareShell active="profile" onNavigate={navigate}>
        <HealthcareProfile />
      </HealthcareShell>
    ),
  },
  {
    key: 'settings',
    label: 'Settings',
    render: (navigate) => (
      <HealthcareShell active="settings" onNavigate={navigate}>
        <HealthcareSettings />
      </HealthcareShell>
    ),
  },
];

const DemoHealthcarePage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="CareMe Health — Healthcare Template"
    description="A ready-to-use patient portal template: login, appointment booking, dashboard, and settings, reflecting the patterns built for the CareMe Health appointment platform."
    backHref="/healthcare"
    backLabel="Back to case study"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-sky-500 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-slate-800"
  />
);

export default DemoHealthcarePage;
