import React, { ReactNode } from 'react';
import classNames from 'classnames';

import css from './styles.module.scss';

export type Props = {
  className?: string;
  color?: "default" | "yellow" | "blue" | "grey";
  children: ReactNode;
};

export const Pill = ({ className, color, children }: Props) => (
  <div
    className={classNames(
      css['pill-wrapper'],
      css[`pill-wrapper--${color}`],
      'component--pill-wrapper',
      `component--pill-wrapper--${color}`,
      className
    )}
  >
    <span className={classNames(css['pill-text'], 'component--pill-text')}>{children}</span>
  </div>
);

Pill.defaultProps = {
  color: 'default',
};
