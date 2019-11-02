import React, { Component } from 'react';

import '../css/NavBar.css';

const image30 = {
    width: '30px',
    height: '30px',
}
const image100 = {
    width: '100px',
    height: '100px',
}

class NavBar extends Component {

    renderElement = () => {
        const { isAuthenticated, account, username, email, logout, avatar } = this.props;
        if (isAuthenticated){
            return (
                <ul className="nav navbar-nav navbar-right r-5">
                    <li className="nav-item dropdow r-3">
                        <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                            <img id="avatar" alt="User Pic" src={`http://localhost:3000/${avatar}`} className="rounded-circle mr-2" style={image30} />
                            <strong>{account}</strong> 
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                                <div className="navbar-login">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <p className="text-center">
                                            <img id="avatar" alt="User Pic" src={`http://localhost:3000/${avatar}`} className="rounded-circle mr-2" style={image100} />
                                            </p>
                                        </div>
                                        <div className="col-lg-8">
                                            <p className="text-left text-wrap"><strong>{username}</strong></p>
                                            <p className="text-left small text-wrap">{email}</p>
                                            <p className="text-left">
                                                <a href="/user/profile" className="btn btn-primary btn-block btn-sm">view</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="navbar-login navbar-login-session">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p>
                                                <button onClick={() => logout()} className="btn btn-danger btn-block" type="button">Logout</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }

        return (
            <ul className="nav navbar-nav navbar-right r-5">
                <li className="nav-item">
                    <a href="/user/login" className="btn btn-outline-success">Login</a>
                </li>
            </ul>
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
                {this.renderElement()}
            </div>
        </nav>
    );
    }
}

export default NavBar;