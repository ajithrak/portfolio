import React from 'react';
import { HealthcareCard, AppointmentRow } from './ui';
import { APPOINTMENTS } from './data';

const METRICS = [
  { label: 'Resting heart rate', value: '68 bpm' },
  { label: 'Sleep last night', value: '7h 20m' },
  { label: 'Mood check-ins', value: '5/7 days' },
];

export const HealthcareDashboard: React.FC = () => {
  const upcoming = APPOINTMENTS.find((a) => a.status !== 'Completed');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Hi Jordan, welcome back</h1>
        <p className="text-sm text-slate-500">Here's an overview of your care journey.</p>
      </div>

      {upcoming && (
        <HealthcareCard className="border-sky-200 bg-sky-50/60">
          <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide mb-1">Upcoming appointment</p>
          <AppointmentRow appt={upcoming} />
        </HealthcareCard>
      )}

      <div className="grid sm:grid-cols-3 gap-4">
        {METRICS.map((m) => (
          <HealthcareCard key={m.label}>
            <p className="text-xs font-medium text-slate-500 mb-2">{m.label}</p>
            <p className="text-xl font-bold text-slate-900">{m.value}</p>
          </HealthcareCard>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <HealthcareCard className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">Quick actions</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <button className="p-4 rounded-lg border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors text-left">
              <p className="text-sm font-semibold text-slate-800">Book appointment</p>
              <p className="text-xs text-slate-500 mt-1">Find the next available slot</p>
            </button>
            <button className="p-4 rounded-lg border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors text-left">
              <p className="text-sm font-semibold text-slate-800">Message provider</p>
              <p className="text-xs text-slate-500 mt-1">Secure, HIPAA-compliant chat</p>
            </button>
            <button className="p-4 rounded-lg border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors text-left">
              <p className="text-sm font-semibold text-slate-800">View records</p>
              <p className="text-xs text-slate-500 mt-1">Visit summaries & prescriptions</p>
            </button>
          </div>
        </HealthcareCard>

        <HealthcareCard>
          <h2 className="text-sm font-semibold text-slate-900 mb-4">Recent activity</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>Video session with Dr. Nair completed</li>
            <li>Prescription renewed for Sertraline</li>
            <li>New message from Dr. Lee</li>
          </ul>
        </HealthcareCard>
      </div>
    </div>
  );
};
