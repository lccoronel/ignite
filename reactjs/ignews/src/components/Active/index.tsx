import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, cloneElement } from 'react';

interface ActiveProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function Active({ children, activeClassName, ...rest }: ActiveProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest}>
      {cloneElement(children, { className })}
    </Link>
  );
}

export default Active;