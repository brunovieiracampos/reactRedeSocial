import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './componentes/Login'
import Logout from './componentes/Logout'
import './css/reset.css'
import './css/timeline.css'
import './css/login.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

function verificaAutenticacao(nextState, replace) {
    if (localStorage.getItem('auth-token') === null) {
        replace('/');
    }
}

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/timeline" component={App} render={verificaAutenticacao} />
            <Route path="/timeline/:login" component={App}  />
            <Route path="/logout" component={Logout} />
        </Switch>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
