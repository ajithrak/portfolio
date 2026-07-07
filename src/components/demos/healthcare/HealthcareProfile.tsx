import React from 'react';
import { HealthcareCard } from './ui';

export const HealthcareProfile: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <span className="w-16 h-16 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xl font-bold">
        JD
      </span>
      <div>
        <h1 className="text-xl font-bold text-slate-900">Jordan Davis</h1>
        <p className="text-sm text-slate-500">Patient since Sep 2022</p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <HealthcareCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Patient details</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Email</dt>
            <dd className="text-slate-700">jordan.davis@careme.health</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Date of birth</dt>
            <dd className="text-slate-700">March 14, 1994</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Blood type</dt>
            <dd className="text-slate-700">O+</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Allergies</dt>
            <dd className="text-slate-700">Penicillin</dd>
          </div>
        </dl>
      </HealthcareCard>

      <HealthcareCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Emergency & insurance</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Emergency contact</dt>
            <dd className="text-slate-700">Sam Davis · +1 (555) 044-7712</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Insurance provider</dt>
            <dd className="text-slate-700">BlueShield PPO</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Member ID</dt>
            <dd className="text-slate-700">BS-2291-JD</dd>
          </div>
        </dl>
      </HealthcareCard>
    </div>
  </div>
);
