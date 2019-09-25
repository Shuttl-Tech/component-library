import React, { ReactNode, useState } from 'react';
import cls from 'classnames';

import css from './styles.module.scss';

export type FilterItem = {
  value: string;
  label: string | number;
  icon?: ReactNode;
};

type iconPlacementType = 'left' | 'right';

type OptionProps = FilterItem & {
  iconPlacement?: iconPlacementType;
  isSelected: boolean;
  onChange: (data: string) => void;
  className?: string;
};

const Option = ({ value, label, iconPlacement, icon, isSelected, onChange }: OptionProps) => (
  <div
    className={cls(css['filter-item'], iconPlacement === 'right' && css['icon-right'], isSelected && css.selected)}
    onClick={() => onChange(value)}
  >
    {icon} <span>{label}</span>
  </div>
);

export type Props = {
  iconPlacement?: iconPlacementType;
  data: Array<{
    value: string;
    label: string | number;
    icon?: ReactNode;
  }>;
  onChange: (data: Array<string>) => void;
  classes?: {
    root: string;
    option: string;
  };
};

export const Filter = ({ iconPlacement, data, onChange, classes }: Props) => {
  const [selectedFilters, setSelectedFilters] = useState([] as Array<string>);
  const setSelectedFilterValue = (data: string) => {
    if (!selectedFilters.includes(data)) {
      setSelectedFilters([...selectedFilters, data]);
      onChange([...selectedFilters, data]);
    } else {
      const updatedSelectedFilters = selectedFilters.filter(filter => filter !== data);
      setSelectedFilters(updatedSelectedFilters);
      onChange(updatedSelectedFilters);
    }
  };

  return (
    <div className={cls(css['filter-wrapper'], classes && classes.root)}>
      {data.map(option => {
        const isSelected = selectedFilters.includes(option.value);
        return (
          <Option
            key={option.value}
            {...option}
            iconPlacement={iconPlacement}
            onChange={setSelectedFilterValue}
            isSelected={isSelected}
            className={classes && classes.option}
          />
        );
      })}
    </div>
  );
};

Filter.defaultProps = {
  iconPlacement: 'left',
  classes: {
    root: '',
    option: '',
  },
};
