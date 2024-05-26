import { createPortal } from 'react-dom';
import classes from './Tooltip.module.css';
import React from 'react';

type Props = React.ComponentProps<'div'> & { title: string };

function Tooltip({ title, ...rest }: Props, ref: React.Ref<HTMLDivElement>) {
  return createPortal(
    <div className={classes['wrapper']} ref={ref} {...rest}>
      Edit {title}
    </div>,
    document.body,
  );
}

export const ForwardedTooltip = React.forwardRef(Tooltip);
