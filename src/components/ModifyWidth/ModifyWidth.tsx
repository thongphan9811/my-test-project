import React, { useState } from 'react';
import classes from './ModifyWidth.module.css';
import { EditProps } from '../../common/type';

const WIDTH_DEFAULT = 50;
const FALLBACK_WIDTH = 0;
const MIN_WIDTH = 200;
const MAX_WIDTH = 500;

export function ModifyWidth({ value = 200, onChange: setWidthControl }: EditProps) {
  const [width, setWidth] = useState(value);
  const ref = React.useRef(Number(value));

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWidth(Number(event.target.value));
    setWidthControl?.(event.target.value);
  }

  const minWidth = value ? Math.max(ref.current - WIDTH_DEFAULT, FALLBACK_WIDTH) : MIN_WIDTH;
  const maxWidth = value ? Math.max(ref.current + WIDTH_DEFAULT, FALLBACK_WIDTH) : MAX_WIDTH;

  return (
    <div className={classes['input-wrapper']}>
      <div>
        <span className={classes['title-input']}>size </span>: {width}
      </div>
      <div className={classes['input-size']}>
        <span>-</span>
        <input type="range" value={value} min={minWidth} max={maxWidth} onChange={onChange}></input>
        <span>+</span>
      </div>
    </div>
  );
}
