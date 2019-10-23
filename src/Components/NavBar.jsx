import React, { Component } from 'react';

import '../css/NavBar.css';

class NavBar extends Component {

    renderElement = () => {
        const { isAuthenticated, account, username, email} = this.props;
        if (isAuthenticated){
            return (
                <li className="nav-item dropdow r-3">
                    <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <span className="fas fa-user-tie"/> &nbsp;  
                        <strong>{account}</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                            <div className="navbar-login">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p className="text-center">
                                            <span className="fas fa-user-tie icon-size"/>
                                        </p>
                                    </div>
                                    <div className="col-lg-8">
                                        <p className="text-left text-wrap"><strong>{username}</strong></p>
                                        <p className="text-left small text-wrap">{email}</p>
                                        {/* <p className="text-left">
                                            <a href="/" className="btn btn-primary btn-block btn-sm">Info</a>
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="navbar-login navbar-login-session">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p>
                                            <a href="/user/logout" className="btn btn-danger btn-block">Logout</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            );
        }

        return (
            <>
                <li className="nav-item">
                    <a className="nav-link" href="/user/register">Don&#39;t have an account?</a>
                </li>
                <li className="nav-item">
                    <a href="/user/login" className="btn btn-outline-success">Login</a>
                </li>
            </>
        );
    }

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">CARO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/game">Game</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right r-5">
                    {this.renderElement()}
                </ul>
            </div>
        </nav>
    );
    }
}

export default NavBar;