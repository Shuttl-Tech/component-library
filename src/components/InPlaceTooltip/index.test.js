import React from 'react';
import renderer from 'react-test-renderer';

import { Tooltip } from '../../../../src/index';

it('InPlaceTooltip tree looks like how it should', () => {
	let props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const component = renderer.create(<Tooltip {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
