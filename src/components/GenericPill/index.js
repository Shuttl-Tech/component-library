import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import css from './styles.module.css';

export class GenericPill extends Component {
	render() {
		let color = this.props.color || 'yellow';
		return (
			<div className={classNames(css['pill-wrapper'], css[`pill-wrapper--${color}`], 'component--pill-wrapper', `component--pill-wrapper--${color}`)}>
				<span className={classNames(css['pill-text'], 'component--pill-text')}>{this.props.children}</span>
			</div>
		)
	}
}

export default translate()(GenericPill);
