import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import loremIpsum from 'lorem-ipsum';

import ComponentListItem from 'components/ComponentListItem';
import ComponentPreviewVisual from 'components/ComponentPreviewVisual';
import ComponentPreviewCode from 'components/ComponentPreviewCode';

import Box from 'components/Box';
import Tooltip from 'components/Tooltip';

import css from './styles.module.css';

type Props = {
}

const dummyData = ({ count = 4, units = 'words' } = {}) => {
	return loremIpsum({ count, units });
};

const dummyData1 = dummyData();
const dummyData2 = dummyData({ count: 8 });
const dummyData3 = dummyData({ count: 15 });
const dummyData4 = dummyData({ count: 2, units: 'sentences' });

const COMPONENTS = [
	{
		name: "Box",
		component: <Box>{dummyData1}</Box>,
		code: `<Box>${dummyData1}</Box>`
	},
	{
		name: "Tooltip",
		component: <Tooltip position="right">{dummyData1}</Tooltip>,
		code: `<Tooltip position="right">${dummyData1}</Tooltip>`
	}
];

function componentsSidebarList (t) {
	let sidebarListItems = COMPONENTS.map(component => <ComponentListItem name={component.name}/>);
	return (
		<div className={css.list} >
			<div className={css['sidebar-header']}>
				{t('brand')}<br />
				{t('component-lib-sidebar-header')}
			</div>
			{sidebarListItems}
		</div>
	);
}

function componentsPreviewList () {
	let previewListItems = COMPONENTS.map(({component, code}) => (
		<div className={css['component-documentation-wrapper']}>
			<ComponentPreviewVisual component={component}/>
			<ComponentPreviewCode code={code}/>
		</div>
	));

	return <div className={css['component-list-container']} >{previewListItems}</div>;
}

export class PrimaryLayout extends Component<Props> {
	render() {
		const { t } = this.props;
		return (
			<div className={css.container}>
				{componentsSidebarList(t)}
				{componentsPreviewList()}
			</div>
		);
	}
}

export default translate()(withRouter(PrimaryLayout));
