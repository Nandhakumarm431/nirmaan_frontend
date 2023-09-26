import React from 'react'
import BrowseJobs from '../HomeDiv/BrowseJobs/BrowseJobs'
import WeHiring from '../HomeDiv/WeHiring/WeHiring'
import Jobsofday from '../HomeDiv/JobsMarket/Jobsofday'
import HomeD from '../HomeDiv/HomeD'
const Page = () => {
    return (
        <>
            <HomeD />
            {/* <BrowseJobs /> */}
            <WeHiring />
            <Jobsofday />
        </>
    )
}

export default Page