import React from 'react';
import { shallow } from 'enzyme';
import i18n from 'i18n/index';

import { PrimaryLayout, COMPONENTS } from '../';
import { ComponentListItem } from 'components/ComponentListItem';
import { ComponentPreviewVisual } from 'components/ComponentPreviewVisual';
import { ComponentPreviewCode } from 'components/ComponentPreviewCode';

const t = (...args) => i18n.t(...args);

describe('PrimaryLayout view', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<PrimaryLayout t={t} />);
		expect(wrapper.find(ComponentListItem).length).toEqual(COMPONENTS.length);
		expect(wrapper.find(ComponentPreviewVisual).length).toEqual(COMPONENTS.length);
		expect(wrapper.find(ComponentPreviewCode).length).toEqual(COMPONENTS.length);
	});
});
