import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from './theme';
import './scss-loader.scss';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ShuttlTheme } from 'components/ShuttlTheme';

addParameters({
  options: {
    theme: theme,
  },
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

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
