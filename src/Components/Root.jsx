import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from '../history';

import Login from '../containers/Login';
import Register from '../containers/Register';
import GameOnline from '../containers/GameOnline';
import NavBar from './NavBar';
import Home from './Home';
import Profile from '../containers/Profile';

const Root = (props) => {
    const { isAuthenticated, account, username, email, logout, avatar} = props;
    return (
        <>
            <ToastContainer/>
            <NavBar isAuthenticated={isAuthenticated}
                    account={account}
                    username={username}
                    email={email}
                    logout={logout}
                    avatar={avatar}/>
            <Router history={history}>
                <Switch>
                    <Route exact path="/user/login">
                        <Login isAuthenticated={isAuthenticated}/>
                    </Route>
                    <Route exact path='/user/register'>
                        <Register isAuthenticated={isAuthenticated}/>    
                    </Route>
                    <Route exact path='/user/profile'>
                        <Profile/>    
                    </Route>
                    <Route exact path="/game">
                        <GameOnline/>
                    </Route>
                    <Route exact path="/">
                        <Home isAuthenticated={isAuthenticated}/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Root;