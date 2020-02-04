import React, { Component } from 'react'

class Footer extends Component{
    render(){
       return(
           <div className="bg-light">
            <div className="container">
            <div className="row">
            <div className="col">
                <ul className="list-inline text-center">
                    <li className="list-inline-item"><a href="#">About Us</a></li>
                    <li className="list-inline-item">&middot;</li>
                    <li className="list-inline-item"><a href="#">Privacy</a></li>
                    <li className="list-inline-item">&middot;</li>
                    <li className="list-inline-item"><a href="#">Terms of Use</a></li>
                </ul>
            </div>
        </div>
    </div>  
  </div>
       )
    }
}

export default Footer;