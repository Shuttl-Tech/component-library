import React from 'react';
import { HelpText } from 'components/HelpText';

export default {
  title: 'HelpText',
};

export const boxHelpText = () => (
  <div style={{ width: '220px' }}>
    <HelpText variant={'box'} text={'Drop Stop is more then 15kms away from traffic'}/>
  </div>
);

export const flatHelpText = () => (
  <div style={{ width: '220px' }}>
    <HelpText variant={'flat'} text={'Please Note: Payments can be done using all debit/credit cards'}/>
  </div>
);
