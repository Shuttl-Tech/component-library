import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';

import theme from './theme';
import './scss-loader.scss';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { shuttlCyan, ShuttlTheme } from 'components/ShuttlTheme';

addParameters({
  options: {
    theme: theme,
  },
  backgrounds: [
    { name: 'Base', value: '#fff', default: true },
    { name: 'Pale Gray', value: '#f8f8f8' },
    { name: 'Dark Grey', value: '#555' },
    { name: 'Pale Blue', value: '#a0ddff' },
    { name: 'Pale Yellow', value: '#ffe998' },
    { name: 'Pale Green', value: '#c1ffab' },
    { name: 'Shuttl Default', value: shuttlCyan[500] },
  ],
});

const styles = {
  margin: '40px',
};

const componentWrapperDecorator = (storyFn: () => React.ReactNode) => (
  <MuiThemeProvider theme={ShuttlTheme}>
    <div style={styles}>{storyFn()}</div>
  </MuiThemeProvider>
);

addDecorator(withInfo as any);
addDecorator(componentWrapperDecorator);
addDecorator(withKnobs);

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
