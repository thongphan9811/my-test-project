import classNames from 'classnames';
import { useState } from 'react';
import classes from './ModifyImage.module.css';
import { EditProps } from '../../common/type';

type IconProps = React.SVGProps<SVGSVGElement>;

function IconRectangular({ ...rest }: IconProps) {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1 1.9H1.9V30.1H22.1V1.9ZM0 0V32H24V0H0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function IconWindow({ ...rest }: IconProps) {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1 12C22.1 6.42192 17.5781 1.9 12 1.9C6.42192 1.9 1.9 6.42192 1.9 12V30.1H22.1V12ZM24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12V32H24V12Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function IconCircle({ ...rest }: IconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.9C8.21279 1.9 1.9 8.21279 1.9 16C1.9 23.7872 8.21279 30.1 16 30.1C23.7872 30.1 30.1 23.7872 30.1 16C30.1 8.21279 23.7872 1.9 16 1.9ZM16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
const ShapeProps = {
  Rectangular: 'rectangular',
  Window: 'window',
  Circle: 'circle',
};

export type Shape = (typeof ShapeProps)[keyof typeof ShapeProps];

const Icons = [
  {
    type: ShapeProps.Rectangular,
    Icon: IconRectangular,
  },
  {
    type: ShapeProps.Window,
    Icon: IconWindow,
  },
  {
    type: ShapeProps.Circle,
    Icon: IconCircle,
  },
];

export function ModifyImage({ value, onChange }: EditProps) {
  const [activeElement, setActiveElement] = useState<string | undefined>(String(value));

  function onClick(element: Shape) {
    setActiveElement(element);
    onChange?.(element);
  }

  return (
    <div>
      <div className={classes['title']}>Shape Editor</div>
      <div className={classes['wrapper']}>
        {Icons.map(({ Icon, type }, index) => (
          <div key={index} onClick={() => onClick(type)} className={classes['icon-shape']}>
            <Icon className={classNames(type === activeElement ? classes['active'] : null, classes['shape'])} />
          </div>
        ))}
      </div>
    </div>
  );
}
