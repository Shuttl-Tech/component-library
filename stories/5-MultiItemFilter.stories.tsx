import React, { useState } from 'react';
import IconOne from '@material-ui/icons/Filter1';
import IconTwo from '@material-ui/icons/Filter2';
import IconThree from '@material-ui/icons/Filter3';
import { Filter } from 'components/MultiItemFilter';

const items = [
  {
    value: 'one',
    label: 'One',
    icon: <IconOne/>,
  },
  {
    value: 'two',
    label: 'Two',
    icon: <IconTwo/>,
  },
  {
    value: 'three',
    label: 'Three',
    icon: <IconThree/>,
  }
];

export default {
  title: 'MultiItemFilter'
};

const updateListWithItem = ({data, selectedFilters}: {data: string, selectedFilters: Array<string>}) => {
  if (!selectedFilters.includes(data)) {
    return [...selectedFilters, data]
  } else {
    return selectedFilters.filter(filter => filter !== data);
  }
};

export const withoutIcon = () => {
  const [selectedFilters, setSelectedFilters] = useState([] as Array<string>);
  const setSelectedFilterValue = (data: string) => {
    setSelectedFilters(updateListWithItem({data, selectedFilters}));
  };

  return <Filter data={items.map(item => {return {value: item.value, label: item.label}})} onChange={(data) => setSelectedFilterValue(data)} selected={selectedFilters}/>
};

export const withIconLeft = () => {
  const [selectedFilters, setSelectedFilters] = useState([] as Array<string>);
  const setSelectedFilterValue = (data: string) => {
    setSelectedFilters(updateListWithItem({data, selectedFilters}));
  };
  return <Filter data={items} onChange={(data) => setSelectedFilterValue(data)} selected={selectedFilters}/>
};

export const withIconRight = () => {
  const [selectedFilters, setSelectedFilters] = useState([] as Array<string>);
  const setSelectedFilterValue = (data: string) => {
    setSelectedFilters(updateListWithItem({data, selectedFilters}));
  };

  return <Filter iconPlacement={'right'} data={items} onChange={(data) => setSelectedFilterValue(data)} selected={selectedFilters}/>
};
