import React from 'react';
import { HealthcareCard, AppointmentRow } from './ui';
import { APPOINTMENTS } from './data';

export const HealthcareAppointments: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between flex-wrap gap-3">
      <h1 className="text-xl font-bold text-slate-900">Appointments</h1>
      <button className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors">
        Book New Appointment
      </button>
    </div>

    <HealthcareCard>
      <ul className="divide-y divide-slate-100">
        {APPOINTMENTS.map((appt) => (
          <li key={appt.id} className="py-3.5 first:pt-0 last:pb-0">
            <AppointmentRow appt={appt} />
          </li>
        ))}
      </ul>
    </HealthcareCard>
  </div>
);
