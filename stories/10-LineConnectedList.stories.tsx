import React from 'react';
import { LineConnectedList } from 'components/LineConnectedList';
import CircleIcon from '@material-ui/icons/PanoramaFishEye';
import FilledCircleIcon from '@material-ui/icons/Lens';

export default {
  title: 'LineConnectedList',
};

const ListItems = [
  {
    icon: <CircleIcon/>,
    content: 'DDA Sports Complex, Sector 10, Dwarka',
    isConnected: true,
    lineStyle: "dashed"
  },
  {
    content: 'Spaze ITech Park',
    isConnected: false
  },
  {
    icon: <CircleIcon/>,
    content: 'Hyundai Showroom',
    isConnected: true
  },
  {
    content: 'Rajiv Chowk',
    isConnected: false
  },
  {
    icon: <FilledCircleIcon/>,
    content: 'Subhash Chowk',
    isConnected: true
  },
];


export const text = () => <LineConnectedList items={ListItems}/>;
