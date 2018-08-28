import React, { Component } from 'react';
import cls from 'classnames';

import css from './styles.module.css';

type Props = {
	position?: string,  // left | right | center | absolute
	className?: string,
	absoluteValue?: number
}

export class InPlaceTooltip extends Component<Props> {
	render() {
		let { position = 'absolute', className = '', absoluteValue = 33 } = this.props;

		let absolutePositioningStyles = {};
		if (position === 'absolute') {
			let min = 2, max = 94; // browser tested values for the left property on the tooltip arrow
			let left = ((max - min) * (absoluteValue / 100)) + min;
			absolutePositioningStyles = {
				right: 'unset',
				left: `${left}%`
			}
		}
		return (
			<div className={cls(css.tooltip, css[`tooltip--${position}`], 'component--in-place-tooltip', `component--in-place-tooltip--${position}`, className)}>
				{this.props.children}
				<div className={cls(css.arrow, 'component--in-place-tooltip--arrow')} style={absolutePositioningStyles} />
			</div>
		);
	}
}

export default InPlaceTooltip;
