import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
// import InPlaceTooltip from '../InPlaceTooltip';

type Props = {
  steps: Array<string>;
  formStep: number;
  isComplete?: boolean | undefined;
};

const Connector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#e1e1e1',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#00adb7',
    },
  },
  line: {
    borderColor: '#e1e1e1',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

export const ProgressBar = (props: Props) => {
  const {steps, formStep, isComplete} = props;

  const stepState = (step: number, isComplete: Boolean | undefined) => {
    if (isComplete) return 'done';
    if( step < formStep ) return 'done';
    else {
      return formStep === step ? 'active' : 'inactive';
    }
  };

  return (
    <Stepper activeStep={props.formStep} connector={<Connector/>}>
      {steps.map((label: String, index: number) => {
        const state = stepState(index, isComplete);
        return (
          <Step completed={state === 'done'} active={state === 'active'}>
            <StepLabel>{''}</StepLabel>
          </Step>
          )
      })}
    </Stepper>
  )
};
