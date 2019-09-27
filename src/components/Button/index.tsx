import React, { HTMLAttributes, ReactChild } from 'react';
import cls from 'classnames';

import css from './styles.module.scss';

type Props = { children: ReactChild } & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => (
  <button {...props} className={cls(css.container, props.className)}>
    {children}
  </button>
);
