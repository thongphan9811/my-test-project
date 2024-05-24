import React from 'react';
import classes from './Templates.module.css';
import { TemplateItem } from '../TemplateItem';

const templates = [
  {
    src: new URL('./letterTemplate.webp', window.location.href).href,
    key: 'letter',
    id: 1,
  },
  {
    src: new URL('./saleTemplate.webp', window.location.href).href,
    key: 'sale',
    id: 2,
  },
  {
    src: new URL('./foodTemplate.webp', window.location.href).href,
    key: 'food',
    id: 3,
  },
];

export function Templates(): React.ReactElement {
  return (
    <div className={classes['container']}>
      <h2 className={classes['title']}>Choose a template to start</h2>
      <div className={classes['list-wrapper']}>
        {templates.map((template, index) => {
          return <TemplateItem key={String(index)} src={template.src} templateId={template.id} />;
        })}
      </div>
    </div>
  );
}
