import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}
