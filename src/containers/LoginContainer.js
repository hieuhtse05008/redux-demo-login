/**
 * Created by phanmduong on 9/4/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginComponent from '../components/LoginComponent';
import * as showResultAction from '../actions/showResultAction'


class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.login = this.login.bind(this);
    console.log('Logincontainer', this.props);
  }

  login(data) {
    this.props.loginActions.login(data);
  }

  render() {
    return (
      <LoginComponent
        login={this.login}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(showResultAction, dispatch)
  }
    ;
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
