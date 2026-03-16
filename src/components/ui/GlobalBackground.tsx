import React, { memo } from 'react';

export const GlobalBackground = memo(() => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Soft color blobs — no blur, GPU-friendly */}
    <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] bg-secondary/8 rounded-full opacity-60" />
    <div className="absolute top-[30%] -right-[15%] w-[45vw] h-[45vw] bg-primary/5 rounded-full opacity-50" />
    <div className="absolute -bottom-[15%] left-[25%] w-[40vw] h-[40vw] bg-secondary/6 rounded-full opacity-40" />

    {/* Subtle grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
  </div>
));
