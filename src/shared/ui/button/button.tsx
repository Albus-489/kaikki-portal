import React from 'react';
import clsx from 'clsx';

export interface GlobalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const GlobalButton = ({
  className,
  text,
  variant = 'primary',
  ...props
}: GlobalButtonProps) => {
  const base = 'px-4 py-2 rounded transition-colors';
  const variants = {
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
