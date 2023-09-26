import React, { Component } from 'react'
import './contact.css'
import logo from '../../assets/images/nirmaan_logo.png';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import aboutImg from '../../assets/images/banner2-1-768x384.jpg'
// return () => {
//   switch (type) {
//     case 'info':
//       NotificationManager.info('Info message');
//       break;
//     case 'success':
//       NotificationManager.success('Success message', 'Title here');
//       break;
//     case 'warning':
//       NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//       break;
//     case 'error':
//       NotificationManager.error('Error message', 'Click me!', 5000, () => {
//         alert('callback');
//       });
//       break;
//   }

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      companyname: null,
      emailID: null,
      phonenumber: null,
      comments: null,
    }

  }

  // apiURL:process.env.REACT_APP_API_URL


  createNotification = (e) => {
    e.preventDefault();


    const ContactDets = {
      fullname: this.state.fullname,
      companyname: this.state.companyname,
      emailID: this.state.emailID,
      phonenumber: this.state.phonenumber,
      comments: this.state.comments
    }
    // if (ContactDets.fullname === null) {
    //   NotificationManager.warning('Please fill Contact Details');
    // } else {
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ContactDets),
    }

    fetch("https://nirmaanbackend.azurewebsites.net/addContactInfo", requestOptions)
      .then(response => response.json())
      .then(data => {
        // console.log(data);    
        window.location = "/aboutus";

        NotificationManager.success('Contact Details submitted');
      })
      .catch(error => {
        NotificationManager.error('Internal server error, Please try again later');
      })

    // }
    // NotificationManager.success('Contact Details submitted');

  }
  render() {

    return (
      <div className='main'>
        <div>
          <section className='section-box'>
            <div className='breacrumb-cover bg-img-about'>
              <div className="container">
                <div className="row">
                  <div className='flex-about'>
                    <div className="col-lg-6">
                      <h2 className="mb-10">About Us</h2>
                      <p className="font-lg color-text-paragraph-2">
                        Nirmaan Organization is a registered NGO, We work in the areas of Education, Skill Development & Entrepreneurship, Health and Wellbeing, Community Development and Social Leadership, In the past 18 years of journey, we have impacted the lives of 2.5+ million beneficiaries with the support of 500+ full time employees and 1000+ strong volunteer network, through various impact-oriented Flagship Programs & Social Leadership Initiatives benefiting Children, Women, Youth, Persons with Disabilities (PwDs), LGBTQ+ and Farmers from diverse social backgrounds across 22 States of India while partnering with 200+ Corporate, Government and Philanthropic partners. we have our presence in USA, UK, Australia, Singapore & UAE.

                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src={aboutImg} width='768px' height='384px' alt="" />
                    </div></div>
                </div>
              </div>
            </div>
          </section>
          <section className='section-box mt-80'>
            <div className='container'>
              <div className='box-info-contact'>
                <div className="row">
                  {/* 
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-30">

                    <img src={logo} alt="joxBox" />

                    <div className="font-sm color-text-paragraph">
                      H.No. 1-98/9/3, Flat No. 401, <br />
                      Plot No. 3, Jaihind Enclave, <br />
                      Madhapur, Hyderabad – 500081.<br />
                      Phone: +91 900-027-6903<br /> Email: contact@nirmaan.org
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                    <h6>USA</h6>
                    <p className="font-sm color-text-paragraph mb-20">
                      <a href="https://www.google.com/maps/place/7+Tralee+Ct,+Bloomington,+IL+61704,+USA/@40.4594006,-88.9262821,17z/data=!3m1!4b1!4m5!3m4!1s0x880b6549ad49eb8f:0x2f2f9bd96d716519!8m2!3d40.4594006!4d-88.9240934">
                        7 Tralee Ct Bloomington IL 61704,
                      </a><br />
                      Phone: +1 (980) 710-9667<br /> Email: nirmaanusa@nirmaan.org
                    </p>
                    <h6>New York</h6>
                    <p className="font-sm color-text-paragraph mb-20">
                      4517 Washington Ave.
                      <br className="d-none d-lg-block" /> Manchester, Kentucky 39495
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                    <h6>London</h6>
                    <p className="font-sm color-text-paragraph mb-20">
                      2118 Thornridge Cir. Syracuse,
                      <br className="d-none d-lg-block" /> Connecticut 35624
                    </p>
                    <h6>New York</h6>
                    <p className="font-sm color-text-paragraph mb-20">
                      4517 Washington Ave.
                      <br className="d-none d-lg-block" /> Manchester, Kentucky 39495
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                    <h6>London</h6>
                    <p className="font-sm color-text-paragraph mb-20">
                      2118 Thornridge Cir. Syracuse,
                      <br className="d-none d-lg-block" /> Connecticut 35624
                    </p>
                    <h6>New York</h6>
                    <p className="font-sm color-text-paragraph mb-20">
                      4517 Washington Ave.
                      <br className="d-none d-lg-block" /> Manchester, Kentucky 39495
                    </p>
                  </div>
                </div> */}
                  <div className="col-sm-4">
                    <div className="single-box text-center">
                      <p>&nbsp;</p>
                      <h3><span className="cd-words-wrapper"><b className="is-visible">ADDRESS</b></span></h3>
                      <h6><span className="cd-words-wrapper"><b className="is-visible">Nirmaan India</b></span></h6>
                      <p className="t"><span>H.No. 1-98/9/3, Flat No. 401, Plot No. 3, Jaihind Enclave, Madhapur, Hyderabad – 500081.</span></p>
                      <h6><span className="cd-words-wrapper"><b className="is-visible">Nirmaan USA</b></span></h6>
                      <p><a href="https://www.google.com/maps/place/7+Tralee+Ct,+Bloomington,+IL+61704,+USA/@40.4594006,-88.9262821,17z/data=!3m1!4b1!4m5!3m4!1s0x880b6549ad49eb8f:0x2f2f9bd96d716519!8m2!3d40.4594006!4d-88.9240934" target="blank">
                        <span >7 Tralee Ct Bloomington IL 61704</span></a></p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-box text-center">
                      <p>&nbsp;</p>
                      <h3><span className="cd-words-wrapper"><b className="is-visible">CALL US</b></span></h3>
                      <h6><span className="cd-words-wrapper"><b className="is-visible">Nirmaan India</b></span></h6>
                      <p><span >+91 900-027-6903</span><br />
                        <span >+91 4048552071</span></p>
                      <h6><span className="cd-words-wrapper"><b className="is-visible">Nirmaan USA</b></span></h6>
                      <p><span >+1 (980) 710-9667</span><br />
                        <span >+1 (309) 287-8382</span>
                      </p></div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-box text-center">
                      <p>&nbsp;</p>
                      <h3><span className="cd-words-wrapper"><b className="is-visible">EMAIL US</b></span></h3>
                      <h6><span className="cd-words-wrapper"><b className="is-visible">Nirmaan India</b></span></h6>
                      <p><span >contact@nirmaan.org</span></p>
                      <h6><span className="cd-words-wrapper"><b className="is-visible">Nirmaan USA</b></span></h6>
                      <p><span >nirmaanusa@nirmaan.org</span></p>
                    </div>
                  </div>
                </div></div>
            </div>
          </section>
          <section className='section-box mt-70'>
            <div className="container">
              <div className="row">
                <div className='col-lg-8 mb-40'>
                  {/* <span className="font-md color-brand-2 mt-20 d-inline-block">Contact us</span> */}
                  <h2 className="mt-5 mb-10">Keep in touch</h2>
                  <p className="font-md color-text-paragraph-2">The right move at the right time saves your investment. live
                    <br className="d-none d-lg-block" /> the dream of expanding your business.</p>
                  <form noValidate className='contact-form-style mt-30'>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="input-style mb-20">
                          <input className="font-sm color-text-paragraph-2"
                            onChange={(event) => { this.state.fullname = event.currentTarget.value; }}

                            name="name" placeholder="Enter your name" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="input-style mb-20">
                          <input className="font-sm color-text-paragraph-2"
                            onChange={(event) => { this.state.companyname = event.currentTarget.value; }}

                            name="name" placeholder="Company(Optional)" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="input-style mb-20">
                          <input className="font-sm color-text-paragraph-2"
                            onChange={(event) => { this.state.emailID = event.currentTarget.value; }}

                            name="name" placeholder="Your email" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="input-style mb-20">
                          <input className="font-sm color-text-paragraph-2"
                            onChange={(event) => { this.state.phonenumber = event.currentTarget.value; }}

                            name="name" placeholder="Phone Number" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="textarea-style mb-30">
                        <textarea className="font-sm color-text-paragraph-2"
                          onChange={(event) => { this.state.comments = event.currentTarget.value; }}

                          name="message" placeholder="Tell us about yourself">
                        </textarea>
                      </div>
                      <button className="submit btn btn-send-message" type="submit"
                        onClick={(e) => this.createNotification(e)}
                      >Submit</button>
                      <hr />
                      <NotificationContainer />

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div >
      </div >
    );
  }
}


export default Profile;