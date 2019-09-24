import React from 'react';
import cls from 'classnames';

import css from './styles.module.scss';

export type AvatarProps = {
  url: string;
  size?: number;
  className?: string;
};

export const Avatar = ({ url, size, className }: AvatarProps) => (
  <div className={cls(css.avatar, className)} style={{ height: size, width: size }}>
    <img src={url} alt={'avatar'} />
  </div>
);

Avatar.defaultProps = {
  size: 80,
};
