import React, { Component } from 'react';
import { translate } from 'react-i18next';
import cls from 'classnames';

import Box from 'components/Box';

import css from './styles.module.css';

type Props = {
	className?: string,
	headerClassName?: string,
	bodyClassName?: string,
	footerClassName?: string,
	header?: Component,
	footer?: Component,
	onClick?: Function
}

export class ModularBox extends Component<Props> {
	render() {
		let { header: HeaderComp, children, footer: FooterComp, className, headerClassName, bodyClassName, footerClassName, onClick } = this.props;

		let header = HeaderComp ? <div className={cls(css.header, css['box-module'], 'component--modular-box--header', 'component--modular-box--box-module', headerClassName)}><HeaderComp/></div> : '';
		let footer = FooterComp ? <div className={cls(css.footer, css['box-module'], 'component--modular-box--footer', 'component--modular-box--box-module', footerClassName)}><FooterComp/></div> : '';
		let body = <div className={cls(css.body, css['box-module'], 'component--modular-box--body', 'component--modular-box--box-module', bodyClassName)}>{children}</div>;

		return (
			<Box className={cls(css.container, className)} onClick={onClick}>
				{header}
				{body}
				{footer}
			</Box>
		)
	}
}

export default translate()(ModularBox);
