import * as React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary';
}

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold';
  const variantClasses =
    variant === 'secondary'
      ? 'bg-white/10 text-white'
      : 'bg-yellow-400 text-black';

  return <div className={`${base} ${variantClasses} ${className}`} {...props} />;
}