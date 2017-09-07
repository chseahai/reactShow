import React, {Component} from "react"
import {Row, Col, Menu, Icon, Button, Modal, Tabs, Form, Input} from 'antd'
import {Link} from 'react-router'
import ListComponent from "../../list/list.js"
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

// view组件，一般只负责显示，不负责逻辑
class HeaderUiComponent extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	    this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.handleSubmit();
			}
	    });
	}

	render(){

		const { getFieldDecorator } = this.props.form;

		return (
			<div>
				<Row>
			    	<Col span={4}>
			    		<Link to={/index/}><img className="header-img" src={require("../../../images/logo.jpg")} /></Link>
			    	</Col>
			    	<Col span={16}>
			    		<Menu mode="horizontal" onSelect={this.props.handleSelect} className="header-menu" selectedKeys={[this.props.selectedKey]}>
			    			{
			    				this.props.categories.map((value, key)=>{
			    					return (
			    						<Menu.Item key={value.id}>
				    						<Link to={"/list/"+value.id}>
						          				<Icon type={value.type} />{value.name}
				    						</Link>
					        			</Menu.Item>	
					        		)
			    				})
			    			}

					    </Menu>
			    	</Col>
			    	<Col span={4}>
			    		{
			    			!this.props.login ? 
			    				<Button type="primary" onClick={this.props.handleModelToggle}>登陆 / 注册</Button> : 
			    				<Button type="primary" onClick={this.props.handleLogout}>退出</Button>
			    		}
			    	</Col>
			    </Row>

			    <Modal onCancel={this.props.handleModelToggle} footer={null} title="登陆 ／ 注册" visible={this.props.showModal}>
			       <Tabs type="card">
						<TabPane tab="登陆" key="1">
							<Form onSubmit={this.handleSubmit} className="login-form">
								  	<FormItem>
							        	{getFieldDecorator('username', {
							        		rules: [{ required: true, message: '用户名不得为空' }],
							        	})(
							        		<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请填写用户名" />
							        	)}
							        </FormItem>
							        <FormItem>
							        	{getFieldDecorator('password', {
							        		rules: [{ required: true, message: '请输入您的密码!' }],
							        	})(
							        		<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
							        	)}
							        </FormItem>
							        <FormItem>
							        	<Button type="primary" htmlType="submit" className="login-form-button">
							        		登陆
							        	</Button>
							        </FormItem>
							</Form>
						</TabPane>
						<TabPane tab="注册" key="2">Content of Tab Pane 2</TabPane>
					</Tabs>
			    </Modal>
			</div>
		)
	}

}

export default Form.create()(HeaderUiComponent);