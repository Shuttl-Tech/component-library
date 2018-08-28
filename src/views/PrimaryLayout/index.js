import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import loremIpsum from 'lorem-ipsum';
import cls from 'classnames';
import i18n from 'i18n';
import md5 from 'js-md5';

import ComponentListItem from 'components/ComponentListItem';
import ComponentPreviewVisual from 'components/ComponentPreviewVisual';
import ComponentPreviewCode from 'components/ComponentPreviewCode';

import Box from 'components/Box';
import InPlaceTooltip from 'components/InPlaceTooltip';
import GenericPill from 'components/GenericPill';
import ModularBox from 'components/ModularBox';
import SplitEvenBox from 'components/SplitEvenBox';
import CollapsibleBox from 'components/CollapsibleBox';

import css from './styles.module.css';
import v from 'voca';

type Props = {
}

const t = (...args) => i18n.t(...args);

export const dummyData = ({ count = 4, units = 'words' } = {}) => {
	return loremIpsum({ count, units });
};

const dummyData1 = dummyData();
const dummyData2 = dummyData({ count: 8 });
const dummyData3 = dummyData({ count: 200 });
const dummyData4 = dummyData({ count: 2, units: 'sentences' });

const segmentText1 = dummyData({ count: 2 });
const segmentText2 = dummyData({ count: 1 });
const segmentText3 = dummyData({ count: 3 });
const segmentText4 = dummyData({ count: 2 });

export const COMPONENTS = [
	{
		name: "Box",
		component: <Box>{dummyData1}</Box>,
		code: `<Box>\n\t${dummyData1}\n</Box>`
	},
	{
		name: "InPlaceTooltip",
		component: <InPlaceTooltip>{dummyData1}</InPlaceTooltip>,
		code: `<InPlaceTooltip>\n\t${dummyData1}\n</InPlaceTooltip>`
	},
	{
		name: "InPlaceTooltip - Absolute",
		component: <InPlaceTooltip position="absolute">{dummyData1}</InPlaceTooltip>,
		code: `<InPlaceTooltip position="absolute">\n\t${dummyData1}\n</InPlaceTooltip>`
	},
	{
		name: "InPlaceTooltip - Absolute + Value",
		component: <InPlaceTooltip position="absolute" absoluteValue={60}>{dummyData1}</InPlaceTooltip>,
		code: `<InPlaceTooltip position="absolute" absoluteValue={60}>\n\t${dummyData1}\n</InPlaceTooltip>`
	},
	{
		name: "InPlaceTooltip - Center",
		component: <InPlaceTooltip position="center">{dummyData1}</InPlaceTooltip>,
		code: `<InPlaceTooltip position="center">\n\t${dummyData1}\n</InPlaceTooltip>`
	},
	{
		name: "InPlaceTooltip - Right",
		component: <InPlaceTooltip position="right">{dummyData1}</InPlaceTooltip>,
		code: `<InPlaceTooltip position="right">\n\t${dummyData1}\n</InPlaceTooltip>`
	},
	{
		name: "InPlaceTooltip - Left",
		component: <InPlaceTooltip position="left">{dummyData1}</InPlaceTooltip>,
		code: `<InPlaceTooltip position="left">\n\t${dummyData1}\n</InPlaceTooltip>`
	},
	{
		name: "GenericPill - Yellow",
		component: <GenericPill color="yellow">{dummyData1}</GenericPill>,
		code: `<GenericPill color="yellow">\n\t${dummyData1}\n</GenericPill>`
	},
	{
		name: "GenericPill - Blue",
		component: <GenericPill color="blue">{dummyData1}</GenericPill>,
		code: `<GenericPill color="blue">\n\t${dummyData1}\n</GenericPill>`
	},
	{
		name: "ModularBox - Body only",
		component: <ModularBox>{dummyData4}</ModularBox>,
		code: `<ModularBox>\n\t${dummyData4}\n</ModularBox>`
	},
	{
		name: "ModularBox - Body + Header",
		component: <ModularBox header={<strong>{dummyData1}</strong>}>{dummyData4}</ModularBox>,
		code: `<ModularBox\n\theader={<strong>${dummyData1}</strong>}\n>\n\t${dummyData4}\n</ModularBox>`
	},
	{
		name: "ModularBox - Body + Footer",
		component: <ModularBox footer={<strong>{dummyData2}</strong>}>{dummyData4}</ModularBox>,
		code: `<ModularBox\n\tfooter={<strong>${dummyData2}</strong>}\n>\n\t${dummyData4}\n</ModularBox>`
	},
	{
		name: "ModularBox - Body + Header + Footer",
		component: <ModularBox header={<strong>{dummyData1}</strong>} footer={<strong>{dummyData2}</strong>}>{dummyData4}</ModularBox>,
		code: `<ModularBox\n\theader={<strong>${dummyData1}</strong>}\n\tfooter={<strong>${dummyData2}</strong>}\n>\n\t${dummyData4}\n</ModularBox>`
	},
	{
		name: "SplitEvenBox - 2 segments",
		component: <SplitEvenBox segments={[<span>{segmentText1}</span>, <span>{segmentText2}</span>]} />,
		code: `<SplitEvenBox segments={[<span>${segmentText1}</span>, <span>${segmentText2}</span>]} />`
	},
	{
		name: "SplitEvenBox - 4 segments",
		component: <SplitEvenBox segments={[<span>{segmentText1}</span>, <span>{segmentText2}</span>, <span>{segmentText3}</span>, <span>{segmentText4}</span>]} />,
		code: `<SplitEvenBox segments={[<span>${segmentText1}</span>, <span>${segmentText2}</span>, <span>${segmentText3}</span>, <span>${segmentText4}</span>]} />`
	},
	{
		name: "SplitEvenBox - Vertical - 2 segments",
		component: <SplitEvenBox direction='vertical' segments={[<span>{segmentText1}</span>, <span>{segmentText2}</span>]} />,
		code: `<SplitEvenBox direction='vertical' segments={[<span>${segmentText1}</span>, <span>${segmentText2}</span>]} />`
	},
	{
		name: "CollapsibleBox - Partially Expandable - Body + Footer",
		component: <CollapsibleBox footer={<strong>{t('show-more')}</strong>}>{dummyData3}</CollapsibleBox>,
		code: `<CollapsibleBox\n\tfooter={<strong>${t('show-more')}</strong>}\n>\n\t${dummyData3}\n</CollapsibleBox>`
	},
	{
		name: "CollapsibleBox - Partially Expandable - Body + Header + Footer",
		component: <CollapsibleBox header={<strong>{dummyData1}</strong>} footer={<strong>{t('show-more')}</strong>}>{dummyData3}</CollapsibleBox>,
		code: `<CollapsibleBox\n\theader={<strong>${dummyData1}</strong>}\n\tfooter={<strong>${t('show-more')}</strong>}\n>\n\t${dummyData3}\n</CollapsibleBox>`
	},
	{
		name: "CollapsibleBox - Fully Expandable - Body + Header + Footer",
		component: <CollapsibleBox expanded='fully' header={<strong>{dummyData1}</strong>} footer={<strong>{t('show-more')}</strong>}>{dummyData3}</CollapsibleBox>,
		code: `<CollapsibleBox\n\texpanded='fully'\n\theader={<strong>${dummyData1}</strong>}\n\tfooter={<strong>${t('show-more')}</strong>}\n>\n\t${dummyData3}\n</CollapsibleBox>`
	},
	{
		name: "CollapsibleBox - Fully Collapsible - Body + Header + Footer",
		component: <CollapsibleBox collapsed='fully' header={<strong>{dummyData1}</strong>} footer={<strong>{t('show-more')}</strong>}>{dummyData3}</CollapsibleBox>,
		code: `<CollapsibleBox\n\tcollapsed='fully'\n\theader={<strong>${dummyData1}</strong>}\n\tfooter={<strong>${t('show-more')}</strong>}\n>\n\t${dummyData3}\n</CollapsibleBox>`
	},
].map(component => {
	component.stringName = component.name;
	let splitName = component.name.split('-').map(n => n.trim());
	component.color = md5(btoa(splitName[0])).slice(0, 6);

	component.name = splitName.map((part, i) => {
		if (i === 0) return part;
		return <span><br /><small>{part}</small></span>;
	});

	return component;
});

function componentsSidebarList (t) {
	let sidebarListItems = COMPONENTS.map(({name, stringName, color}, i) => {
		let id = v.snakeCase(stringName);
		let hash = '#' + id;
		let activeClassObject = {};
		activeClassObject[css.active] = window.location.hash === hash;

		return <ComponentListItem key={i} name={name} stringName={stringName} color={color} className={cls(activeClassObject, css['component-list-item'])}/>
	});
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
	let previewListItems = COMPONENTS.map(({component, code, name, stringName}, i) => {
		let id = v.snakeCase(stringName);
		let hash = '#' + id;
		let activeClassObject = {};
		activeClassObject[css.active] = window.location.hash === hash;

		return (
			<tr key={i} className={cls(css['component-documentation-wrapper'], activeClassObject )}>
				<td><ComponentPreviewVisual id={id} component={component}/></td>
				<td><ComponentPreviewCode code={code}/></td>
			</tr>
		);
	});

	return <table className={css['component-list-container']} ><tbody>{previewListItems}</tbody></table>;
}

export class PrimaryLayout extends Component<Props> {
	render() {
		const { t } = this.props;
		return (
			<div className={css.container}>
				{componentsSidebarList(t)}
				<div className={css['component-preview-list-wrapper']}>
					{componentsPreviewList()}
				</div>
			</div>
		);
	}
}

export default translate()(withRouter(PrimaryLayout));
