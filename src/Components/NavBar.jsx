import React from 'react';

import '../css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">CARO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"/>
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="/user/register">Don&#39;t have an account?</a>
                    </li>
                    <li className="nav-item">
                        <a href="/user/login" className="btn btn-outline-success">Login</a>
                    </li>
                    <li className="nav-item dropdow">
                        <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                            <span className="fas fa-user-tie"/> &nbsp;  
                            <strong>1612421</strong>
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
                                            <p className="text-left text-wrap"><strong>Nguyễn Ngọc Nghĩa</strong></p>
                                            <p className="text-left small text-wrap">correoonico123111@email.com</p>
                                            <p className="text-left">
                                                <a href="/" className="btn btn-primary btn-block btn-sm">Info</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="divider"/>
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
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;