import React from 'react';
import { Pill } from 'components/Pill';

export default {
  title: 'Pill',
};

export const DefaultPill = () => <Pill>Trip Feedback</Pill>;
export const YellowPill = () => <Pill color={'yellow'}>Trip Feedback</Pill>;
export const BluePill = () => <Pill color={'blue'}>Trip Feedback</Pill>;
export const GreyPill = () => <Pill color={'grey'}>Trip Feedback</Pill>;
export const WhiteBackgroundPill = () => <Pill color={'white'}>Trip Feedback</Pill>;
