import React, { HTMLAttributes, ReactNode } from 'react';
import cls from 'classnames';
import css from './styles.module.scss';

export type Item = {
  icon: ReactNode;
  content?: ReactNode;
  id: string;
  borderStyle: string;
};

const Item = ({
  item,
  showLeftConnector,
  showRightConnector,
  leftConnectorBorder = 'solid',
  rightConnectorBorder = 'solid',
  classes = {},
}: {
  item: Item;
  showLeftConnector: boolean;
  showRightConnector: boolean;
  leftConnectorBorder: string;
  rightConnectorBorder: string;
  classes?: {
    list?: string;
    listItem?: string;
    icon?: string;
    connector?: string;
    content?: string;
  };
}) => {
  return (
    <div className={cls(css.item, classes.listItem)}>
      <div className={cls(css.icon, classes.icon)}>
        <div
          className={cls(
            css.connector,
            classes.connector,
            !showLeftConnector && css.hide,
            css[`border-${leftConnectorBorder}`]
          )}
        />
        <div>{item.icon}</div>
        <div
          className={cls(
            css.connector,
            classes.connector,
            !showRightConnector && css.hide,
            css[`border-${rightConnectorBorder}`]
          )}
        />
      </div>
      <div className={cls(css.content, classes.content)}>{item.content}</div>
    </div>
  );
};

export type Props = HTMLAttributes<HTMLDivElement> & {
  items: Array<Item>;
  classes?: {
    list?: string;
    listItem?: string;
  };
};

export const HorizontalConnectedList = ({ items, classes = {}, ...props }: Props) => {
  return (
    <div className={cls(css.list, classes.list)} {...props}>
      {items.map((item, index) => {
        return (
          <Item
            key={item.id}
            item={item}
            classes={classes}
            showLeftConnector={index !== 0}
            showRightConnector={index !== items.length - 1}
            leftConnectorBorder={index > 0 ? items[index - 1].borderStyle : item.borderStyle}
            rightConnectorBorder={item.borderStyle}
          />
        );
      })}
    </div>
  );
};
