import React, { Component } from 'react';
import axios from 'axios';
import "../css/Carousel.css"
class Headlines extends Component {
    state={
        news:[]
    }

	componentDidMount(){
        axios.get('allNews')
        .then( (response)=> {
          this.setState({news:response.data})
        })
        .catch( (error)=> {
            console.log(error);
        });
	}
    render() {
        var news=this.state.news;
        let headlines;
        headlines = news.map((news,idx)=>{

                return(
                    <a href="" class="text-danger">
                        {news.headlines+' '}   
                        <span class="text-primary px-3"></span>             
                   </a> 
                )
         })
        return (
            <>
            
                 <div class="container" id="head" style={{marginTop: "100px"}}>
                    <div class="row">
                        
                        <div class="col-lg-12">
                        <marquee behavior="" direction="" class=" font-weight-bold" style={{fontSize: "20px"}}>
                            <p class="px-3">{headlines}</p>
                        </marquee>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Headlines;