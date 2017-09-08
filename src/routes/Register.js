import React from 'react';
import { gql, graphql, } from 'react-apollo';
import { Button, Form, Input, } from 'semantic-ui-react';
import { Switch, Route, Redirect, } from 'react-router-dom';

import Dashboard from './Dashboard';

class Register extends React.Component {
  state = {
    shouldRedirect: false,
  }

  async handleSubmit(e) {
    e.preventDefault();
    const variables = JSON.parse(JSON.stringify({
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      phoneNumber: this.refs.phoneNumber.value,
    }))
    const response = await this.props.mutate({
      variables
    });
    this.setState({ 
      shouldRedirect: response ? true : false
    })
  }

  render() {
    return (
      <div>
        <form ref='registrationForm' onSubmit={ this.handleSubmit.bind(this) }>
          <input type='text' ref='username' placeholder='username' />
          <input type='text' ref='email' placeholder='email' />
          <input type='text' ref='firstName' placeholder='firstName' />
          <input type='text' ref='lastName' placeholder='lastName' />
          <input type='text' ref='phoneNumber' placeholder='phoneNumber' />
          <input type='password' ref='password' placeholder='password' />
          <input type='submit' />
        </form>
        {this.state.shouldRedirect && (<Redirect to='/dashboard' />
        )}
      </div>
    );
  }
}

const mutation = gql`
  mutation(
    $username: String!,
    $email: String!,
    $password: String!,
    $firstName: String!,
    $lastName: String!,
    $phoneNumber: String!
  ) {
      register(
        username: $username,
        email: $email,
        password: $password,
        firstName: $firstName,
        lastName: $lastName,
        phoneNumber: $phoneNumber) {
          id
        }
      }
`;

export default graphql(mutation)(Register);