import React, { ReactNode } from 'react';
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
  onChange: (data: string) => void;
  selected: (string | undefined)[];
  classes?: {
    root: string;
    option: string;
  };
};

export const Filter = ({ iconPlacement, data, onChange, selected, classes }: Props) => {
  return (
    <div className={cls(css['filter-wrapper'], classes && classes.root)}>
      {data.map(option => {
        const isSelected = selected.includes(option.value);
        return (
          <Option
            key={option.value}
            {...option}
            iconPlacement={iconPlacement}
            onChange={onChange}
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
  selected: [],
};
