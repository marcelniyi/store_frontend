import React, {Fragment} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../Store.scss';

const Footer = () => {
    return (
<div className="footer">
<footer className="text-white bg-primary" style={{fontSize: '.92em'}} id="footer-main">
        <div className>
            <div className="container">
                <div className="row align-items-center pt-md">
                    <div className="col-lg-4 order-1 order-lg-0 col-sm-12 mb-lg-0">
                        <a href="/">
                            <img className="d-none mt-4 d-lg-block" src="http://139.59.152.214:2992/static/build/images/logo_viebeg.008cc7558873297e4269b5989aef63a5.png"
                                 alt="Footer logo"
                                 style={{height: '40px'}}/>
                        </a>
                        <div className="footer_social mb-3 text-sm">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/Viebeg-Medical-353976595340596/" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ViebegM" target="_blank"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/11499454/admin/" target="_blank">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/viebeg.medical/" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 ">
                        <h5 className="font-weight-bolder text-white">Contact us</h5>
                        <ul className="list-unstyled font-weight-light">
                            <li><a className="text-light" href="/">+250 787 104 894</a></li>
                            <li><a className="text-light" href="/">office@viebeg.com</a></li>
                            <li><a className="text-light" href="/">Downtown Building 3rd Floor F 316</a></li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                        <h5 className="font-weight-bolder text-white">Viebeg</h5>
                        <ul className="list-unstyled font-weight-light">
                            <li><a className="text-light" href="http://viebeg.org/">Store</a></li>
                            <li><a className="text-light" href="http://viebeg.com/team/">Team</a></li>
                            <li><a className="text-light" href="http://viebeg.com/csr/">Csr</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                        <h5 className="font-weight-bolder text-white">About</h5>
                        <ul className="list-unstyled font-weight-light">
                            <li><a className="text-light" href="http://viebeg.com/about/">About us</a></li>
                            <li><a className="text-light" href="http://viebeg.com/why-africa/">Why Africa?</a></li>
                            <li><a className="text-light" href="http://viebeg.com/corporate-charter/">Corporate charter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div className="copyright text-center">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                        <div className="copyright_content">

                            Copyright &copy; {new Date().getFullYear()}


                        </div>





                    </div>
                </div>
            </div>
        </div>
  </div>

  </div>

);
};

export default Footer;
