import React from 'react';
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react'

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

export default () => (
  <BrowserRouter>
    <div>
      <Menu pointing secondary>
        <Menu.Item name='dashboard'><Link to="/dashboard">Dashboard</Link></Menu.Item>
        <Menu.Item name='login'><Link to="/">Login</Link></Menu.Item>
        <Menu.Item name='Register'><Link to="/register">Register</Link></Menu.Item>
      </Menu>
      <Route exact path="/dashboard" render={ props => <Dashboard { ...props } />} />
      <Route exact path="/" render={ props => <Login { ...props } />} />
      <Route exact path="/register" render={ props => <Register {...props} /> }/>
    </div>
  </BrowserRouter>
)
