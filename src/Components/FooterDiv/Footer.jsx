import React from 'react'
import './footer.css'
import logo from '../../assets/images/nirmaan_logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Footer = () => {
    return (
        <footer className='footer mt-50'>
            <div className="container">
                <div className="row">
                    <div className='footer-col-1 col-md-3 col-sm-12'>
                        <a href="/">
                            <img alt="jobBox" className='logo-img' src={logo} />
                        </a>

                        <div className="mt-20 mb-20 color-text-paragraph-1">
                            <h6>CONTACT INFO</h6>
                            <p>Flat No. 401, Jaihind Enclave, <br/>
                             Madhapur, Hyderabad - 500081.<br/>
                             contact@nirmaan.org  </p>
                        </div>
                        <div className="footer-social">
                            <a className="icon-socials icon-facebook" href="https://www.facebook.com/nirmaanorg" target='_blank'></a>
                            <a className="icon-socials icon-twitter" href="https://twitter.com/Nirmaan_Org?lang=en" target='_blank'></a>
                            <a className="icon-socials icon-linkedin" href="#https://www.linkedin.com/company/nirmaanorganization/" target='_blank'></a>
                        </div>
                    </div>
                    <div className="footer-col-2 col-md-2 col-xs-6">
                        <h6 className="mb-20">Resources</h6>
                        <ul className="menu-footer">
                            <li><Link to="/aboutus">About us</Link></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-3 col-md-2 col-xs-6">
                        <h6 className="mb-20">Community</h6>
                        <ul className="menu-footer">
                            <li><a href="#">Feature</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Credit</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-4 col-md-2 col-xs-6">
                        <h6 className="mb-20">Quick links</h6>
                        <ul className="menu-footer">
                            <li><a href="#">iOS</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">Microsoft</a></li>
                            <li><a href="#">Desktop</a></li>
                        </ul>
                    </div>
                   

                </div>
            </div>
        </footer>
    )
}

export default Footer