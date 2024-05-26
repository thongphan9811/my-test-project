import React from 'react';
import classes from './Header.module.css';
import { Link, useLocation } from '@tanstack/react-router';
import html2canvas from 'html2canvas';
import { createLinkAndDownloadFile } from '../../common/exportFile';

export function Header(): React.ReactElement {
  const location = useLocation();
  const isDetailPage = location.pathname === '/detail';

  async function exportFile() {
    const element = document.getElementById('template-export');
    const canvas = await html2canvas(element as HTMLElement);
    const img = canvas.toDataURL().replace('image/jpeg', 'image/octet-stream');
    createLinkAndDownloadFile(img, 'template.jpeg');
  }

  return (
    <header className={classes['wrapper']}>
      <Link to="/" className={classes['Link-a-tag']}>
        <h2>{isDetailPage ? 'back to home' : 'logo'}</h2>
      </Link>
      {isDetailPage && (
        <button onClick={exportFile} className={classes['button-export']}>
          Export
        </button>
      )}
    </header>
  );
}
