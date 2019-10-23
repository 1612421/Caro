import React from 'react';

import '../css/Home.css';

const Home = () => {
    return (
    <header className="masthead">
        <div className="container">
        <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Caro WebGame!</div>
            <div className="intro-heading text-uppercase">It&#39;s Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-primary-yellow" href="/user/login">Login</a>
        </div>
        </div>
    </header>
    );
}

export default Home;