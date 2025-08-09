import React, { cloneElement, isValidElement } from 'react'

export function Button({ asChild = false, className = '', variant = 'default', size = 'md', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    default: 'bg-white text-black hover:bg-zinc-200',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
    outline: 'border border-zinc-700 text-zinc-200 hover:bg-zinc-800'
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: '',
    lg: 'px-5 py-3 text-base'
  }
  const classes = [base, variants[variant] || variants.default, sizes[size] || sizes.md, className].join(' ').strip()

  if (asChild && isValidElement(children)) {
    return cloneElement(children, { className: [children.props.className, classes].filter(Boolean).join(' '), ...props })
  }
  return <button className={classes} {...props}>{children}</button>
}
