import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../containers/Login';
import Register from './Register';
import Game from '../containers/Game';
import NavBar from './NavBar';
import Home from './Home';

const Root = (props) => {
    const { isAuthenticated, account, username, email} = props;
    return (
        <BrowserRouter>
            <NavBar isAuthenticated={isAuthenticated}
                    account={account}
                    username={username}
                    email={email}/>
            <Switch>
                <Route path="/user/login">
                    <Login isAuthenticated={isAuthenticated}/>
                </Route>
                <Route path='/user/register' component={Register}/>
                <Route path="/game" component={Game}/>
                <Route path="/">
                    <Home isAuthenticated={isAuthenticated}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Root;