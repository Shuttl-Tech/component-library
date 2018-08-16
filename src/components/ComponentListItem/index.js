import React, { Component } from 'react';
import { translate } from 'react-i18next';
import v from 'voca';

import css from './styles.module.css';

export class ComponentListItem extends Component {
	render() {
		const { t, i18n, name } = this.props;
		let id = '#' + v.snakeCase(name);

		return (
			<a href={id} className={css['list-content']}>
				<div>{name}</div>
			</a>
		)
	}
}

export default translate()(ComponentListItem);
