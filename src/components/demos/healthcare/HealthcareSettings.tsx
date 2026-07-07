import React, { useState } from 'react';
import { HealthcareCard, HealthcareToggle } from './ui';

export const HealthcareSettings: React.FC = () => {
  const [reminders, setReminders] = useState(true);
  const [messages, setMessages] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-xl font-bold text-slate-900">Settings</h1>

      <HealthcareCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-800">Appointment reminders</p>
              <p className="text-xs text-slate-500">Get a reminder 24 hours before each session</p>
            </div>
            <HealthcareToggle enabled={reminders} onToggle={() => setReminders((v) => !v)} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-800">Provider messages</p>
              <p className="text-xs text-slate-500">Notify me when a provider sends a message</p>
            </div>
            <HealthcareToggle enabled={messages} onToggle={() => setMessages((v) => !v)} />
          </div>
        </div>
      </HealthcareCard>

      <HealthcareCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Privacy</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-800">Share data for research</p>
            <p className="text-xs text-slate-500">Anonymized data helps improve care outcomes</p>
          </div>
          <HealthcareToggle enabled={dataSharing} onToggle={() => setDataSharing((v) => !v)} />
        </div>
      </HealthcareCard>

      <HealthcareCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Account</h2>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-800">Change password</span>
          <button className="text-xs font-semibold text-sky-600 hover:text-sky-700">Update</button>
        </div>
      </HealthcareCard>
    </div>
  );
};
