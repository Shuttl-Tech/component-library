import React from 'react';
import renderer from 'react-test-renderer';

import { ComponentPreviewCode } from '../../../../src/index';

it('ComponentPreviewCode tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<ComponentPreviewCode {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
