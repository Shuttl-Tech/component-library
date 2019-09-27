import React, { HTMLAttributes } from 'react';
import cls from 'classnames';

import css from './styles.module.scss';

type Props = {
  position?: string; // left | right | center | absolute
  className?: string;
  absoluteValue?: number;
  value: any;
  color?: 'yellow' | 'green';
} & HTMLAttributes<HTMLDivElement>;

export const InPlaceTooltip = ({
  position = 'absolute',
  className,
  absoluteValue = 33,
  value,
  color,
  ...props
}: Props) => {
  let absolutePositioningStyles = {};
  if (position === 'absolute') {
    let min = 2,
      max = 94; // browser tested values for the left property on the tooltip arrow
    let left = (max - min) * (absoluteValue / 100) + min;
    absolutePositioningStyles = {
      right: 'unset',
      left: `${left}%`,
    };
  }
  return (
    <div
      className={cls(
        css.tooltip,
        color && css[`tooltip--${color}`],
        css[`tooltip--${position}`],
        'component--in-place-tooltip',
        `component--in-place-tooltip--${position}`,
        className
      )}
      {...props}
    >
      {value}
      <div className={cls(css.arrow, 'component--in-place-tooltip--arrow')} style={absolutePositioningStyles} />
    </div>
  );
};

export default InPlaceTooltip;
