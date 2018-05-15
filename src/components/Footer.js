import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/MLSaito" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/mlsaito" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/mlsaito/" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:mlsaito@live.com?Subject=Hi%20Mako!" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
