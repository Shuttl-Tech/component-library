import React, { ReactNode } from 'react';
import cls from 'classnames';
import CircleIcon from '@material-ui/icons/PanoramaFishEye';

import css from './styles.module.scss';

export type Item = {
  icon?: ReactNode,
  content: ReactNode,
  isConnected?: boolean,
  lineStyle?: string
}

export type Props = {
  items: Array<Item>,
  classes?: {
    root?: string,
    labelWrapper?: string,
    labelNotConnected?: string,
    icon?: string,
    label?: string,
    connectorRoot?: string,
    connecterLine?: string
  }
}

export const LineConnectedList = ({items, classes = {}}: Props) => {
  return (
    <div className={cls(css['connected-list'], classes.root)}>
      {items.map((item, index) => {
        const isLastItem = index == items.length - 1;
        return (
          <div key={index}>
            <div>
              <span className={cls(css['label-wrapper'], classes.labelWrapper)}>
                {item.isConnected ?
                  <>
                    <span className={cls(css['icon-container'], classes.icon)}>
                      {item.icon ? item.icon : <CircleIcon/>}
                    </span>
                    <span className={cls(css['label-container'], classes.label)}>
                      {item.content}
                    </span>
                  </>:
                  <>
                    <span className={cls(css['label-not-connected'], classes.labelNotConnected, css['border-left-dashed'])}>
                      {item.content}
                    </span>
                  </>
                }
              </span>
            </div>
            {!isLastItem && (
              <div className={cls(css.connector, classes.connectorRoot)}>
                <div className={cls(css['connector-line'], classes.connecterLine, css['border-left-dashed'])}/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
