import React from 'react';

class LoginComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email : '123456789@gmail.com',
      password: '123456789'
    }
  }

  render() {

    return (
      <div>
        <h1>Login Form</h1>
        <div><div>Email</div><input onChange={(e) => this.setState({ email : e.target.value})} /></div>
        <div><div>PassWord</div><input onChange={(e) => this.setState({ password : e.target.value})} /></div>

        <button onClick={() => this.props.login(this.state)}> Submit</button>

      </div>
    );
  }
}


export default LoginComponent;
