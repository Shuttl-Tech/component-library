import React, { Component } from 'react';
import { translate } from 'react-i18next';
import cls from 'classnames';

import Box from 'components/Box';

import css from './styles.module.css';

export class SplitEvenBox extends Component {
	render() {
		let direction = this.props.direction; // vertical | horizontal
		return (
			<Box className={cls(css.container, direction ? css[direction] : css.horizontal, `component--split-even-box--container`, `component--split-even-box--container--${direction}`)}>
				{
					this.props.segments.map(segment => {
						return <div className={cls(css.segment, 'component--split-even-box--segment')}>{segment}</div>;
					})
				}
			</Box>
		)
	}
}

export default translate()(SplitEvenBox);
