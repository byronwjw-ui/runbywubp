'use client';

import Link from 'next/link';
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics';

type Variant = 'primary' | 'ghost' | 'default';

type CommonProps = {
  variant?: Variant;
  block?: boolean;
  className?: string;
  children: React.ReactNode;
  trackEventName?: AnalyticsEvent | string;
  trackProps?: Record<string, unknown>;
};

type LinkProps = CommonProps & { href: string; onClick?: never; type?: never };
type BtnProps  = CommonProps & { href?: undefined; onClick?: () => void; type?: 'button' | 'submit' };

export function Button(props: LinkProps | BtnProps) {
  const { variant = 'default', block, className = '', children, trackEventName, trackProps } = props;
  const classes = [
    'btn',
    variant === 'primary' ? 'btn-primary' : '',
    variant === 'ghost' ? 'btn-ghost' : '',
    block ? 'btn-block' : '',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (trackEventName) trackEvent(trackEventName, trackProps || {});
    if ('onClick' in props && props.onClick) props.onClick();
  };

  if ('href' in props && props.href) {
    const isExternal = /^https?:\/\//i.test(props.href);
    if (isExternal) {
      return (
        <a href={props.href} className={classes} onClick={handleClick} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type || 'button'} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}
