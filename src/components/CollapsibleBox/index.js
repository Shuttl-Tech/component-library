import React, { Component } from 'react';
import { translate } from 'react-i18next';
import cls from 'classnames';

import ModularBox from 'components/ModularBox';

import css from './styles.module.css';

type Props = {
	className?: string,
	expanded?: string,
	collapsed?: string,
	header?: string,
	footer?: string,
	headerClassName?: string,
	bodyClassName?: string,
	footerClassName?: string
}

export class CollapsibleBox extends Component<Props> {
	constructor() {
		super();

		this.state = {
			isExpanded: false
		}
	}

	toggleExpansion() {
		this.setState({ isExpanded: !this.state.isExpanded });
	}

	render() {
		/**
		 * mode: fully | partially
		 * collapsed: fully | partially
		 */
		let { header, children: body, footer, expanded = 'partially', collapsed = 'partially', headerClassName, bodyClassName, footerClassName, className } = this.props;
		let { isExpanded } = this.state;

		footer = <div className={cls('component--collapsible-box--footer')} onClick={() => this.toggleExpansion()}>{footer}</div>;

		let expansionStateClass;
		if (isExpanded) {
			if (expanded === 'fully') expansionStateClass = css.expanded;
			else if (expanded === 'partially') expansionStateClass = css['expanded-partially'];
		}
		else if (collapsed === 'fully') expansionStateClass = css[ 'collapsed-fully' ];

		return (
			<ModularBox
				className={cls(css.container, collapsed === 'fully' ? css['fully-collapsible'] : '', expansionStateClass, className)}
				header={header}
				footer={footer}
				headerClassName={headerClassName}
				bodyClassName={cls(css.body, expansionStateClass, bodyClassName)}
				footerClassName={cls(collapsed === 'fully' && !isExpanded ? css['footer-no-border'] : '', footerClassName)}
			>
				{body}
			</ModularBox>
		)
	}
}

export default translate()(CollapsibleBox);
