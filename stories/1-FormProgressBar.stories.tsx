import React from 'react';
import { action } from '@storybook/addon-actions';

import { FormProgressBar } from 'components/FormProgressBar';

export default {
  title: 'FormProgressBar',
};

export const withCompleteSteps = () => (
  <FormProgressBar formSteps={[0, 1, 2]} formStep={2}
                   onStepClick={action('clicked')}/>
);

export const withOnlyOneStep = () => (
  <FormProgressBar formSteps={[0, 1, 2]} formStep={0}
                   onStepClick={action('clicked')}/>
);
