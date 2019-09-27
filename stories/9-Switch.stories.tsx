import React, { useState } from 'react';
import { Switch, SwitchOptions } from 'components/Switch';

export default {
  title: 'Switch',
};

const options: SwitchOptions = ['Morning', 'Evening'];

export const switchBtn = () => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  return (
    <div style={{ width: '220px' }}>
      <Switch options={options} value={selectedValue} onChange={(selectedValue) => {
        setSelectedValue(selectedValue);
      }}/>
    </div>
  );
};
