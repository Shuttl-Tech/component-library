import React, { ReactNode } from 'react';
import CircleIcon from '@material-ui/icons/PanoramaFishEye';

import css from './styles.module.scss';

export type Item = {
  icon?: ReactNode,
  content: ReactNode,
  isConnected?: boolean,
  lineStyle?: 'solid' | 'dashed'
}

export type Props = {
  data: Array<Item>
}

export const LineConnectedList = ({data}: Props) => {
  return (
    <div className={css['connected-list']}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <span className={css['label-wrapper']}>
                {item.isConnected ?
                  <>
                    <span className={css['icon-container']}>
                      {item.icon ? item.icon : <CircleIcon/>}
                    </span>
                    <span className={css['label-container']}>
                      {item.content}
                    </span>
                  </>:
                  <>
                    <span className={css['label-not-connected']}>
                      {item.content}
                    </span>
                  </>
                }
              </span>
            </div>
            {index <= data.length - 2 && (
              <div className={css.connector}>
                <div className={css['connector-line']}/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
