import React, { Component } from 'react';
import cls from 'classnames';

import css from './styles.module.css';

type Props = {
	className?: string,
	onClick?: Function
}

export class Box extends Component<Props> {
	render() {
		let { className, onClick } = this.props;
		return <div
			className={cls(css['box'], 'component--box', className)}
			onClick={onClick}
		>{this.props.children}</div>;
	}
}

export default Box;
