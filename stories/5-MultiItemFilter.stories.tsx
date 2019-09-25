import React from 'react';
import MorningIcon from '@material-ui/icons/TodayOutlined';
import EveningIcon from '@material-ui/icons/Brightness3';
import ACIcon from '@material-ui/icons/Label';
import { Filter } from 'components/MultiItemFilter';
import { action } from '@storybook/addon-actions';

const items = [
  {
    value: 'morning',
    label: 'Morning',
    icon: <MorningIcon/>,
  },
  {
    value: 'evening',
    label: 'Evening',
    icon: <EveningIcon/>,
  },
  {
    value: 'ac',
    label: 'AC',
    icon: <ACIcon/>,
  }
];

export default {
  title: 'MultiItemFilter'
};

export const withIconAndDetails = () => (
  <Filter data={items} onChange={action('clicked')}/>
);

export const withIconRight = () => (
  <Filter iconPlacement={'right'} data={items} onChange={action('clicked')}/>
);
