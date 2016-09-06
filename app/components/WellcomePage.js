import React, { Component, PropTypes } from 'react';
import imgLogo from '../imgs/logo.jpg';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 100,
		paddingLeft: 20,
		paddingRight: 20,
	},
	logoBox: {
		width: 120,
		height: 120,
		// marginBottom: 30,
		// borderRadius: '100%',
		// borderWidth: 2,
		// borderColor: '#00bcd4',
		// borderStyle: 'solid',
		// overflow: 'hidden',
	},
	logo: {
		width: '100%',
	},
};

export default class Wellcome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.timer = setTimeout(() => {
			this.context.router.push('home/index');
		}, 2000);
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}

	render() {
		return (
			<div style={styles.container}>
				<div style={styles.logoBox}>
					<img style={styles.logo} src={imgLogo} alt="logo" />
				</div>
				<p>你关心的，才是头条!</p>
			</div>
		);
	}
}

Wellcome.contextTypes = {
	router: PropTypes.object,
};
