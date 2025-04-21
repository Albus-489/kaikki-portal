import React from 'react';
import clsx from 'clsx';

export interface GlobalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'neutral';
}

export const GlobalButton = ({
  className,
  text,
  variant = 'primary',
  ...props
}: GlobalButtonProps) => {
  const base = 'rounded transition-colors py-1 px-4 text-[var(--color-fg)]';
  const variants = {
    neutral: 'border border-[var(--color-border)] hover:border-[var(--color-accent)]',
    primary:
      'bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-accent)]',
    secondary:
      'bg-[var(--color-card)] text-[var(--color-fg)] border border-[var(--color-border)]',
    danger: 'bg-[var(--color-danger)] text-[var(--color-bg)] hover:opacity-90',
  };

  return (
    <button
      type="button"
      className={clsx(base, variants[variant], className)}
      {...props}>
      {text}
    </button>
  );
};
