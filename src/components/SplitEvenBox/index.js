import React, { Component } from 'react';
import { translate } from 'react-i18next';
import cls from 'classnames';

import Box from 'components/Box';

import css from './styles.module.css';

type Props = {
	className?: string,
	direction?: string
}

export class SplitEvenBox extends Component<Props> {
	render() {
		let { direction = 'horizontal', className } = this.props; // vertical | horizontal
		return (
			<Box className={cls(css.container, direction ? css[direction] : css.horizontal, `component--split-even-box--container`, `component--split-even-box--container--${direction}`, className)}>
				{
					this.props.segments.map((segment, i) => {
						return <div key={i} className={cls(css.segment, 'component--split-even-box--segment')}>{segment}</div>;
					})
				}
			</Box>
		)
	}
}

export default translate()(SplitEvenBox);
