import React, { Component } from 'react';
import { translate } from 'react-i18next';
import v from 'voca';
import cls from 'classnames';

import css from './styles.module.css';

type Props = {
	className?: string,
	name: string,
	stringName: string,
	color?: string,
	key: number
}

export class ComponentListItem extends Component<Props> {
	render() {
		const { name, stringName, color = 'f00', className = '', key } = this.props;
		let id = '#' + v.snakeCase(stringName);
		let backgroundColor = '#' + color;

		return (
			<a href={id} key={key} className={cls(css['list-content'], className)}>
				<span className={css['color-bar']} style={{ backgroundColor }} />
				<div>{name}</div>
			</a>
		)
	}
}

export default translate()(ComponentListItem);
