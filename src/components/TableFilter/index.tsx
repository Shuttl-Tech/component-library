import React from 'react';
import FilterIcon from '@material-ui/icons/FilterList';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

import css from './styles.module.scss';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import { ID, Omit } from 'types';
import { SelectProps } from '@material-ui/core/Select';

export type TableFilterOption = { id: ID; name: string };

export type TableFilterProps = Omit<SelectProps, 'onChange'> & {
  value: Array<ID>;
  filterOptions: Array<TableFilterOption>;
  onChange: (value: any) => void;
  id: ID;
};

const TableFilter = ({ value, filterOptions = [], onChange = () => {}, id, ...selectProps }: TableFilterProps) => (
  <div className={css['head-filter']}>
    <FilterIcon className={css['filter-icon']} />
    <Select
      multiple
      className={css['filter-select']}
      classes={{
        root: css['select-root'],
      }}
      SelectDisplayProps={{
        className: css['select-internal'],
      }}
      value={value}
      onChange={e => onChange(e.target.value)}
      input={<Input id={`select-multiple-checkbox-${id}`} />}
      renderValue={value => {
        const { length } = value as Array<TableFilterOption>;
        return (
          <div className={css['head-filter-target']}>
            <Tooltip title={length > 1 ? `${length} items have been selected` : '1 item has been selected'}>
              <div className={css['filter-count']}>{length}</div>
            </Tooltip>
          </div>
        );
      }}
      {...selectProps}
    >
      {filterOptions.map(({ id, name }) => (
        <MenuItem key={id} value={id}>
          <Checkbox checked={value.indexOf(id) > -1} />
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </Select>
  </div>
);

export default TableFilter;
