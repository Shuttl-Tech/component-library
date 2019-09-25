import React from 'react';
import { StandardTooltip } from '../src/components/StandardTooltip';

export default {
  title: 'StandardTooltip'
};

export const withTooltipOnRight = () => (
  <StandardTooltip children={<span>Hover for tooltip</span>} placement={'right'} title={"Tooltip On Right"} />
);

export const withTooltipOnCenter = () => (
  <StandardTooltip children={<span>Hover for tooltip</span>} placement={'bottom'} title={"Tooltip On Bottom"} />
);
