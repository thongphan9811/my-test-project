import React from 'react';
import classes from './Layout.module.css';
import classNames from 'classnames';
import { Header } from '../Header ';

type Props = React.ComponentPropsWithRef<'div'>;

export function Layout({ children, className, ...rest }: Props): React.ReactElement {
  return (
    <main className={classNames(classes['main-layout'], className)} {...rest}>
      <Header></Header>
      <div className={classes['container']}>{children}</div>
    </main>
  );
}
