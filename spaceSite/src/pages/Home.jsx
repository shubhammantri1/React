import React, {Component} from 'react';
import Header from '../components/HomeCom/Header';
import HeroSection from '../components/HomeCom/HeroSection';
import Footer from '../components/HomeCom/Footer';
import InfoCard from '../components/HomeCom/InfoCard';


class Home extends Component{
    render(){
      return (
        <div className="container">
          <Header />
          <HeroSection />
          <InfoCard />
          <Footer />          
        </div>
      )
    }
}

export default Home;