import React, { Component } from 'react';
import cls from 'classnames';

import css from './styles.module.css';

type Props = {
	className?: string
}

export class Box extends Component<Props> {
	render() {
		return <div className={cls(css['box'], 'component--box', this.props.className)}>{this.props.children}</div>;
	}
}

export default Box;
