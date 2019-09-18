import React, { Component } from "react";
import Button from 'components/atoms/Button'
import { connect } from "react-redux";
import { registerUserApi } from "config/redux/action";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    this.props.registerApi({email, password})
    this.setState({email:'',password:''})
  };
  render() {
    const { email, password } = this.state;    
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Pages</p>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Email"
            onChange={this.handleChangeText}
            value={email}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            onChange={this.handleChangeText}
            value={password}
          />
          <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}> </Button>
        </div>
      </div>
    );
  }
}

const reduxState =(state)=>({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) =>({
  registerApi : (data)=>dispatch(registerUserApi(data))
})

export default connect(reduxState,reduxDispatch)(Register);
