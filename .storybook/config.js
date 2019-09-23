import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from './theme';

addParameters({
  options: {
    theme: theme,
  },
});

addDecorator(withInfo);

configure(require.context('../stories', true, /\.stories\.tsx$/), module);

