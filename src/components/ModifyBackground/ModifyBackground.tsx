import { useState } from 'react';
import classes from './ModifyBackground.module.css';
import classNames from 'classnames';

const colors = ['antiquewhite', 'aquamarine', 'burlywood', 'hotpink'] as const;

type Color = (typeof colors)[number];

type ModifyBackgroundProps = {
  value: string;
  setBackGround?: (color: string) => void;
};

export type ModifyBackgroundComposeProps = React.ComponentProps<'div'> & ModifyBackgroundProps;

export function ModifyBackground({ setBackGround, value, ...rest }: ModifyBackgroundComposeProps) {
  const [colorActive, setColorActive] = useState<Color>(() => {
    return colors.find((color) => color === value) as Color;
  });

  function onChange(color: Color) {
    setColorActive(color);
    setBackGround?.(color);
  }

  return (
    <div className={classes['color-wrapper']} {...rest}>
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
