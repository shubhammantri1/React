import React, { Component } from 'react';

class InfoCard extends Component{
    render(){
        return(
        <div className="row">
            <div className="col-12 col-lg-4">
                <div className="card">
                    <img src={require("../../resources/images/lessons/suits.jpg")} alt="space suits" className="card-img-top"/>
                    <div className="card-body">
                    <h5 class="card-title">Dress for Space</h5>
                    <p class="card-text">Wardrobe essentials for the dapper space traveler</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card">
                    <img src={require("../../resources/images/lessons/spacewalk.jpeg")} alt="spacewalking astronaut" className="card-img-top"/>
                    <div className="card-body">
                        <h5 class="card-title">Spacewalking Essentials</h5>
                        <p class="card-text">Learn the basics of spacewalking before you    step outside the space station</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card">
                    <img src={require("../../resources/images/lessons/zerog.jpg")} alt="astronauts in zero-g" className="card-img-top"/>
                     <div className="card-body">
                        <h5 class="card-title">Exercise in Zero-G</h5>
                        <p class="card-text">Quick & easy exercises to keep your bones and muscles in shape</p>
                    </div>
                </div>
            </div>
        </div>  
        )
    }
}

export default InfoCard; 