import React from 'react';
import renderer from 'react-test-renderer';

import { SplitEvenBox } from './';

it('SplitEvenBox tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<SplitEvenBox {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
