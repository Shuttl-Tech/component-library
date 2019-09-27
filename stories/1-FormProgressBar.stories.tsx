import React from 'react';
// import { action } from '@storybook/addon-actions';

import { ProgressBar } from 'components/ProgressBar';

export default {
  title: 'FormProgressBar',
};

export const withCompleteSteps = () => (
    <ProgressBar steps={['Step 1', 'Step 2', 'Step 3']} formStep={2} isComplete={true}
                   />
);

export const withOnlyOneStep = () => (
    <ProgressBar steps={['Step 1', 'Step 2', 'Step 3']} formStep={0}
                   />
);
