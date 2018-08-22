import React from 'react';
import renderer from 'react-test-renderer';

import { InPlaceTooltip } from './';

const tooltipText = 'Hello World!';

it('InPlaceTooltip tree looks like how it should', () => {
	let props = {
		position: 'left'
	};

	const component = renderer.create(<InPlaceTooltip {...props}>{tooltipText}</InPlaceTooltip>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
