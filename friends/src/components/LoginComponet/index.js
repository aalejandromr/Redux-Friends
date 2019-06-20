import React from 'react';
import { connect } from 'react-redux'
import AppLoader from "../LoaderComponent"
import {Login} from "../../actions"

class LoginPage extends React.Component {

  state = {
    credentials: {
      username: "",
      password: ""
    }
  }
  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials, [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.Login(this.state.credentials)
    .then(() => {
      this.props.history.push('/');
    })
  }

  render()
  {
    if(this.props.isLogginIn) {
      return <AppLoader/>
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.changeHandler} value={this.state.credentials.username}/>
        <input type="password" name="password" onChange={this.changeHandler} value={this.state.credentials.password}/>
        <input type="submit" value="Log in" />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {Login})(LoginPage)