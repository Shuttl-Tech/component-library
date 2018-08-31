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
	footerClassName?: string,
	onClick?: Function,
	onOpen?: Function,
	onClose?: Function
}

export class CollapsibleBox extends Component<Props> {
	constructor() {
		super();

		this.state = {
			isExpanded: false
		}
	}

	toggleExpansion(...args) {
		let { onOpen = () => {}, onClose = () => {} } = this.props;
		let { isExpanded } = this.state;
		isExpanded = !isExpanded;

		this.setState({ isExpanded });

		if (isExpanded) onOpen(...args);
		else onClose(...args);
	}

	render() {
		/**
		 * expanded: fully | partially
		 * collapsed: fully | partially
		 *
		 * component states:
		 * 1. fully expanded - `expanded` - body at full content height
		 * 2. partially expanded - `expanded-partially` - body at limited content height, content is scrollable
		 * 3. fully collapsed - `collapsed` - body not visible
		 * 4. partially collapsed - no classname - body at limited content height, content is scrollable
		 *
		 * Note:
		 * The partially collapsed state is useful when the expansion state toggles between partially expanded and fully expanded.
		 * Since the component must have two states, expanded and collapsed, it's useful to have a partially-collapsed to fully-expanded state.
		 */
		let { header, children: body, footer: FooterComp, expanded = 'partially', collapsed = 'partially', headerClassName, bodyClassName, footerClassName, className, onClick = () => {} } = this.props;
		let { isExpanded } = this.state;

		let expansionStateClass;
		// if component state says it's expanded
		if (isExpanded) {
			// if component prop says it can be fully expanded
			if (expanded === 'fully') {
				expansionStateClass = cls(css.expanded, 'component--collapsible-box--container--expanded');
				bodyClassName = cls(bodyClassName, css.expanded, 'component--collapsible-box--body--expanded');
			} // then add the expanded class
			else if (expanded === 'partially') {
				expansionStateClass = cls(css['expanded-partially'], 'component--collapsible-box--container--expanded-partially');
				bodyClassName = cls(bodyClassName, css['expanded-partially'], 'component--collapsible-box--body--expanded-partially');
			} // then add the expanded partially class.
		}
		// if component state says it's not expanded
		else {
			// if component prop says it can be fully collapsed
			if (collapsed === 'fully') {
				expansionStateClass = cls(css.collapsed, 'component--collapsible-box--container--collapsed');
				bodyClassName = cls(bodyClassName, css.collapsed, 'component--collapsible-box--body--collapsed');
			} // make it fully collapsed
			else if (collapsed === 'partially') {
				expansionStateClass = cls(css['collapsed-partially'], 'component--collapsible-box--container--collapsed-partially');
				bodyClassName = cls(bodyClassName, css['collapsed-partially'], 'component--collapsible-box--body--collapsed-partially');
			} // make it fully collapsed
			// NOTE: The `collapsed-partially` class hasn't been defined as of now. [29 Aug, 18 - 1200 hrs]
		}

		// if component prop says it can be fully collapsed, add the fully-collapsible class
		let fullyCollapsibleClass = collapsed === 'fully' ? cls(css['fully-collapsible'], 'component--collapsible-box--container--fully-collapsible') : '';

		return (
			<ModularBox
				className={cls(css.container, fullyCollapsibleClass, expansionStateClass, className)}
				header={header}
				footer={() => <FooterComp onClick={(...args) => this.toggleExpansion(...args)}/>}
				headerClassName={cls(headerClassName, 'component--collapsible-box--header')}
				bodyClassName={cls(css.body, bodyClassName, 'component--collapsible-box--body')}
				footerClassName={cls(collapsed === 'fully' && !isExpanded ? css['footer-no-border'] : '', footerClassName)}
				onClick={onClick}
			>
				{body}
			</ModularBox>
		)
	}
}

export default translate()(CollapsibleBox);
