import { useState } from 'react';
import classes from './EditorFontWeight.module.css';
import { EditProps } from '../../common/type';

const fontWeight = ['bold', 'lighter', 'normal'];

type FontWeight = (typeof fontWeight)[number];

export function EditorFontWeight({ value, onChange: setFontWeight, ...rest }: EditProps) {
  const [selectedFontWeight, setSelectedFontWeight] = useState(() => {
    return value ? (value as FontWeight) : 'normal';
  });

  function onChange(value: FontWeight) {
    setSelectedFontWeight(value);
    setFontWeight?.(value);
  }

  return (
    <div className={classes['wrapper']} {...rest}>
      <span className={classes['title']}> Modify font weight </span>
      {fontWeight.map((item) => (
        <div className={classes['input']} onClick={() => onChange(item)}>
          <input
            type="radio"
            name="edit-font-weight"
            value={item}
            checked={item === selectedFontWeight}
            onChange={() => onChange(item)}
          />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
