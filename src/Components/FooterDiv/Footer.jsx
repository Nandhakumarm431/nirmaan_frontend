import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import certificate1 from '../../assets/images/certificate1.png'
import certificate2 from '../../assets/images/certificate2.png'


const Footer = () => {
    return (
        <footer className='footer mtop-50'>
            <div className="container">
                <div className="row">
                    <div className='footer-col-1 col-md-3 col-sm-12'>
                        {/* <a href="/">
                            <img alt="jobBox" className='logo-img' src={logo} />
                        </a> */}

                        <div className=" mb-20 color-text-paragraph-1">
                            <h5 className='heading-footer'>CERTIFICATES</h5>
                            <a href="/">
                                <img alt="jobBox" className='certificate2-img' src={certificate2} />
                            </a>
                            <a href="/">
                                <img alt="jobBox" className='certificate1-img' src={certificate1} />
                            </a>
                        </div>
                        <div className=" mb-20 color-text-paragraph-1">
                            <h5 className='heading-footer'>CONTACT INFO</h5>
                            <p>Flat No. 401, Jaihind Enclave, <br />
                                Madhapur, Hyderabad - 500081.<br />
                                contact@nirmaan.org  </p>
                            <div className="footer-social">
                                <Link className="icon-socials icon-facebook" to="https://www.facebook.com/nirmaanorg" target='_blank'></Link>
                                <Link className="icon-socials icon-twitter" to="https://twitter.com/Nirmaan_Org?lang=en" target='_blank'></Link>
                                <Link className="icon-socials icon-linkedin" to="#https://www.linkedin.com/company/nirmaanorganization/" target='_blank'></Link>
                            </div>
                        </div>

                    </div>
                    <div className="footer-col-2 color-text-paragraph-1">
                        <h5 className='heading-footer'>RESOURCES</h5>
                        <ul className="menu-footer">
                            <li><Link to="/aboutus">About us</Link></li>
                            <li><Link to="/aboutus">Contact</Link></li>
                        </ul>
                    </div>



                </div>
            </div>
        </footer>
    )
}

export default Footer