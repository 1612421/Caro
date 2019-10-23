import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

// eslint-disable-next-line import/no-unresolved
import '../css/Login.css';

class Login extends Component {

    showErr = () => {
        const { err } = this.props;

        if (err && err.length !== 0){
            return  (
                <div className="alert alert-danger m-4 p-1" role="alert">
                    {
                        err.map((item, index) => (<div key={index}>{item}<br/></div>))
                    }
                </div>  
            )
        }
    }

    renderElement = () => {
        const { isAuthenticated } = this.props;
        if (isAuthenticated){
            return <Redirect to='/'/>
        }
        
        return (
            <div className="container">
                <div className="row h-100 my-auto">
                    <div className="card card-block mx-auto">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"/></span>
                                    </div>
                                    <input ref="account" type="text" className="form-control" placeholder="Account" required/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"/></span>
                                    </div>
                                    <input ref="password" type="password" className="form-control" placeholder="Password" required/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn float-right login_btn">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        {this.showErr()}
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don&#39;t have an account?<a href="/user/register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const postFields = {
            account: this.refs.account.value,
            password: this.refs.password.value
        }
        const { login } = this.props;
        login(postFields);

        return false;
    }

    render(){
        return this.renderElement();
    }
}

export default Login;