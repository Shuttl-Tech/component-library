import React, { Component } from 'react';
import cls from 'classnames';

import css from './styles.module.css';

export class InPlaceTooltip extends Component {
	render() {
		let { position } = this.props;
		return (
			<div className={cls(css.tooltip, css[`tooltip--${position}`], 'component--in-place-tooltip', `component--in-place-tooltip--${position}`)}>
				{this.props.children}
			</div>
		);
	}
}

export default InPlaceTooltip;
