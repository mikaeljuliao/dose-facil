import React from 'react';

/**
 * SkeletonLoader – reusable placeholder component used while data is loading.
 * It renders a set of shimmering blocks that match the dimensions of the target UI.
 *
 * Props:
 *   rows: number – how many rows of skeleton blocks to show (default 1)
 *   className?: string – additional Tailwind / custom classes
 */
export default function SkeletonLoader({ rows = 1, className = '' }) {
  const blocks = Array.from({ length: rows });
  return (
    <div className={`space-y-2 ${className}`}>
      {blocks.map((_, i) => (
        <div
          key={i}
          className="h-4 w-full rounded-md skeleton"
        />
      ))}
    </div>
  );
}
