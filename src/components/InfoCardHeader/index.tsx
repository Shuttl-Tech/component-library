import React, { HTMLAttributes, ReactNode } from 'react';
import cls from 'classnames';
import css from './styles.module.scss';

type Props = {
  icon: ReactNode;
  headerInfo: String;
  headerDetail: String;
} & HTMLAttributes<HTMLDivElement>;

export const InfoCardHeader = ({ icon, headerInfo, headerDetail, ...props }: Props) => {
  return (
    <div {...props} className={cls(css['header-container'], props.className)}>
      <div className={css.icn}>{icon}</div>
      <div className={css['header-details']}>
        <div>{headerInfo}</div>
        <div className={css['header-detail']}>{headerDetail}</div>
      </div>
    </div>
  );
};
