/* eslint-disable react/jsx-no-literals */

import React, { PureComponent } from 'react';

import css from './styles.module.css'

export class IncorrectUsageComponent extends PureComponent {
	componentDidMount() {
		console.warn('Incorrect usage for component.\nShuttl Component Library does not expose any components through a default export.', this.displayName, this);
	}

	render () {
		return (
			<div className={css.container}>
				<div>
					<div>
						<span>
							<h3 className={css.title}>Incorrect component usage.</h3>
							<small>You tried to use a default export from the<br /><strong>Shuttl Component Library</strong> as a component.</small>
						</span>
						<hr/>
					</div>
				</div>
				<div>
					<span>Usage should be as follows:</span>
					<pre>
						<code>{'import { ComponentName } from \'component-library\';'}</code><br/>
						<code>...</code><br/>
						<code>{'<ComponentName>some content here</ComponentName>'}</code>
					</pre>
				</div>
			</div>
		);
	}
}

export default IncorrectUsageComponent;
