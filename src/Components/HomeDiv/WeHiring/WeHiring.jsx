import React from 'react'
import './wehiring.css'

const WeHiring = () => {
    return (
        <section className='section-box mb-30'>
            <div className="container">
                <div className='box-we-hiring'>
                    <div className="text-1">
                        <span className="text-we-are">We are</span>
                        <span className="text-hiring">Hiring</span>
                    </div>
                    <div className="text-2">Let’s &nbsp;
                        <span className="color-brand-1">Work&nbsp;</span>
                        Together&nbsp;<br /> &amp;
                        <span className="color-brand-1">&nbsp;Explore&nbsp;</span>
                        Opportunities
                    </div>
                    <div className="text-3">
                        <div className="btn btn-apply btn-apply-icon" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                            Apply now
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeHiring