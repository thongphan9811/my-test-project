import React from 'react';
import classes from './Header.module.css';

export function Header(): React.ReactElement {
  return (
    <header className={classes['wrapper']}>
      <h1>logo</h1>
      <button className={classes['button-export']}>Export</button>
    </header>
  );
}
