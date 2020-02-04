import React, { Component } from 'react'
import Header from '../components/LessonsCom/HeaderH'
import InfoCard from '../components/LessonsCom/InfoCardH'
import Footer from '../components/LessonsCom/FooterH'

class Lessons extends Component{
    render(){
        return(
            <div className ="container">
                <Header />
                <InfoCard />
                <Footer />
            </div>
        )
    }
}

export default Lessons;