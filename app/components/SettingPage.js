import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import './refresh.css';

const styles = {
	settingBox: {
		marginBottom: 30,
		paddingLeft: 10,
		paddingRight: 10,
	},
	checkbox: {
		marginBottom: 10,
		paddingLeft: 10,
	},
	toggle: {
		width: '90%',
		marginBottom: 10,
		paddingLeft: 10,
	},
	raisedBtnBox: {
		marginTop: 50,
		marginBottom: 30,
		paddingLeft: 20,
		paddingRight: 20,
	},
	raisedBtn: {
	},
};

export default class Setting extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	_handleLeftClick() {
		// this.context.router.push('home/user');
		this.context.router.goBack();
	}

	render() {
		return (
			<div>
				<AppBar
					style={{ position: 'fixed', top: 0, height: 58 }}
					title={<span style={{ fontSize: 18, display: 'block' }}>设置</span>}
					iconElementLeft={<IconButton onTouchTap={() => this._handleLeftClick()}><NavigationClose /></IconButton>}
				/>
				<div style={{ paddingTop: 60 }}>
					<div style={styles.settingBox}>
						<p>基本设置</p>
						<Checkbox
							label="基本设置1"
							defaultChecked={true}
							style={styles.checkbox}
						/>
						<Checkbox
							label="基本设置2"
							defaultChecked={true}
							style={styles.checkbox}
						/>
						<Checkbox
							label="基本设置3"
							style={styles.checkbox}
						/>
						<Checkbox
							label="基本设置4"
							defaultChecked={true}
							style={styles.checkbox}
						/>
					</div>
					<div style={styles.settingBox}>
						<p>高级设置</p>
						<Checkbox
							label="高级设置1"
							defaultChecked={true}
							style={styles.checkbox}
						/>
						<Checkbox
							label="高级设置2"
							defaultChecked={true}
							style={styles.checkbox}
						/>
						<Checkbox
							label="高级设置3"
							style={styles.checkbox}
						/>
						<Checkbox
							label="高级设置4"
							defaultChecked={true}
							style={styles.checkbox}
						/>
					</div>
					<div style={styles.settingBox}>
						<p>其他设置1</p>
						<Toggle
							label="其他设置1"
							style={styles.toggle}
							defaultToggled={true}
						/>
						<Toggle
							label="其他设置2"
							style={styles.toggle}
						/>
					</div>
					<div style={styles.settingBox}>
						<p>其他设置2</p>
						<Toggle
							label="其他设置1"
							style={styles.toggle}
							defaultToggled={true}
						/>
						<Toggle
							label="其他设置2"
							style={styles.toggle}
						/>
					</div>

					<div style={styles.raisedBtnBox}>
						<RaisedButton
							style={styles.raisedBtn}
							label="保存设置"
							primary={true}
							fullWidth={true}
							onClick={() => {}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

Setting.contextTypes = {
	router: React.PropTypes.object,
};
