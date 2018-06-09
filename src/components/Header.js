import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>
                      <div><strong>Hi there! Mako here. </strong></div>
                    </h1>
                    <br />
                    I'm a software developer based in Tokyo.
                    <br />
                    I write about <a href="">tech</a>, <a href="">games</a>, and <a href="">music</a>.
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
