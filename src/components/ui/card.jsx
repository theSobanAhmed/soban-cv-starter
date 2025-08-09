import React from 'react'

export function Card({ className = '', children }) {
  return <div className={['rounded-2xl border', 'border-zinc-800', 'bg-zinc-900/60', className].join(' ')}>{children}</div>
}

export function CardContent({ className = '', children }) {
  return <div className={['p-4', className].join(' ')}>{children}</div>
}
