import React, { Component } from 'react';
import axios from "axios";
import Footer from "../Component/Footer"
class ReadMore extends Component {
        state={
            news:[]
        }
    
        componentDidMount(){
        const id=this.props.match.params.id;
            axios.get('newsById'+id)
            .then( (response)=> {
              this.setState({news:response.data})
            })
            .catch( (error)=> {
                console.log(error);
            });
        }
    render() {
        let path="https://react-sports-site-laravel.herokuapp.com/";
        let video;
        let image;
        if(this.state.news.news_pic){
            image= <img class="align-self-center mr-3 img-fluid" src={path+this.state.news.news_pic} alt="Generic placeholder image" style={{height: "500px",width: "530px"}}/>
        }
       if(this.state.news.news_video){
          
            video= <div class="card border-0">
            <video controls class="" style={{height: "200px"}}>
                  <source src={path+this.state.news.news_video}/>
                  <source src={path+this.state.news.news_video} type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
                        <div class="card-body">
                    <div class="card-title">
                    <h2 class="">{this.state.news.headlines}</h2>
                    </div>
                </div>
            </div>
           
       }
        return (
            <>     
  <div class="container">
  	<div class="row" style={{marginTop: "100px"}}>
  		
          <div className={this.state.news.news_pic || this.state.news.news_video ? "col-lg-6":"col-lg-0"}>
			 {image}
            <hr></hr>
           {video}
          </div>
          <div className={this.state.news.news_pic || this.state.news.news_pic ? "col-lg-6":"col-lg-12"}>
          <div class="media">
			  <div class="media-body">
			    <h5 class="mt-0">{this.state.news.headlines}</h5>
			    <p>{this.state.news.news_description}</p>
			  </div>
			</div>
          </div>
  		</div>
  		</div>
            <Footer></Footer>
            </>
        );
    }
}

export default ReadMore;