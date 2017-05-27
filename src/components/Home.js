import React, { Component } from 'react';
import sr from '../js/scrollReveal.js';
import Scroll from 'react-scroll';
import Particles from 'react-particles-js';

class Home extends Component {
    componentDidMount = () => {
        const config_slideInLeft = {
            origin: 'left',
            duration: 1000,
            delay: 50,
            distance: '300px',
            scale: 1,
            easing: 'ease',
            reset: true,
        }
        const config_slideInTop = {
            origin: 'top',
            distance: '700px',
            scale: 1,
            easing: 'ease',
            duration: 1000,
            delay: 500,
        }
        const config_fadeIn = {
            origin: 'bottom',
            duration: 1000,
            delay: 50,
            distance: '50px',
            scale: 1,
            easing: 'ease',
            reset: true,
        }
        sr.reveal(".experience-item", config_slideInLeft);
        sr.reveal("#section-1", config_slideInTop);
        sr.reveal(".section-3-icons", config_fadeIn);
    }
    render() {

        var Link = Scroll.Link; // Define <Link> for on-click scroll
        return (

            <div className="Home">
                {/*section-1*/}
                <div id="section-1" className="hp-background">
                    <Particles style={{ position: "absolute" }} />
                    <div className="padding-top-200px">
                        <div className="hp-textblock animated fadeInUp">
                            <h1 id="hp-greeting">WELCOME</h1>
                            <h1 id="hp-intro">I'M KEVIN.Z</h1>
                            <p id="hp-jobtitle">Web Developer</p>
                        </div>
                    </div>
                    <div className="hp-signin-signup center-block padding-top-40px">
                        <div className="padding-20px">
                            <button type="button" className="btn btn-outline-secondary disabled animated fadeInLeft" data-toggle="modal" data-target="">
                                Sign Up</button>
                        </div>
                        <div className="padding-20px">
                            <button type="button" className="btn btn-primary animated fadeInRight" data-toggle="modal" data-target="#login-modal">
                                Sign In</button>
                        </div>
                    </div>
                    <Link to="section-2" smooth={true} offset={-50} duration={500} id="hp-arrowdown">
                        <i className="fa fa-chevron-circle-down fa-3x animated bounce infinite" id="hp-downarrow" aria-hidden="true"></i>
                    </Link>
                </div>

                {/*section-2*/}
                <div className="projects padding-80px background-color-blue" id="section-2">
                    <div className="container">
                        <h1 className="display-4 center-block color-white">Projects</h1>
                        <hr />
                        <div id="hp-carsousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#hp-carsousel" data-slide-to={0} className="active" />
                                <li data-target="#hp-carsousel" data-slide-to={1} />
                                <li data-target="#hp-carsousel" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active embed-responsive embed-responsive-16by9">
                                    <img className="d-block img-fluid embed-responsive-item" src={require("../assets/homepage_carsousel/1.jpg")} alt="First slide" />
                                    <div className="carousel-caption d-md-block">
                                        <h3>KEVINNZ</h3>
                                        <p>Just a personal website.</p>
                                    </div>
                                </div>
                                <div className="carousel-item embed-responsive embed-responsive-16by9">
                                    <img className=" d-block img-fluid embed-responsive-item" src={require("../assets/homepage_carsousel/2.jpg")} alt="Second slide" />
                                    <div className="carousel-caption d-md-block">
                                        <h3>Workbook Online</h3>
                                        <p>A web based collaborative whiteboard application. Proposed by Ping Du, <a href="http://www.xorro.com/products/workbook">@Xorro</a></p>
                                    </div>
                                </div>
                                <div className="carousel-item embed-responsive embed-responsive-16by9">
                                    <img className=" d-block img-fluid embed-responsive-item" src={require("../assets/homepage_carsousel/3.jpg")} alt="Third slide" />
                                    <div className="carousel-caption d-md-block">
                                        <h3>MEET.U</h3>
                                        <p>A practice of building web social network with my developer friends. <a href="https://github.com/Mooophy">@Mooophy</a> <a href="https://github.com/rong4188">@rong4188</a> <a href="https://github.com/scottszb1987">@feedfedfat</a> <a href="https://github.com/Jinpeiqi">@Jinpeiqi</a> ...</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#hp-carsousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#hp-carsousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/*section-3*/}
                <div id="section-3" className="background-color-white">
                    <div className="container padding-80px">
                        <h1 className="display-4 center-block color-blue">About Me</h1>
                        <hr />
                        <div className="row padding-top-40px">
                            <div className="col-md-6 col-lg-5">
                                <div className="LI-profile-badge center-block" data-version="v1" data-size="large" data-locale="zh_CN" data-type="vertical" data-theme="light" data-vanity="kevinzhang1994"><a className="LI-simple-link" href="https://nz.linkedin.com/in/kevinzhang1994?trk=profile-badge">Yuxiang Zhang</a></div>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <p className="lead padding-20px"><br />Hiya! My name is Kevin Zhang. I am pursuing my Computer Science postgraduate study at Auckland University of Technology. <br />I have a great passion on coding and designing. Since in school, I have developed skills and experiences in a range of programming lanuages and software frameworks. <br /><br />
                                    <a className="btn btn-outline-danger" target="_blank" href="https://drive.google.com/open?id=0B4plXY9Tu-H6X1R6SEc0OEU3dU0"><i className="fa fa-file-pdf-o" aria-hidden="true" /> Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid color-white">
                        <div className="row">
                            <div className="section-3-icons col-sm-4 col-md-4 col-lg-4 center-block background-color-blue">
                                <i className="fa fa-database fa-3x" aria-hidden="true"></i><br /><p>Database Development</p>
                            </div>
                            <div className="section-3-icons col-sm-4 col-md-4 col-lg-4 center-block background-color-pink">
                                <i className="fa fa-desktop fa-3x" aria-hidden="true"></i><br /><p>Responsive Web Development</p>
                            </div>
                            <div className="section-3-icons col-sm-4 col-md-4 col-lg-4 center-block background-color-blue">
                                <img className="section-3-net-icon" src={require("../assets/homepage_section_3/net-icon.png")} /><br /><p>.NET Application / MVC Framework</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/*section-4*/}
                <div id="section-4" className="padding-80px background-color-white">
                    <div className="container">
                        <h1 className="display-4 center-block color-blue">
                            Experience
          </h1>
                        <hr />
                        <div ref="exp" className="experience-item">
                            <blockquote className="blockquote">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="lead color-blue">Nov, 2016 – Feb, 2017</p>
                                    </div>
                                    <div className="col">
                                        <strong>Web Developer (Internship)</strong>
                                    </div>
                                    <div className="col">
                                        <i className="fa fa-map-marker" aria-hidden="true" /> Xorro Solutions Ltd. Auckland
                </div>
                                    <div className="col-12">
                                        <footer className="blockquote-footer color-grey">During my study break, I joined Xorro team and worked as a full-time web developer. The project "Workbook Online" was a web application aimed to provide online collaborative diagraming and whiteboarding features. The project was built with Angular 2 + Ruby On Rails.</footer>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <div ref="exp" className="experience-item">
                            <blockquote className="blockquote">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="lead color-blue">Feb, 2017</p>
                                    </div>
                                    <div className="col">
                                        <strong>Personal Website</strong>
                                    </div>
                                    <div className="col-12">
                                        <footer className="blockquote-footer color-grey">This is a responsive designed personal website which is used to promote myself. The site is built with React + Bootstrap 4 + .NET Web API and planned to be deployed at AWS EC2. Temporary deploy: https://kevinzhang2012.github.io/kevinnz</footer>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <div ref="exp" className="experience-item">
                            <blockquote className="blockquote">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="lead color-blue">May, 2016</p>
                                    </div>
                                    <div className="col">
                                        <strong>Practice project “MeetU”</strong>
                                    </div>
                                    <div className="col-12">
                                        <footer className="blockquote-footer color-grey">A practice of building web social network with my developer friends. Implemented with AngularJS and .NET MVC with a responsive design. I took part in the front-end development.</footer>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                {/*footer_transparent*/}
                <div className="footer_transparent"></div>
                {/*Modal*/}
                <div className="modal fade" id="signup-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" id="signup-submit">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" id="login-submit">Login</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>







        );
    }
}

export default Home;