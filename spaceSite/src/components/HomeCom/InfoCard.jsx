import React, { Component } from 'react';

class InfoCard extends Component{
    render(){
        return(
        <div className="row">
            <div className="col-12 col-lg-4">
                <div className="card">
                    <img src={require("../../resources/images/home/certificate.png")} alt="certificate" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Get Certified</h5>
                        <p className="card-text">Get full certification for life in Zero G!</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card">
                    <img src={require("../../resources/images/home/instruction.png")} alt="instructor" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Learn From the Best</h5>
                        <p className="card-text">Our instructors are out of this world!</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card">
                    <img src={require("../../resources/images/home/job.png")} alt="job search" className="card-img-top"/>
                     <div className="card-body">
                        <h5 className="card-title">Job Guarantee</h5>
                        <p className="card-text">Reach for the Stars with your career!</p>
                    </div>
                </div>
            </div>
        </div>  
        )
    }
}

export default InfoCard; 