import React from 'react';
import renderer from 'react-test-renderer';

import { Box } from '../../../../src/index';

it('Box tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<Box {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
