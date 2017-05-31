import React, { Component } from 'react';
import Scroll from 'react-scroll';

class Header extends Component {
    render() {
        var Link = Scroll.Link;
        return (
            // Navbar
            <div className="navbarWrapper">
                <nav className="navbar navbar-toggleable-sm navbar-inverse bg-faded fixed-top background-color-blue color-white">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <a className="navbar-brand" href="http://kevinzhang.top"><img className="logo-image-nav" src={require("../assets/logo.png")} /></a>
                        <div className="collapse navbar-collapse" id="navbar-content">
                            <ul className="nav navbar-nav mr-auto mt-2 mt-md-0 row">
                                <li className="nav-item col-md-3 col-lg-3">
                                    <Link activeClass="active" to="section-1" spy={true} smooth={true} offset={-50} duration={500} className="nav-link">HOME</Link>
                                </li>
                                <li className="nav-item col-md-3 col-lg-3">
                                    <Link activeClass="active" to="section-2" spy={true} smooth={true} offset={-50} duration={500} className="nav-link" >PROJECTS</Link>
                                </li>
                                <li className="nav-item col-md-3 col-lg-3">
                                    <Link activeClass="active" to="section-3" spy={true} smooth={true} offset={-50} duration={500} className="nav-link">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled"><i className="fa fa-camera-retro" aria-hidden="true"></i> GALLERY</a>
                                </li>
                            </ul>

                            <a className="color-blue" href="https://github.com/kevinzhang2012" target="_blank">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            <a className="color-blue" href="https://www.linkedin.com/in/kevinzhang1994/" target="_blank">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            <a className="color-blue" data-toggle="modal" data-target="#wechat-modal" href="/">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-weixin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>

                {/*modal to show wechat*/}
                <div id="wechat-modal" className="modal fade">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Wechat</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img className="wechat-contact" src={require("../assets/wechat_contact.jpeg")} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Header;