import React from 'react';
import renderer from 'react-test-renderer';

import { IncorrectUsageComponent } from './';

it('IncorrectUsageComponent tree looks like how it should', () => {
	const component = renderer.create(<IncorrectUsageComponent/>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
