import React, { Component } from 'react';
import Headlines from "../Headlines"
import Section1 from "../Section1"
import Section2 from "../Section2"
import VideoSection from "../VideoSection"
import FeaturesSection from "../FeaturesSection"
import Carousel from "../Carousel"
import Footer from "../Footer"
import Header from "../Header"

class Home extends Component {
    

    render() {
        
        return (
            <>
            <Header setClick={this.props.setClick}></Header>
            <Headlines></Headlines> 
            <Carousel badhon={this.props.click}></Carousel>
            <Section1></Section1>
            <Section2></Section2>
            <VideoSection></VideoSection>
            <FeaturesSection></FeaturesSection>
            <Footer></Footer>
            </>
        );
    }
}

export default Home;