import React, { Component } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import img01 from '../imgs/kerem-128.jpg';
import img02 from '../imgs/kolage-128.jpg';

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
};

export default class Hot extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		// window.scrollTo(0, 200);
	}

	render() {
		return (
			<div style={styles.content}>
				<List>
					<Subheader>今天09:36刷新</Subheader>
					<Divider inset={false} />
					<Link to="newsInfo/4" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img01} />}
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
					<Link to="newsInfo/5" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img02} />}
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
					<Link to="newsInfo/4" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img01} />}
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
					<Link to="newsInfo/5" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img02} />}
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
					<Link to="newsInfo/4" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img01} />}
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
					<Link to="newsInfo/5" style={styles.linkStyle}>
						<ListItem
							leftAvatar={<Avatar style={styles.avatar} src={img02} />}
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
				</List>
			</div>
		);
	}
}
