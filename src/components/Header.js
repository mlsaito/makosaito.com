import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi there! Mako here, </strong><br />
                    I'm a software developer based in Tokyo.<br />
                    <br/>
                    I write about <a href="">tech</a>, <a href="">games</a>, and <a href="">music</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
