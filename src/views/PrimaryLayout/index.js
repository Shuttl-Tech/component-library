import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import css from './styles.module.css';

type Props = {
}

export class PrimaryLayout extends Component<Props> {
	render() {
		const { t } = this.props;
		return (t('view-data-loaded'));
	}
}

export default translate()(withRouter(PrimaryLayout));
