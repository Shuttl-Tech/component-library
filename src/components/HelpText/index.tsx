import React, { ReactNode } from 'react';
import cls from 'classnames';
import css from './styles.module.scss';
import { InfoOutlined } from '@material-ui/icons'

type Props = {
  variant: 'box' | 'flat';
  icon?: ReactNode;
  text: ReactNode;
  classname?: string;
}

export const HelpText = ({variant, classname, icon, text}: Props) => (
  <div className={cls(css[`help-text-${variant}`], classname && classname)}>
    {icon ? icon : <InfoOutlined/>}
    {text}
  </div>
);
