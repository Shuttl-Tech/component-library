import React from 'react';
import renderer from 'react-test-renderer';

import { GenericPill } from '../../../../src/index';

it('GenericPill tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<GenericPill {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
