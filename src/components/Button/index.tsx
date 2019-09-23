import React, { ReactChild } from 'react';

import css from './styles.module.scss';

const Button = ({ children }: { children: ReactChild }) => <div className={css.container}>{children}</div>;

export default Button;
