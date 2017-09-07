import React from 'react'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'

export default class DetailComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			article: "",
			title: ""
		}
	}
	render() {
		return (
			<div className="main">
				<HeaderComponent />
				<div className="detailPage">
				<div className="detail-header">
					<img className="h-left"  src={require("../../images/listImg.jpg")}/>


					<div className="h-right">
						<div className="r-item">
							<div className="de-title">	
								<h3>战狼2</h3>
								<p className="inctr">
									<i>8.7</i>
									<i>IMAX</i>
									<i>中国巨幕3D</i>
									<i>3D</i>
									<i>4D</i>
								</p>
							</div>
							<p className="dec">吴京携手达康书记霸气归来</p>
							<ul className="act">
								<li>导演 : 吴京</li>
								<li>主演：吴京/弗兰克·格里罗/卢靖姗/吴刚</li>
								<li> 类型：动作</li>
								<li>制片国家/地区：中国大陆</li>
								<li>上映时间：2017-07-28上映</li>
								<li>片长：123分钟</li>
							</ul>
							<p className="goshow">
								<span>$38.00起</span>
								<span><button>选座购票</button></span>
							</p>
						</div>
					</div>
				</div>
						
				</div>
				<FooterComponent />
			</div>
		)
	}

	componentDidMount() {
		//this.props.params.id 接收到传递过来的id
		let link = "/mock/article.json?id=" + this.props.params.id
		console.log(this.props.params.id);
		fetch(link)
			.then((response) => response.json())
			.then((json) => {
				let data = json.data;
		   		this.setState({
		   			article: data.content,
		   			title: data.title
		   		})
			})
			.catch((ex) => {
				console.log('parsing failed', ex)
			})
	}


}