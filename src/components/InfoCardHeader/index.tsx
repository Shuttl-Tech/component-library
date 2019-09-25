import React, { ReactNode } from 'react';

import css from './styles.module.scss';

type Props = {
  icon : ReactNode,
  headerInfo: String,
  headerDetail: String,
};

export const InfoCardHeader = ({icon, headerInfo, headerDetail}: Props) => {
  return (
    <div className={css['header-container']} >
      <div className={css.icn}>{icon}</div>
      <div className={css['header-details']}>
        <div>{headerInfo}</div>
        <div className={css['header-detail']}>{headerDetail}</div>
      </div>
    </div>
  )
};
