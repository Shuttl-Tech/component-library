import React, { HTMLAttributes, ReactNode } from 'react';
import cls from 'classnames';
import css from './styles.module.scss';
import { InfoOutlined } from '@material-ui/icons';

type Props = {
  variant: 'box' | 'flat';
  icon?: ReactNode;
  text: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const HelpText = ({ variant, icon, text, ...props }: Props) => (
  <div {...props} className={cls(css[`help-text-${variant}`], props.className)}>
    {icon ? icon : <InfoOutlined />}
    {text}
  </div>
);
