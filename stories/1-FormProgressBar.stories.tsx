import React from 'react';
import { action } from '@storybook/addon-actions';

import { FormProgressBar } from 'components/FormProgressBar';

export default {
  title: 'FormProgressBar',
};

export const withCompleteSteps = () => (
  <div style={{margin: '40px'}}>
    <FormProgressBar formSteps={[0, 1, 2]} formStep={2}
                   onStepClick={action('clicked')}/>
  </div>
);

export const withOnlyOneStep = () => (
  <div style={{margin: '40px'}}>
    <FormProgressBar formSteps={[0, 1, 2]} formStep={0}
                   onStepClick={action('clicked')}/>
  </div>
);
