import React, { Component } from 'react';
import { translate } from 'react-i18next';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { duotoneDark as style } from 'react-syntax-highlighter/styles/prism';


import css from './styles.module.css';

export class ComponentPreviewCode extends Component {
	render() {
		return (
			<div className={css.code}>
				<SyntaxHighlighter language='jsx' style={style}>{this.props.code}</SyntaxHighlighter>
			</div>
		)
	}
}

export default translate()(ComponentPreviewCode);
