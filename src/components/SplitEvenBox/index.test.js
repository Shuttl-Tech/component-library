import React from 'react';
import renderer from 'react-test-renderer';

import { SplitEvenBox } from './';

const segmentText1 = 'Micheal Faraday';
const segmentText2 = 'Tim Berners-Lee';
const segmentText3 = 'Marie Curie';
const segmentText4 = 'Louis Pasteur';

it('SplitEvenBox tree looks like how it should', () => {
	let props = {
		segments: [
			<span>{segmentText1}</span>, <span>{segmentText2}</span>, <span>{segmentText3}</span>, <span>{segmentText4}</span>
		]
	};

	const component = renderer.create(<SplitEvenBox {...props} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
