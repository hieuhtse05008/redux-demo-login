import React from 'react';
import axios from 'axios'
class RegisterComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log('registercomponent', this.props);
    this.state = {
      address: "Request failed with status code 401",
      confirm_password: "123456789",
      dob: "1997-08-08",
      email: "chanvl@email",
      facebook: "chanvl@email",
      gender: "1",
      how_know: "1",
      name: "chanvl@email",
      password: "123456789",
      phone: "0123456789",
      school: "chanvl@email",
      username: "chanvl@email",
      work : "chanvl@email"
    }



  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <div><div>User Name</div><input onChange={(e) => this.setState({ username : e.target.value})} /></div>
        <div><div>Email</div><input onChange={(e) => this.setState({ email : e.target.value})} /></div>
        <div><div>PassWord</div><input type='password' onChange={(e) => this.setState({ password : e.target.value})} /></div>
        <div><div>Confirm Password</div><input  type='password'  onChange={(e) => this.setState({ confirm_password  : e.target.value})} /></div>
        <div><div>Name</div><input onChange={(e) => this.setState({ name : e.target.value})} /></div>
        <div><div>Facebook</div><input onChange={(e) => this.setState({ facebook : e.target.value})} /></div>
        <div><div>Gender</div>FeMale?<input type='checkbox' onChange={(e) => this.setState({ gender : e.target.value})} /></div>
        <div><div>DOB</div><input onChange={(e) => this.setState({ dob : e.target.value})} /></div>
        <div><div>School</div><input onChange={(e) => this.setState({ school : e.target.value})} /></div>
        <div><div>Work</div><input onChange={(e) => this.setState({ work : e.target.value})} /></div>
        <div><div>Address</div><input onChange={(e) => this.setState({ address : e.target.value})} /></div>

        <button onClick={() => this.props.register(this.state)}> Submit</button>

      </div>
    );
  }
}


export default RegisterComponent;
