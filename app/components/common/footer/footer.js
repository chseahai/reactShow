import React from "react"
import FooterUiComponent from "./footer_ui.js"
import {connect} from "react-redux"

// 容器组件

class FooterComponent extends React.Component {

	render() {
		return (
			<FooterUiComponent login={this.props.login}/>
		)
	}

}

function mapStateToProps(state) {
  return {
  	login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent)