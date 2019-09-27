import React from 'react';
// import CircleIcon from '@material-ui/icons/PanoramaFishEye';
// import FilledCircleIcon from '@material-ui/icons/AccessAlarmsSharp';
import Button from '@material-ui/core/Button';

// @ts-ignore
const items = [
  {
    iconStyle: 'default',
    label: 'DDA Sports Complex, Sector 10, Dwarka',
  },
  {
    iconStyle: 'filled',
    label: 'Hyundai Showroom',
  },
  {
    iconStyle: 'default',
    label: 'Subhash Chowk',
  },
];

export const LineConnectedList = () => {
  return (
    <div>
      <div className={'step'} style={{ display: 'block' }}>
        <span className={'label'} style={{ display: 'flex', alignItems: 'center' }}>
          <span className={'iconContainer'} style={{ display: 'flex', flexShrink: 0, paddingRight: 8 }}>
            {/*{item.iconStyle === 'filled' ? <FilledCircleIcon /> : <CircleIcon />}*/}
            {/*<FilledCircleIcon />*/}
            <Button>LOL</Button>
          </span>
        </span>
      </div>
    </div>
  );
};
