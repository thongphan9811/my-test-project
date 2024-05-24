import React, { useState } from 'react';
import classes from './ModifyWidth.module.css';

export type ModifyWidthProps = {
  value?: number;
  setWidth: (width: number) => void;
};

export type PropsModify = React.ComponentProps<'div'> & ModifyWidthProps;

const WIDTH_DEFAULT = 50;
const FALLBACK_WIDTH = 0;
const MIN_WIDTH = 200;
const MAX_WIDTH = 500;

export function ModifyWidth({ value = 200, setWidth: setWidthControl }: Props) {
  const [width, setWidth] = useState(value);
  const ref = React.useRef<number>(value);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setWidth(Number(event.target.value));
    setWidthControl?.(Number(event.target.value));
  }

  const minWidth = value ? Math.max(ref.current - WIDTH_DEFAULT, FALLBACK_WIDTH) : MIN_WIDTH;
  const maxWidth = value ? Math.max(ref.current + WIDTH_DEFAULT, FALLBACK_WIDTH) : MAX_WIDTH;

  return (
    <div className={classes['input-wrapper']}>
      <input type="range" value={value} min={minWidth} max={maxWidth} onChange={onChange}></input>

      <div>
        <span className={classes['title-input']}>Width </span>: {width}
      </div>
    </div>
  );
}
