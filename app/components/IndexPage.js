import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import RefreshIndicator from 'material-ui/RefreshIndicator';
// import img01 from '../imgs/kerem-128.jpg';
// import img02 from '../imgs/kolage-128.jpg';
// import img03 from '../imgs/ok-128.jpg';
import img04 from '../imgs/raquelromanp-128.jpg';
import img05 from '../imgs/uxceo-128.jpg';

const styles = {
	content: {
		paddingBottom: 50,
	},
	avatar: {
		left: 6,
		width: 54,
		height: 54,
		borderRadius: 0,
	},
	linkStyle: {
		textDecoration: 'none',
	},
	refreshContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	refreshBox: {
		position: 'relative',
		width: 40,
    // height: 40,
    // borderWidth: 1,
    // borderColor: '#f00',
    // borderStyle: 'solid',
	},
	refresh: {
		display: 'inline-block',
		position: 'relative',
	},
	hide: {
		display: 'none',
	},
};

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshStatus: 'hide',	// 是否显示正在刷新组件
			newsData: [], 					// 最新的新闻列表数据
		};
	}

	/**
	 * 组件将要渲染的时候，调用更新新闻列表的请求
	 */
	componentWillMount() {
		this.props.actions.updateIndexNews();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.news.updateIndexNews.isFetching) {
			this.setState({ refreshStatus: 'loading' });
		} else {
			this.setState({ refreshStatus: 'hide' });
		}

		if (nextProps.news.updateIndexNews.data != null) {
			this.setState({ newsData: nextProps.news.updateIndexNews.data.result });
			// console.log( nextProps.news.updateIndexNews.data.result);
		}
	}
	render() {
		return (
			<div style={styles.content}>
				<div style={styles.refreshContainer}>
					<div style={styles.refreshBox}>
						<RefreshIndicator
							size={40}
							left={0}
							top={20}
							status={this.state.refreshStatus}
							style={[styles.refresh, styles.hide]}
						/>
					</div>
				</div>

				<List>
					<Subheader>今天12:30刷新</Subheader>
					<Divider inset={false} />
					<Link to="newsInfo/1" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img04} />}
							primaryText="王宝强妻子出轨经纪人，宝宝挺住不哭"
							secondaryText={
								<p>
									<span style={{ color: darkBlack }}>搜狐娱乐</span> --
		              王宝强于昨晚微博发表声明，其妻子马蓉和其经纪人有不正当男女关系，发表离婚声明
								</p>
		          }
							secondaryTextLines={2}
						/>
					</Link>
					<Divider inset={false} />
					<Link to="newsInfo/2" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img05} />}
							primaryText="中国游泳队再夺金牌"
							secondaryText={
								<p>
									<span style={{ color: darkBlack }}>新华社</span> --
		              在今天10：30的比赛中，中国游泳队孙杨在男子200米自由泳的比赛中，发挥出色，为中国奥运代表团再添一金
								</p>
		          }
							secondaryTextLines={2}
						/>
					</Link>
					<Divider inset={false} />
					<Link to="newsInfo/1" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img04} />}
							primaryText="王宝强妻子出轨经纪人，宝宝挺住不哭"
							secondaryText={
								<p>
									<span style={{ color: darkBlack }}>搜狐娱乐</span> --
		              王宝强于昨晚微博发表声明，其妻子马蓉和其经纪人有不正当男女关系，发表离婚声明
								</p>
		          }
							secondaryTextLines={2}
						/>
					</Link>
					<Divider inset={false} />
					<Link to="newsInfo/2" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img05} />}
							primaryText="中国游泳队再夺金牌"
							secondaryText={
								<p>
									<span style={{ color: darkBlack }}>新华社</span> --
		              在今天10：30的比赛中，中国游泳队孙杨在男子200米自由泳的比赛中，发挥出色，为中国奥运代表团再添一金
								</p>
		          }
							secondaryTextLines={2}
						/>
					</Link>
					<Divider inset={false} />
				</List>
			</div>
		);
	}
}

Index.propTypes = {
	actions: PropTypes.object.isRequired,
};

