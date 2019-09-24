import React from 'react';
import cls from 'classnames';

import css from './styles.module.scss';

type Props = {
  formSteps: Array<number>;
  formStep: number;
  onStepClick: Function;
  isComplete?: boolean;
};

export const FormProgressBar = ({ formSteps, formStep, onStepClick, isComplete }: Props) => {
  const lastFormStep = formSteps.length - 1;
  const progress = Math.floor(((lastFormStep - formStep) / lastFormStep) * 100);

  return (
    <div className={cls(css.progress, isComplete && css['progress--complete'])}>
      <div
        className={css['progress-bar']}
        style={{
          transform: `translateX(-${progress}%)`,
        }}
      />
      {formSteps.map(stepIndex => {
        return (
          <div className={css['step-bubble-wrapper']} key={stepIndex} onClick={() => onStepClick(stepIndex)}>
            <div className={cls(css['step-bubble'], formStep === stepIndex && css.active)}>
              <span>{stepIndex + 1}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
