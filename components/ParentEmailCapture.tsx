'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, Loader2, X } from 'lucide-react';

interface Props {
  /** Optional context message shown above the form */
  context?: string;
  /** Called when the form is dismissed */
  onDismiss?: () => void;
  /** Style variant */
  variant?: 'inline' | 'modal';
}

type State = 'idle' | 'loading' | 'success' | 'error';

export function ParentEmailCapture({ context, onDismiss, variant = 'inline' }: Props) {
  const [email, setEmail]               = useState('');
  const [childName, setChildName]       = useState('');
  const [targetSchool, setTargetSchool] = useState('');
  const [state, setState]               = useState<State>('idle');
  const [error, setError]               = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setState('loading');
    setError('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          childName,
          targetSchool,
          source: 'parent-email-capture',
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setState('success');
    } catch (err) {
      console.error('[ParentEmailCapture]', err);
      setError('Something went wrong. Please try again.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 py-6 text-center ${variant === 'modal' ? 'px-6' : ''}`}>
        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
          <CheckCircle size={28} className="text-emerald-600" />
        </div>
        <h3 className="text-lg font-black text-slate-900">You're on the list!</h3>
        <p className="text-sm text-slate-500 max-w-xs">
          We'll be in touch with tailored 11+ resources and updates.
        </p>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="mt-2 text-sm font-bold text-indigo-600 hover:underline"
          >
            Continue
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${variant === 'modal' ? 'px-6 pb-6' : ''}`}>
      {context && <p className="text-sm text-slate-500">{context}</p>}

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 transition-colors"
        >
          <X size={16} />
        </button>
      )}

      <div className="relative">
        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
        />
      </div>

      <input
        type="text"
        placeholder="Child's first name (optional)"
        value={childName}
        onChange={(e) => setChildName(e.target.value)}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
      />

      <input
        type="text"
        placeholder="Target school (optional)"
        value={targetSchool}
        onChange={(e) => setTargetSchool(e.target.value)}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
      />

      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm rounded-xl shadow hover:scale-[1.02] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {state === 'loading' ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : (
          'Get free resources'
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        No spam. Unsubscribe any time.
      </p>
    </form>
  );
}
