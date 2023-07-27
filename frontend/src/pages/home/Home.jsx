import React from 'react'
import './Home.css'
import Logo from '../../components/template/Logo'
import Nav from '../../components/template/Nav'
import Footer from '../../components/template/Footer'
import RoutesApp from '../../main/Routes'

const Home = () => {
    return (
        <div className='app'>
            <Logo />
            <Nav />
            <RoutesApp />
            <Footer />
        </div>
    );
};

export default Home;