import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <div className="footerWrapper" >
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-lg-9 contact">
                                <a href="mailto:kevinzhang2012@live.cn" className="color-white"><i className="fa fa-envelope" aria-hidden="true" /> kevinzhang2012@live.cn</a> <br /> <i className="fa fa-phone" aria-hidden="true" /> +642102890195 <br />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="footer-social-icon">
                                    <a className="color-white" href="https://www.linkedin.com/in/kevinzhang1994/" target="_blank"><i className="fa fa-linkedin-square fa-3x footer-icon-1" aria-hidden="true" /></a>
                                    <a className="color-white" href="https://github.com/kevinzhang2012" target="_blank"><i className="fa fa-github-square fa-3x footer-icon-2" aria-hidden="true" /></a>
                                </div>
                                <p className="footer-copyright"> ©2017 Yuxiang Zhang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;