import React from 'react';
import axios from 'axios';
class ResultComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log('resultcomponent', this.props);
    this.state = {
      status: '??',
      statusText: '??',
      token: 'token',
      facebook: '???'
    }
    axios.post(this.props.result.typeAction ? 'http://api.keetool.tk/login' : 'http://api.keetool.tk/user',
      this.props.result.typeAction ? this.props.result.login : this.props.result.register)
      .then((response) => {
        console.log('respone', response);
        this.setState({status: response.status});
        this.setState({statusText: response.statusText});
        this.setState({token: response.data.token});
        this.setState({facebook: response.data.user.facebook});
      }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    //console.log(this.props.result);
    return (
      <div>
        <h1>Result</h1>
        <h2>Status: {this.state.status}</h2>
        <h3>Status Text: {this.state.statusText}</h3>
        <h4>FaceBug: {this.state.facebook} </h4>
        <h5>Tokem: {this.state.token} </h5>
      </div>
    );
  }
}


export default ResultComponent;
