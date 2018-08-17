import React from 'react';
import renderer from 'react-test-renderer';

import { ModularBox } from '../../../../src/index';

it('ModularBox tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<ModularBox {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
