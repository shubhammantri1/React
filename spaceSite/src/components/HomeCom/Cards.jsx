import React from 'react'

function Cards(props){
    return(
        <div className="col-12 col-lg-4">
            <div className="card">
                <img src={require("" + props.location)} alt="certificate" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;