import React from 'react';
import classes from './Templates.module.css';
import letterTemplate from '../../../public/letterTemplate.webp';
import saleTemplate from '../../../public/saleTemplate.webp';
import foodTemplate from '../../../public/foodTemplate.webp';
import { TemplateItem } from '../TemplateItem';

const templates = [
  {
    src: letterTemplate,
    key: 'letter',
    id: 1,
  },
  {
    src: saleTemplate,
    key: 'sale',
    id: 2,
  },
  {
    src: foodTemplate,
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
          return <TemplateItem key={index} src={template.src} templateId={template.id} />;
        })}
      </div>
    </div>
  );
}
