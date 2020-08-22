import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Manage from './manage/Manage';
import { Route, Redirect } from 'react-router-dom';

import { BrowserRouter, Switch } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('auth')
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/Login',
        state: { from: props.location }
      }} />
  )} />
)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/manage" component={Manage} />

      <App />
    </Switch>
  </BrowserRouter>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
