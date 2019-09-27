import React from 'react';
import { Button } from 'components/Button';

export default {
  title: 'Button',
};

export const text = () => <Button>Hello Button</Button>;

export const fillAvailableSpace = () => <Button style={{ width: '100%' }}>Limited Width Button</Button>;

export const emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
