import React, { useState } from 'react';
import ReactSelectMaterialUi, { ColorsSelect, MultipleSelect, TagsSelect } from 'react-select-material-ui';

export default {
  title: 'Select - 3rd Party',
};

const options: string[] = ["Africa", "America", "Asia", "Europe"];

export const SimpleSelect = () => {
  const [value, setValue] = useState(options[0]);

  return (
    <ReactSelectMaterialUi style={{ width: 100 }} value={value} options={options} onChange={setValue} />
  );
};

export const MultiSelect = () => {
  const [value, setValue] = useState([options[0], options[1]]);

  return (
    <MultipleSelect
      label="Please select..."
      values={value}
      options={options}
      helperText="You can add a new city by writing its name and pressing enter"
      onChange={setValue}
      SelectProps={{
        isCreatable: true,
        msgNoOptionsAvailable: "All continents are selected",
        msgNoOptionsMatchFilter: "No continent name matches the filter"
      }}
    />
  );
};

export const TagSelect = () => {
  const [value, setValue] = useState([options[0], options[1]]);

  return (
    <TagsSelect
      label="Please select..."
      options={options}
      onChange={setValue}
      values={value}
      SelectProps={{
        isCreatable: true,
        msgNoOptionsAvailable: "All continents are selected",
        msgNoOptionsMatchFilter: "No continent matches the filter"
      }}
    />
  );
};

const colors: string[] = ["red", "#123456", "yellow", "#fedcba"];
export const ColorSelect = () => {
  const [value, setValue] = useState([colors[0], colors[1]]);

  return (
    <ColorsSelect
      label="Colors"
      options={colors}
      values={value}
      helperText="You can add a new color as long as it is a valid HTML color"
      onChange={setValue}
      SelectProps={{
        isCreatable: true
      }}
    />
  );
};
