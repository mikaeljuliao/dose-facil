import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * EmptyState – reusable UI displayed when a list or view has no data.
 * It shows an icon, a title, a description, and an optional call‑to‑action button.
 *
 * Props:
 *   title: string – headline text
 *   description: string – supportive text
 *   actionLabel?: string – label for CTA button
 *   onAction?: () => void – callback when CTA is clicked
 */
export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center pulse-glow">
      <AlertCircle className="h-12 w-12 text-slate-400" />
      <h2 className="text-xl font-black text-slate-900">{title}</h2>
      <p className="max-w-md text-sm font-medium leading-5 text-slate-600">{description}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-3 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-light"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
