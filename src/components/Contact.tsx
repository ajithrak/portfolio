import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface ToastState {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastState>({ show: false, type: 'success', message: '' });

  // Custom Toast helper to handle notification auto-dismissal
  const triggerToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    // Active EmailJS credentials
    const SERVICE_ID = 'service_myqre92';
    const TEMPLATE_ID = 'template_s188s8l';
    const PUBLIC_KEY = 'k4fRrwGq2tKDX2ZC5';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
      publicKey: PUBLIC_KEY,
    })
    .then(() => {
      triggerToast('success', 'Message sent successfully! I will get back to you shortly.');
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('EmailJS Dispatch Failure:', error);
      triggerToast('error', 'Failed to dispatch email. Please reach out directly via LinkedIn.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16 relative">
      
      {/* Framer Motion Toast Notifications */}
      <div className="fixed bottom-5 right-5 z-50 pointer-events-none flex flex-col gap-2">
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              className={`pointer-events-auto px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 font-medium text-sm border backdrop-blur-md max-w-md ${
                toast.type === 'success'
                  ? 'bg-emerald-50/95 border-emerald-200 text-emerald-800 dark:bg-emerald-950/90 dark:border-emerald-800 dark:text-emerald-200'
                  : 'bg-rose-50/95 border-rose-200 text-rose-800 dark:bg-rose-950/90 dark:border-rose-800 dark:text-rose-200'
              }`}
            >
              {toast.type === 'success' ? (
                <svg className="w-5 h-5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span>{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-5 gap-12"
      >
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
            I'm currently accepting selective freelance consulting workflows or core pipeline contracts. Drop me an inquiry if you want to collaborate!
          </p>
          <div className="pt-4 space-y-2 text-sm text-gray-600 dark:text-zinc-400">
            <p>📍 Location: Remote / Global Hybrid</p>
            <p>✉ Email: ajithrak22@gmail.com</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1">Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1">Email</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1">Message</label>
              <textarea 
                name="message" 
                rows={4} 
                required 
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none disabled:opacity-50" 
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 disabled:bg-indigo-600/60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Dispatching Message...</span>
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};