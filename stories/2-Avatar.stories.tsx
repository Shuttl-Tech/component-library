import React from 'react';
import { Avatar } from 'components/Avatar';

export default {
  title: 'Avatar',
};

export const sizeDefault = () => <Avatar url={'https://www.w3schools.com/howto/img_avatar2.png'}/>;
export const size100px = () => <Avatar url={'https://www.w3schools.com/howto/img_avatar2.png'} size={100}/>;
export const size120px = () => <Avatar url={'https://www.w3schools.com/howto/img_avatar2.png'} size={120}/>;
