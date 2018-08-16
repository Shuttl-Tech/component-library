import React, { Component } from 'react';
import cls from 'classnames';

import css from './styles.module.css';

export class Tooltip extends Component {
	render() {
		let { position } = this.props;
		return (
			<div className={cls(css.tooltip, css[`tooltip--${position}`], 'component--tooltip', `component--tooltip--${position}`)}>
				{this.props.children}
			</div>
		);
	}
}

export default Tooltip;
