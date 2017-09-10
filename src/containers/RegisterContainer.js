/**
 * Created by phanmduong on 9/4/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterComponent from '../components/RegisterComponent';
import * as showResultAction from '../actions/showResultAction'

class RegisterContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.register = this.register.bind(this);
    console.log('registercontainer',this.props);
  }

  register(data) {
    this.props.registerActions.register(data);
  }

  render() {
    return (
      <RegisterComponent
        register={this.register}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.register
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerActions: bindActionCreators(showResultAction, dispatch)
  }
    ;
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
