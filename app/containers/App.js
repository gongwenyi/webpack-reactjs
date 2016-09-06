import React from 'react';
// import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
	constructor(props) {
	  super(props);
	  injectTapEventPlugin();

	  this.state = {};
	}
	render() {
		return (
			<MuiThemeProvider>
				{this.props.children}
			</MuiThemeProvider>
		);
	}
}

export default App;
