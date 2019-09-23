import { configure, addParameters } from '@storybook/react';
import theme from './theme.js';

addParameters({
  options: {
    theme: theme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
