import React from 'react'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'

import {Link} from 'react-router'
import "../../css/page.css"


export default class ListComponent extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  }
	}

	render(){
		return(
			<div  className="main">
				<HeaderComponent />
						<p>
							<span>当前位置 ></span>
							<span><a>电影天堂 ></a></span>
							<span>喜剧片 ></span>
							<span>下载页面</span>
						</p>
					<div className="ListContent">
					
						<div className="list-left">
							<h3>相关栏目分类</h3>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>
							<p><a>剧情片</a></p>		

							<h3>本站推荐电影</h3>
							<ul>
								<li><a>七月经典香港7.2分喜剧片《逃学威龙2》BD国粤双语中字</a></li>
								<li><a>2017年美国6.6分动作片《攻壳机动队真人版》BD国英双语中英双字</a></li>
								<li><a>2017年国产6.1分爱情片《吃吃的爱》HD高清国语中英双字</a></li>
								<li><a>2017年美国动作片《新木乃伊》HD韩版高清中英双字</a></li>
								<li><a>2016年韩国6.5分动作片《金融决战》BD韩语中字</a></li>
								<li><a>2016年印度9.2分动作片《摔跤吧！爸爸》国印双语中字</a></li>
								<li><a>七月经典香港7.3分动作片《警察故事3：超级警察》BD国粤双语中字</a></li>
								<li><a>七月经典香港7.2分喜剧片《逃学威龙2》BD国粤双语中字</a></li>
								<li><a>2017年美国6.5分动画片《蓝精灵：寻找神秘村》BD国英双语双字</a></li>
								<li><a>2017年美国7.4分科幻片《异形：契约》HD韩版中英双字</a></li>
							</ul>				
						</div>
					

						<div className="list-right">
							<div className="searchBox">搜索框内容</div>
							<div className="local">当前位置</div>
							<ul className="movieDetails">
								<li className="m-details">
										<a className="m-name">综合电影111</a>
										<p>日期<span>评分:0</span></p>
										<p><span>片名:爱爱囧事</span><span>别名:爱爱囧事</span><span>导演:Patience</span></p>
										<p><span>类型:剧情/喜剧/爱情</span><span>标签:爱爱囧事</span></p>
										<div><span>主演:小明</span><span>小丽</span></div>
								</li>
								<li className="m-details">
										<a className="m-name">综合电影111</a>
										<p>日期<span>评分:0</span></p>
										<p><span>片名:爱爱囧事</span><span>别名:爱爱囧事</span><span>导演:Patience</span></p>
										<p><span>类型:剧情/喜剧/爱情</span><span>标签:爱爱囧事</span></p>
										<div><span>主演:小明</span><span>小丽</span></div>
								</li>
								<li className="m-details">
										<a className="m-name">综合电影111</a>
										<p>日期<span>评分:0</span></p>
										<p><span>片名:爱爱囧事</span><span>别名:爱爱囧事</span><span>导演:Patience</span></p>
										<p><span>类型:剧情/喜剧/爱情</span><span>标签:爱爱囧事</span></p>
										<div><span>主演:小明</span><span>小丽</span></div>
								</li>
								<li className="m-details">
										<a className="m-name">综合电影111</a>
										<p>日期<span>评分:0</span></p>
										<p><span>片名:爱爱囧事</span><span>别名:爱爱囧事</span><span>导演:Patience</span></p>
										<p><span>类型:剧情/喜剧/爱情</span><span>标签:爱爱囧事</span></p>
										<div><span>主演:小明</span><span>小丽</span></div>
								</li>
								<li className="m-details">
										<a className="m-name">综合电影111</a>
										<p>日期<span>评分:0</span></p>
										<p><span>片名:爱爱囧事</span><span>别名:爱爱囧事</span><span>导演:Patience</span></p>
										<p><span>类型:剧情/喜剧/爱情</span><span>标签:爱爱囧事</span></p>
										<div><span>主演:小明</span><span>小丽</span></div>
								</li>
								<li className="m-details">
										<a className="m-name">综合电影111</a>
										<p>日期<span>评分:0</span></p>
										<p><span>片名:爱爱囧事</span><span>别名:爱爱囧事</span><span>导演:Patience</span></p>
										<p><span>类型:剧情/喜剧/爱情</span><span>标签:爱爱囧事</span></p>
										<div><span>主演:小明</span><span>小丽</span></div>
								</li>



							</ul>
						</div>
				</div>



				
				<FooterComponent />
			</div>
			)
	}
}

