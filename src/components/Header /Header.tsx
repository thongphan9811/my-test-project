import React from 'react';
import classes from './Header.module.css';
import { Link, useLocation } from '@tanstack/react-router';

export function Header(): React.ReactElement {
  const location = useLocation();
  const isDetailPage = location.pathname === '/detail';

  return (
    <header className={classes['wrapper']}>
      <Link to="/" className={classes['Link-a-tag']}>
        <h2>{isDetailPage ? 'back to home' : 'logo'}</h2>
      </Link>
      {isDetailPage && <button className={classes['button-export']}>Export</button>}
    </header>
  );
}
