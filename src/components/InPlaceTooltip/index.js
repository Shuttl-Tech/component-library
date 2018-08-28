import React, { Component } from 'react';
import cls from 'classnames';

import css from './styles.module.css';

type Props = {
	position?: string,
	className?: string
}

export class InPlaceTooltip extends Component<Props> {
	render() {
		let { position, className = '' } = this.props;
		return (
			<div className={cls(css.tooltip, css[`tooltip--${position}`], 'component--in-place-tooltip', `component--in-place-tooltip--${position}`, className)}>
				{this.props.children}
			</div>
		);
	}
}

export default InPlaceTooltip;
