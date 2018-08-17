import React, { Component } from 'react';
import { translate } from 'react-i18next';

import css from './styles.module.css';

export class ComponentPreviewVisual extends Component {
	render() {
		const { id } = this.props;

		return (
			<div className={css.preview} id={id}>
				{this.props.component}
			</div>
		)
	}
}

export default translate()(ComponentPreviewVisual);
