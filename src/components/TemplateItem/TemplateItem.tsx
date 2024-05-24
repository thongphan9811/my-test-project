import React from 'react';
import classes from './TemplateItem.module.css';
import { Link } from '@tanstack/react-router';

type Props = React.ComponentProps<'img'> & { templateId: number; key: string };

export function TemplateItem({ src, alt = 'template', ...rest }: Props): React.ReactElement {
  const url = new URL(window.location.href);
  url.pathname = '/detail';
  url.search = new URLSearchParams({
    templateId: rest.templateId.toString(),
  }).toString();

  return (
    <div className={classes['img-wrapper']} id={`parent-${rest.key}`}>
      <Link to={url.href}>
        <img className={classes['img-template']} src={src} alt={alt} {...rest} />
      </Link>
    </div>
  );
}
