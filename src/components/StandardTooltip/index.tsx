import React, { ReactNode } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  title: ReactNode;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  children: React.ReactElement;
};

const useStylesArrow = makeStyles((theme: Theme) => ({
  tooltip: {
    position: 'relative',
    background: 'linear-gradient(309deg, #575757, #262626)',
  },
}));

export const StandardTooltip = (props: Props) => {
  const { ...classes } = useStylesArrow();

  return (
    <Tooltip classes={classes} {...props} title={<React.Fragment>{props.title}</React.Fragment>}>
      {props.children}
    </Tooltip>
  );
};
