import React, { Component } from 'react';
import cls from 'classnames';

import css from './styles.module.css';

export class Box extends Component {
	render() {
		return <div className={cls(css['box'], 'component--box', this.props.className)}>{this.props.children}</div>;
	}
}

export default Box;
