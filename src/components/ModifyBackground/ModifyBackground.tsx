import { useState } from 'react';
import classes from './ModifyBackground.module.css';
import classNames from 'classnames';
import { EditProps } from '../../common/type';

const colors = ['antiquewhite', 'aquamarine', 'burlywood', 'hotpink'] as const;

type Color = (typeof colors)[number];

export function ModifyBackground({ onChange: setBackGround, value, ...rest }: EditProps) {
  const [colorActive, setColorActive] = useState<Color>(() => {
    return colors.find((color) => color === value) as Color;
  });

  function onChange(color: Color) {
    setColorActive(color);
    setBackGround?.(color);
  }

  return (
    <div className={classes['color-wrapper']} {...rest}>
      <div>
        <span className={classes['title']}>Active color</span>: {colorActive}
      </div>
      <div className={classes['color-list']}>
        {colors.map((color) => {
          return (
            <div className={classes['color-item-wrapper']}>
              <div
                className={classNames(classes['color-item'], colorActive === color && classes['active'])}
                key={color}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => onChange(color)}
              ></div>
              <div>{color}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
