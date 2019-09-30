import { create } from '@storybook/theming';
import ShuttlLogo from './resources/shuttl-logo.svg';

export default create({
  base: 'light',

  brandTitle: 'Shuttl',
  brandUrl: 'https://m.shuttl.com',
  brandImage: ShuttlLogo,
});
