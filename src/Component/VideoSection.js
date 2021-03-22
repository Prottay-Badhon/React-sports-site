import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import "../css/Badhon.css";
class VideoSection extends Component {
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
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 500,
			rows: 1,
			slidesPerRow: 1
		  };

        let path="https://react-sports-site-laravel.herokuapp.com/";
		const news=this.state.news;
        const allNewsVideo=news.map((news,idx)=>{
			if(news.news_video){
				return(
				<div class="col-lg-4 col-sm-12">
				<Link to={`/readMore${news.news_id}`}>
				<div class="card border-0 mx-2 ">

							<video controls class="al" style={{height: "200px"}}>
								  <source src={path+news.news_video}/>
								  <source src={path+news.news_video} type="video/ogg"/>
								Your browser does not support the video tag.
							</video>
							
							<div class="card-body">
						<div class="card-title">
						<h2 class="">{news.headlines}</h2>
						</div>
					</div>
				</div>
				</Link>
				</div>


			

				)		
			}
				
		 })
        return (
            <>
              <section id="videoSection" class="bg-light mb-5">
	<div class="container">
		<br/>
		<h2 class="">Video Section</h2>
		<hr/>
		<div class="row">
		{allNewsVideo}

      </div>
          

      </div>

</section>  
            </>
        );
    }
}

export default VideoSection;