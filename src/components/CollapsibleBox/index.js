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
		// if component state says it's expanded
		if (isExpanded) {
			// if component prop says it can be fully expanded
			if (expanded === 'fully') expansionStateClass = cls(css.expanded, 'component--collapsible-box--container--expanded'); // then add the expanded class
			else if (expanded === 'partially') expansionStateClass = cls(css['expanded-partially'], 'component--collapsible-box--container--expanded-partially'); // then add the expanded partially class.
		}
		else if (collapsed === 'fully') expansionStateClass = cls(css[ 'collapsed-fully' ], 'component--collapsible-box--container--collapsed-fully');

		let fullyCollapsibleClass = collapsed === 'fully' ? cls(css['fully-collapsible'], 'component--collapsible-box--container--fully-collapsible') : '';

		return (
			<ModularBox
				className={cls(css.container, fullyCollapsibleClass, expansionStateClass, className)}
				header={header}
				footer={footer}
				headerClassName={cls(headerClassName, 'component--collapsible-box--header')}
				bodyClassName={cls(css.body, expansionStateClass, bodyClassName, 'component--collapsible-box--body')}
				footerClassName={cls(collapsed === 'fully' && !isExpanded ? css['footer-no-border'] : '', footerClassName)}
			>
				{body}
			</ModularBox>
		)
	}
}

export default translate()(CollapsibleBox);
