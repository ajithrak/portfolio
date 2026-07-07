import React, { useState } from 'react';
import { FintechCard, FintechToggle } from './ui';

export const FintechSettings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-xl font-bold text-white">Settings</h1>

      <FintechCard>
        <h2 className="text-sm font-semibold text-white mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-200">Transaction alerts</p>
              <p className="text-xs text-slate-500">Get notified for every debit and credit</p>
            </div>
            <FintechToggle enabled={notifications} onToggle={() => setNotifications((v) => !v)} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-200">Product updates</p>
              <p className="text-xs text-slate-500">Occasional emails about new features</p>
            </div>
            <FintechToggle enabled={marketing} onToggle={() => setMarketing((v) => !v)} />
          </div>
        </div>
      </FintechCard>

      <FintechCard>
        <h2 className="text-sm font-semibold text-white mb-4">Security</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-200">Biometric login</p>
              <p className="text-xs text-slate-500">Use Face ID or fingerprint to sign in</p>
            </div>
            <FintechToggle enabled={biometrics} onToggle={() => setBiometrics((v) => !v)} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-200">Change password</p>
            <button className="text-xs font-semibold text-teal-400 hover:text-teal-300">Update</button>
          </div>
        </div>
      </FintechCard>

      <FintechCard>
        <h2 className="text-sm font-semibold text-white mb-4">Preferences</h2>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-200">Currency</span>
          <span className="text-slate-400">USD ($)</span>
        </div>
      </FintechCard>
    </div>
  );
};
