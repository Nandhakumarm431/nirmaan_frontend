import React, { useState, useEffect } from 'react'
import './jobofday.css'
import finance from '../../../assets/images/finance.svg';
import imgChart from '../../../assets/images/img-chart.png';
import controlcard from '../../../assets/images/controlcard.png';
import img1 from '../../../assets/images/img1.png';
import { Link } from "react-router-dom"

// import marketing from '../../../assets/images/marketing.svg';
// import human from '../../../assets/images/human.svg';
// import retail from '../../../assets/images/retail.svg';
// import management from '../../../assets/images/management.svg';
// import content from '../../../assets/images/content.svg';
// import brandimg from '../../../assets/images/brand-1.png';

const Jobsofday = () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    const [jobCategoryDetails, setJobCategoryDetails] = useState([]);

    const sampleCategory = [
        { id: 1, category_name: 'Example1' },
        { id: 2, category_name: 'Example2' }
    ]

    useEffect(() => {
        fetch(`${apiUrl}/getJobCategories`)
            .then(response => response.json())
            .then(data => {
                setJobCategoryDetails(data);
            }).catch(error => {
                setJobCategoryDetails(sampleCategory)

            });
    }, []);


    return (
        <section className='section-box mt-50'>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title mb-10 ">
                        Jobs of the day
                    </h2>
                    <p className="font-lg color-text-paragraph-3 ">
                        Search and connect with the right candidates faster.
                    </p>
                </div>
                <div className='mt-70'>
                    <div className='list-tabs mt-40  text-center'>
                        <ul className="nav nav-tabs" role="tablist">

                            {jobCategoryDetails === undefined ?
                                <></> :
                                jobCategoryDetails.map((item) => (
                                    <li key={item.id}>
                                        <Link className="active" to={{ pathname: '/Jobscard', state: { data: item.id, data2: 0, input: '' } }}>
                                            <img src={finance} alt="jobBox" />
                                            {item.category_name}</Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            <section className='section-box overflow-visible mt-100 mb-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-sm-12'>
                            <div className="box-image-job">
                                <img className="img-job-1" alt="jobBox" src={imgChart} />
                                <img className="img-job-2" alt="jobBox" src={controlcard} />
                                <figure >
                                    <img alt="jobBox" src={img1} />
                                </figure>
                            </div>
                        </div>
                        <div className='col-lg-5 col-sm-12'>
                            <div className='content-job-inner'>
                                <span className="color-text-mutted text-32">Millions Of Jobs. </span>
                                <h2 className="text-52 ">Find The One That’s <span className="color-brand-2">Right</span> For You</h2>
                                <div className="mt-40 pr-50 text-md-lh28 ">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</div>
                                <div className="mt-40">
                                    <div className='btns-view'>
                                        <Link className="btn btn-default" to={{ pathname: '/Jobscard', state: { data: 0, data2: 0, input: '' } }} >
                                            Search Jobs </Link>
                                        <a className="btn btn-link" href="/aboutus">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='section-box overflow-visible mt-50 mb-50'>
                <div className='container'>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="text-center">
                                <h1 className="color-brand-2"><span className="count">25</span><span> K+</span></h1>
                                <h5>Completed Cases</h5>
                                <p className="font-sm color-text-paragraph mt-10">We always provide people a
                                    <br className="d-none d-lg-block" />complete solution upon focused of
                                    <br className="d-none d-lg-block" /> any business</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="text-center">
                                <h1 className="color-brand-2"><span className="count">25</span><span> K+</span></h1>
                                <h5>Completed Cases</h5>
                                <p className="font-sm color-text-paragraph mt-10">We always provide people a
                                    <br className="d-none d-lg-block" />complete solution upon focused of
                                    <br className="d-none d-lg-block" /> any business</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="text-center">
                                <h1 className="color-brand-2"><span className="count">25</span><span> K+</span></h1>
                                <h5>Completed Cases</h5>
                                <p className="font-sm color-text-paragraph mt-10">We always provide people a
                                    <br className="d-none d-lg-block" />complete solution upon focused of
                                    <br className="d-none d-lg-block" /> any business</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="text-center">
                                <h1 className="color-brand-2"><span className="count">25</span><span> K+</span></h1>
                                <h5>Completed Cases</h5>
                                <p className="font-sm color-text-paragraph mt-10">We always provide people a
                                    <br className="d-none d-lg-block" />complete solution upon focused of
                                    <br className="d-none d-lg-block" /> any business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </section>
    )
}

export default Jobsofday