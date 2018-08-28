import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import css from './styles.module.css';

type Props = {
	className?: string,
	color?: string
}

export class GenericPill extends Component<Props> {
	render() {
		let { color = 'yellow', className = '' } = this.props;
		return (
			<div className={classNames(css['pill-wrapper'], css[`pill-wrapper--${color}`], 'component--pill-wrapper', `component--pill-wrapper--${color}`, className)}>
				<span className={classNames(css['pill-text'], 'component--pill-text')}>{this.props.children}</span>
			</div>
		)
	}
}

export default translate()(GenericPill);
