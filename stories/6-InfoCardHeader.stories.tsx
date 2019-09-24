import React from 'react';
import { InfoCardHeader } from 'components/InfoCardHeader';
import AddCircleOutlineRounded from '@material-ui/icons/AddCircleOutlineRounded';

export default {
  title: 'InfoCardHeader'
};

export const withIconAndDetails = () => (
  <div style={{width: '20%'}}>
  <InfoCardHeader icon={<AddCircleOutlineRounded />} headerInfo={'Ride Details'} headerDetail={'Last Taken 50 days ago'}/>
  </div>
);
