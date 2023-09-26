import React, { useState, useEffect } from 'react'
import './browsejobs.css'
import { Link } from "react-router-dom"
import finance from '../../../assets/images/finance.svg';

// import marketing from '../../../assets/images/marketing.svg';
// import customer from '../../../assets/images/customer.svg';
// import lightning from '../../../assets/images/lightning.svg';
// import human from '../../../assets/images/human.svg';
// import retail from '../../../assets/images/retail.svg';
// import management from '../../../assets/images/management.svg';
// import security from '../../../assets/images/security.svg';
// import content from '../../../assets/images/content.svg';
// import research from '../../../assets/images/research.svg';


const BrowseJobs = () => {

    // const [allJobsDetails, setAllJobsDetails] = useState([]);
    const [jobCategoryDetails, setJobCategoryDetails] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

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

    // useEffect(() => {
    //     fetch(`${apiUrl}/getAlljobdet`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setAllJobsDetails(data);
    //         });
    // }, []);

    // const [countByLocation, setCountByLocation] = useState({});

    // useEffect(() => {
    //     // Calculate the counts for each location type
    //     const counts = allJobsDetails.reduce((acc, row) => {
    //         if (acc[row.job_source]) {
    //             acc[row.job_source]++;
    //         } else {
    //             acc[row.job_source] = 1;
    //         }
    //         return acc;
    //     }, {});

    //     setCountByLocation(counts);
    // }, [allJobsDetails]);



    return (
        <section className="section-box mt-80">
            <div className='section-box'>
                <div className='container'>
                    <div className="text-center">
                        <h2 className="section-title mb-10 ">
                            Browse by category</h2>
                        <p className="font-lg color-text-paragraph-2 ">
                            Find the job that’s perfect for you. about 800+ new jobs everyday
                        </p>
                    </div>
                    <div className='box-swiper mt-50'>
                        <div className='swiper-container swiper-group-5'>
                            <div className='swiper swiper-wrapper swiper-grid-jobobx swiper-initialized swiper-horizontal swiper-pointer-events pb-70 pt-5 swiper-backface-hidden'>
                                <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                    {jobCategoryDetails === undefined ?
                                        <></> :
                                        jobCategoryDetails.map((item) => (
                                            <div key={item.category_name} className="swiper-slide" style={{ width: "241.2px", marginRight: "30px" }}>
                                                <div className="swiper-slide hover-up"
                                                >
                                                    <Link className="active" to={{ pathname: '/Jobscard', state: { data: item.category_name, input: '' } }}>
                                                        <div className="item-logo">
                                                            <div className="image-left">
                                                                <img alt="jobBox" src={finance} /> 
                                                            </div>
                                                            <div className="text-info-right">
                                                                <h4>{item.category_name}</h4>
                                                                <p className="font-xs" key={item.job_source}>10<span> Jobs Available</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BrowseJobs