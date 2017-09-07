import React from "react"
// 无状态组件
// ui组件
// 1.ES6: class
// 2.ES5: React.createClass
// 3.无状态组件: function(props){}. 无生命周期，无this，性能有优势

export default function(props) {

	let element = props.login ? <div>已登陆</div> : <div>未登录</div>;

	return (
		<div>
			{element}

			<div className="footer-item">
				<ul>
					<li><a>关于我们</a></li>
					<li><a>联系我们</a></li>
					<li><a>服务协议</a></li>
					<li><a>隐私声明</a></li>
				</ul>
				<p>    Copyright 2011-2016 GoodPatience.com.(GoodPatience)版权所有<a>       京公网安备11010102001220号        </a><a>        京ICP备11003845号-1       </a></p>
			</div>
		</div>
	)
}