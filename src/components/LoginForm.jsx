import React, { Component } from 'react';
import styled from 'styled-components';
// import material ui components
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import CircularProgress from '@material-ui/core/CircularProgress';

const ButtonWrapper = styled.div`
  position: relative;

  .CircularProgress {
    color: ${props => props.theme.accent};
    left: 30px;
    position: absolute;
    top: 5px;
  }
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      username: '',
      password: ''
    };

    this.state = this.initialState;
  }

  handleChange = inputName => event => {
    this.setState({
      [inputName]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.loginWithUsername(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl className="mui-form-control">
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
        </FormControl>
        <FormControl className="mui-form-control">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
        </FormControl>
        <ButtonWrapper>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={this.props.requestPending}
          >
            Login
          </Button>
          {this.props.requestPending && (
            <CircularProgress size={24} className="CircularProgress" />
          )}
        </ButtonWrapper>
      </form>
    );
  }
}

export default LoginForm;
