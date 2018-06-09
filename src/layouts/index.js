import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'
import icon from '../../static/favicon.ico'

import Header from '../components/Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Helmet>
                  <link rel="icon" type= "image/png" href={icon} />
                </Helmet>
                <Header />
                {children()}
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func
}

export default Template
