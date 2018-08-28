import React, { Component } from 'react';
import { translate } from 'react-i18next';
import cls from 'classnames';

import css from './styles.module.css';

type Props = {
	className?: string,
	id: string,
	component: Component
}

export class ComponentPreviewVisual extends Component<Props> {
	render() {
		const { id, className, component } = this.props;

		return (
			<div className={cls(css.preview, className)} id={id}>
				{component}
			</div>
		)
	}
}

export default translate()(ComponentPreviewVisual);
