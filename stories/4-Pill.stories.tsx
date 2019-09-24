import React from 'react';
import { Pill } from 'components/Pill';

export default {
  title: 'Pill',
};

export const YellowPill = () => <Pill>Trip Feedback</Pill>;
export const BluePill = () => <Pill color={'blue'}>Customer care</Pill>;
