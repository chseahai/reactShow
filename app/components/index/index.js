import React from 'react'
import ReactDom from 'react-dom'
import {Card, Carousel} from 'antd';
import {Link} from 'react-router'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'

import "../../css/page.css"

export default class IndexComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles:[],
			login: false,
			listImg:[]
		}
	}

	componentDidMount() {
		fetch('/mock/index.json')
			.then((response) => response.json())
			.then((json) => {
		   		this.setState({
		   			articles: json.data.articles
		   		})
			})
			.catch((ex) => {
				console.log('parsing failed', ex)
			})

		fetch('/mock/listImg.json')
			.then((response) => response.json())
			.then((json) => {
		   		this.setState({
		   			articles:json.data.articles
		   		})
			})
			.catch((ex) => {
				console.log('parsing failed', ex)
			})
	}

	render() {
		return (
			<div className="main">
				<HeaderComponent title="首页"/>
				 <Carousel autoplay>
					    <div><h3><img className="carousel-img" src={require("../../images/carousel01.jpg")} /></h3></div>
					    <div><h3><img className="carousel-img" src={require("../../images/carousel02.jpg")} /></h3></div>
					    <div><h3><img className="carousel-img" src={require("../../images/carousel03.jpg")} /></h3></div>
					    <div><h3><img className="carousel-img" src={require("../../images/carousel04.jpg")} /></h3></div>
					    <div><h3><img className="carousel-img" src={require("../../images/carousel05.jpg")} /></h3></div>
				  </Carousel>

				  <div className="containView"> 
				  		<div className="mainLeft">
				  			<div>
				  				<h3>正在热映</h3>
				  				<p>
				  					<span>今天有24部影片正在上映</span>
				  					<i><a href="" >查看更多</a></i>
				  				</p>
				  			</div>

				  			<div className="showTicket">
				  				{
				  					this.state.articles.map((value,index) =>{

				  						return(
						  					<div className="list-img" key={value.id +""}>
						  					<Link to={"/detail/"+value.id}>
						  						<img  src={value.imgSrc}/>
						  						<b>{value.name}</b>
						  						<p>
						  							<span style={{color:value.color}}>{"￥"+value.price+"  "+"   起"}</span>
						  							<span><button>{value.isChoose}</button></span>
						  						</p>						  						
						  					</Link>
						  						
						  					</div>
				  						)
				  					})	
				  				}
				  				
				  			</div>


				  		</div>

				  		<div className="mainRight">

				  		</div>
				  		
				  </div>
				<Card title="VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。" className="content">
					{
	    				this.state.articles.map((value, index)=>{
	    					return (
	    						<p className="content-item" key={value.id}>
	    							<Link to={"/detail/" + value.id}>
	    								<span className="content-item-category" style={{color:value.color}}>[ {value.categoryName} ]</span>
	    								{value.title} ({value.date})
	    								{value.new? <img className="content-item-new" src={require("../../images/new.gif")} /> : ""}
	    							</Link>
	    						</p>
			        		)
	    				})
			    	}
				</Card>
				 

				<FooterComponent/>
			</div>
		)
	}

}