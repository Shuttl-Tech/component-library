import React from 'react';
import renderer from 'react-test-renderer';

import { ComponentListItem } from '../../../../src/index';

it('ComponentListItem tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<ComponentListItem {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
