import React, { useState, useEffect } from 'react'
import './home.css'
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import iconTop from '../../assets/images/icon-top-banner.png'
import iconbtm from '../../assets/images/icon-bottom-banner.png'
import { Link } from "react-router-dom"

const HomeD = () => {

    const [jobCategoryDetails, setJobCategoryDetails] = useState([]);
    const [locationDetails, setLocationDetails] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    const sampleCategory = [
        { id: 1, category_name: 'Example1' },
        { id: 2, category_name: 'Example2' }
    ]

    const sampleLocation = [
        { id: 1, location_name: 'Example1' },
        { id: 2, location_name: 'Example2' }
    ]

    const quickSearch = [
        { id: 1, searchname: 'Assistant Professor' },
        { id: 2, searchname: 'Project Engineer' },
        { id: 3, searchname: 'Junior Engineer' },
        { id: 4, searchname: 'Medical Officer' },
        { id: 5, searchname: 'Warder' },
        { id: 6, searchname: 'Conductor' },
    ]

    useEffect(() => {
        fetch(`${apiUrl}/getlocationDetls`)
            .then(response => response.json())
            .then(data => {
                setLocationDetails(data);
            })
            .catch(error => {
                setLocationDetails(sampleLocation)

            });
    }, []);

    useEffect(() => {
        fetch(`${apiUrl}/getJobCategories`)
            .then(response => response.json())
            .then(data => {
                setJobCategoryDetails(data);
            })
            .catch(error => {
                setJobCategoryDetails(sampleCategory)

            });
    }, []);

    const [selectedText, setSelectedText] = useState('');
    const [searchData, setsearchData] = useState('');

    const searchLocation = (e) => {
        const query = e.target.value
        setSelectedText(query);
    }

    const searchKeyword = (e) => {
        const query = e.target.value
        setsearchData(query);
    }


    return (
        <main className='main'>
            <div className="bg-homepage1"></div>
            <section className='section-box-home'>
                <div className='banner-hero hero-1'>
                    <div className='banner-inner'>
                        <div className="row">
                            <div className='col-xl-9 '>
                                <div className='block-banner'>
                                    <h1 className="heading-banner ">
                                        The
                                        <span className="color-brand-2">Easiest Way</span>
                                        <br className="d-none d-lg-block" />
                                        to Get Your New Job
                                    </h1>
                                    <div className="banner-description mt-20 " data-wow-delay=".1s">
                                        Each month, more than 3 million job seekers turn to
                                        <br className="d-none d-lg-block" />
                                        website in their search for work, making over 140,000
                                        <br className="d-none d-lg-block" />
                                        applications every single day
                                    </div>
                                    <div className='form-find mt-40'>
                                        <form>
                                            <div className="box-industry">
                                                <select className="form-input mr-10  input-industry"
                                                    value={selectedText} onChange={searchLocation}>
                                                    <option value="true">Choose a Category</option>
                                                    {jobCategoryDetails === undefined ?
                                                        <option value="true"></option> :
                                                        jobCategoryDetails.map((item) => (
                                                            <option key={item.category_name} value={item.category_name} className='option-item'>
                                                                {item.category_name}
                                                            </option>

                                                        ))}
                                                </select>
                                            </div>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 input-location"
                                                    value={selectedText} onChange={searchLocation} >
                                                    <option value="true">Choose a Location </option>
                                                    {locationDetails === undefined ?
                                                        <option value="true"></option> :
                                                        locationDetails.map((item) => (
                                                            <option key={item.location_name} value={item.location_name}>
                                                                {item.location_name}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                            <input value={searchData} onChange={searchKeyword}
                                                className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... "></input>
                                            <Link className="active"
                                                // to='/Jobscard' 
                                                to={{ pathname: '/Jobscard', state: { data: selectedText, input: searchData } }}>
                                                <button className="btn btn-default btn-find">Search</button>
                                            </Link>
                                        </form>
                                    </div>
                                    <div className="list-tags-banner mt-60 " data-wow-delay=".3s">
                                        <strong>Popular Searches:</strong>
                                        {quickSearch === undefined ?
                                            <a href='F'>sample</a> :
                                            quickSearch.map((item) => (
                                                <Link to={{ pathname: '/Jobscard', state: { data: selectedText, input: item.searchname } }}
                                                    key={item.id}>{item.searchname}, </Link>
                                            ))}
                                        {/* <a href="/Jobscard">Driver, </a><a href="/Jobscard">Junior Engineer, </a><a href="/Jobscard">Medical Officer, </a><a href="/Jobscard">PGT, </a><a href="/Jobscard">Sr Resident, </a><a href="/Jobscard">Staff Nurse, </a> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 d-none d-xl-block'>
                                {/* col-lg-12 d-xl-block col-md-6 */}
                                <div className="banner-imgs">
                                    <div className="block-1 shape-1">
                                        <img className="img-responsive" alt="jobBox" src={banner1} />
                                    </div>
                                    <div className="block-2 shape-2">
                                        <img className="img-responsive" alt="jobBox" src={banner2} />
                                    </div>
                                    <div className="block-3 shape-3">
                                        <img className="img-responsive" alt="jobBox" src={iconTop} />
                                    </div>
                                    <div className="block-4 shape-3">
                                        <img className="img-responsive" alt="jobBox" src={iconbtm} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-100"></div>
        </main>
    )
}

export default HomeD