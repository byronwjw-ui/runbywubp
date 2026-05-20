import * as React from 'react';

export function DisclaimerBlock({
  variant = 'warning',
  title,
  children,
}: {
  variant?: 'warning' | 'danger' | 'info';
  title?: string;
  children: React.ReactNode;
}) {
  const cls = variant === 'danger' ? 'note danger' : variant === 'info' ? 'note' : 'note warning';
  return (
    <div className={cls}>
      {title && <strong style={{ display: 'block', marginBottom: 6 }}>{title}</strong>}
      {children}
    </div>
  );
}
