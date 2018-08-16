import React from 'react';
import { shallow } from 'enzyme';
import i18n from 'i18n/index';

import { PrimaryLayout } from '../';

const t = (...args) => i18n.t(...args);

describe('PrimaryLayout view', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<PrimaryLayout t={t} />);
		expect(wrapper.text()).toEqual(t('view-data-loaded'));
	});
});
