import { useState } from 'react';
import classes from './ModifyBackground.module.css';
import classNames from 'classnames';

const colors = ['antiquewhite', 'aquamarine', 'burlywood', 'hotpink'] as const;

type Color = (typeof colors)[number];

type ModifyBackgroundProps = {
  value: string;
  setBackGround?: (color: string) => void;
};

export function ModifyBackground({ setBackGround }: ModifyBackgroundProps) {
  const [colorActive, setColorActive] = useState<Color>(colors[0]);

  function onChange(color: Color) {
    setColorActive(color);
    setBackGround?.(color);
  }

  return (
    <div className={classes['color-wrapper']}>
      <div className={classes['color-list']}>
        {colors.map((color) => {
          return (
            <div
              className={classNames(classes['color-item'], colorActive === color && classes['active'])}
              key={color}
              style={{
                backgroundColor: color,
              }}
              onClick={() => onChange(color)}
            ></div>
          );
        })}
      </div>

      <div>
        <span className={classes['title']}>Active color</span>: {colorActive}
      </div>
    </div>
  );
}
