import React from 'react';
import { HorizontalConnectedList } from 'components/HorizontalConnectedList';
import CircleIcon from '@material-ui/icons/PanoramaFishEye';

export default {
  title: 'HorizontalConnectedList',
};

const iconStyle={
  height: 48,
  width: 48,
  backgroundColor: '#e6e6e6',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 16,
  color: '#4d4d4d',
  fontWeight: 800
};

const ListItems = [
  {
    borderStyle: 'solid',
    icon: <div style={iconStyle}>3</div>,
    content: <h4>REPORTED</h4>,
    id: '23f55dg'
  },
  {
    icon: <CircleIcon/>,
    content: <><h5>11</h5><p>In transit</p></>,
    id: '2e3fd523g',
    borderStyle: 'dashed',
  },
  {
    borderStyle: 'dashed',
    icon: <div style={iconStyle}>12</div>,
    content: <h4>REACHED</h4>,
    id: '23f432dg'
  },
  {
    icon: <CircleIcon/>,
    content: 'DDA Sports Complex, Sector 10, Dwarka',
    id: 'vv23f43dg',
    borderStyle: 'dashed',
  },
  {
    borderStyle: 'solid',
    icon: <div style={iconStyle}>24</div>,
    content: <h4>STARTED</h4>,
    id: '23fdyhtrg'
  },
  {
    icon: <CircleIcon/>,
    content: 'DDA Sports Complex, Sector 10, Dwarka',
    id: 'vv23fthrdg',
    borderStyle: 'solid',
  },
  {
    borderStyle: 'solid',
    icon: <div style={iconStyle}>6</div>,
    content: <h4>ENDED</h4>,
    id: '23fhgfbndg'
  }
];


export const SampleVehiclesOverview = () => <HorizontalConnectedList items={ListItems}/>;
