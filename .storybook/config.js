import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from './theme';
import './scss-loader.scss';

addParameters({
  options: {
    theme: theme,
  },
});

const styles = {
  margin: '40px',
};

const centeredDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

addDecorator(withInfo);
addDecorator(centeredDecorator);

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
