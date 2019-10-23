import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './containers/Login';
import Register from './components/Register';
import Game from './containers/Game';
import NavBar from './containers/NavBar';
import Home from './components/Home';

import * as serviceWorker from './serviceWorker';
import Store from './store';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/user/login" component={Login}/>
                <Route path='/user/register' component={Register}/>
                <Route path="/game" component={Game}/>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
