import React, { Component } from 'react';
import styled from 'styled-components';

import LoginForm from './LoginForm';

const StyledLogin = styled.div`
  background: white;
  box-shadow: 3px 5px 10px ${props => props.theme.black};
  color: ${props => props.theme.black};
  height: 500px;
  padding: 0 25px 0 25px;
  position: absolute;
  right: 0;
  top: -500px;
  transition: 0.3s ease-in top;
  width: 35vw;

  h2 {
    margin-top: 90px;
  }

  .mui-form-control {
    font-size: 1.25em;
    margin-bottom: 30px;
    width: 80%;
  }

  &.show {
    top: 0;
    transition: 0.3s ease-out top;
  }
`;

class Login extends Component {
  async loginWithUsername(creds) {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(creds)
    });
    const user = await res.json();

    console.log(user);
  }

  render() {
    return (
      <StyledLogin className={`StyledLogin ${this.props.show ? 'show' : ''}`}>
        <h2>Login or Sign Up</h2>
        <LoginForm loginWithUsername={this.loginWithUsername} />
        <br />
        - or -
        <br />
        Login with Facebook
      </StyledLogin>
    );
  }
}

export default Login;
