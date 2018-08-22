import React from 'react';
import renderer from 'react-test-renderer';

import { ComponentPreviewVisual } from './';

it('ComponentPreviewVisual tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<ComponentPreviewVisual {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
