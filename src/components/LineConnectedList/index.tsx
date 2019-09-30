import React from 'react';
import CircleIcon from '@material-ui/icons/PanoramaFishEye';
import FilledCircleIcon from '@material-ui/icons/Lens';

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div className={'step'} style={{ display: 'block' }}>
              <span className={'label'} style={{ display: 'flex', alignItems: 'center' }}>
                <span className={'iconContainer'} style={{ display: 'flex', flexShrink: 0, paddingRight: 8 }}>
                  {item.iconStyle === 'filled' ? <FilledCircleIcon /> : <CircleIcon />}
                </span>
                <span className={'labelContainer'} style={{ width: '100%' }}>
                  {item.label}
                </span>
              </span>
            </div>
            {index <= items.length - 2 && (
              <div style={{ margin: '-2px 0 -2px 10px' }}>
                <span
                  style={{
                    minHeight: 28,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: 1,
                    display: 'block',
                    borderColor: '#bdbdbd',
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
