import React, { Component } from 'react';
import { translate } from 'react-i18next';
import v from 'voca';
import cls from 'classnames';

import css from './styles.module.css';

export class ComponentListItem extends Component {
	render() {
		const { name, stringName, color } = this.props;
		let id = '#' + v.snakeCase(stringName);
		let backgroundColor = '#' + color;

		return (
			<a href={id} className={cls(css['list-content'], this.props.className)}>
				<span className={css['color-bar']} style={{ backgroundColor }} />
				<div>{name}</div>
			</a>
		)
	}
}

export default translate()(ComponentListItem);
