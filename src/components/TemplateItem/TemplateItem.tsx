import React from 'react';
import classes from './TemplateItem.module.css';
import { Link } from '@tanstack/react-router';

type Props = React.ComponentProps<'img'> & { templateId: number; title: string };

export function TemplateItem({ src, alt = 'template', title, ...rest }: Props): React.ReactElement {
  return (
    <div className={classes['img-wrapper']} id={`parent-${rest.key}`}>
      <Link to={'/detail'} search={{ templateId: rest.templateId }} className={classes['link-to-detail']}>
        <img className={classes['img-template']} src={src} alt={alt} {...rest} />
        <div className={classes['overlay']}>
          <span> preview template</span>
        </div>
      </Link>
      <div className={classes['title-template']}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
