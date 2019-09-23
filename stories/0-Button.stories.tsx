import React from 'react';
// import { action } from '@storybook/addon-actions';
import Button from 'components/Button';

export default {
  title: 'Button',
};

export const text = () => <Button>Hello Button</Button>;

export const emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
