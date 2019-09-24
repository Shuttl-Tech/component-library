import React, { ReactChild } from 'react';

import css from './styles.module.scss';

export const Button = ({ children, title = 'Nothing' }: { children: ReactChild; title?: string }) => (
  <div className={css.container}>
    <div>{title}</div>
    <div>{children}</div>
  </div>
);
