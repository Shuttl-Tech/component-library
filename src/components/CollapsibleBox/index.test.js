import React from 'react';
import renderer from 'react-test-renderer';

import { CollapsibleBox } from './';

it('CollapsibleBox tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<CollapsibleBox {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
