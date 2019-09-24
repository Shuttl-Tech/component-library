import React from 'react';
import { InPlaceTooltip } from '../src/components/InPlaceTooltip';

export default {
  title: 'InPlaceTooltip'
};

export const withTooltipOnRight = () => (
  <InPlaceTooltip value='Hello World!' absoluteValue={40} position='right' />
);

export const withTooltipOnCenter = () => (
  <InPlaceTooltip value='Hello World!' absoluteValue={40} position='center' />
);

export const TooltipYellowTheme = () => (
  <InPlaceTooltip value='Hello World!' absoluteValue={40} position='center' color={'yellow'}/>
);

export const TooltipGreenTheme = () => (
  <InPlaceTooltip value='Hello World!' absoluteValue={40} position='center' color={'green'}/>
);
