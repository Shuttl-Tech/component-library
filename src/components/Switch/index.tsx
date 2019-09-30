import React from 'react';
import cls from 'classnames';
import css from './styles.module.scss';

export type SwitchOptions = [string, string];

type Props = {
  value: string;
  options: SwitchOptions;
  onChange: (data: string) => void;
  className?: string;
};

export const Switch = ({ options, value, onChange, ...props }: Props) => {
  const selectedIndex = options.findIndex(opt => opt === value);

  return (
    <div {...props} className={cls(css.switchBox, props.className)}>
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className={cls(css.element, index === selectedIndex && css.selected)}
            onClick={() => onChange(option)}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};
