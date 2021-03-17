import React, { Component } from 'react';
import Slider from 'react-slick';
import "../css/Carousel.css"
class Carousel extends Component {
  state={
    click:this.props.badhon
  }
    render() {

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div class="row" id="carousel" style={{ marginTop: this.state.click ? "372px" : ""}}>
          <div class="col-lg-12">
          <Slider {...settings}>
          <div>
              <div class="">
              <img src="image/footballPic/slide1.jpg" alt="" class="img-fluid" 
              style={{width:"100%",height:"600px"}}/>

              <div class="carousel-caption mb-5 pb-5">
                <div class="">
                <h3 class="display-4"></h3>
               
                <button type="button" name="button" class="btn btn-danger">Read More</button>
              </div>
              </div>

            </div>  
          </div>
         
          <div>
              <div class="">
              <img src="image/cricket.jpg" alt="" class="img-fluid" 
              style={{width:"100%",height:"600px"}}/>

              <div class="carousel-caption mb-5 pb-5">
                <div class="">
                <h3 class="display-4"></h3>
                <button type="button" name="button" class="btn btn-danger">Read More</button>
              </div>
              </div>

            </div>  
          </div>
         
         
          <div>
              <div class="">
              <img src="image/footballPic/slide2.jpg" alt="" class="img-fluid" 
              style={{width:"100%",height:"600px"}}/>

              <div class="carousel-caption mb-5 pb-5">
                <div class="">
                <h3 class="display-4">Heading Three</h3>
                <button type="button" name="button" class="btn btn-danger">Read More</button>
              </div>
              </div>

            </div>  
          </div>
        </Slider>
          </div>
        </div>
        
      );
    
       
    }
}

export default Carousel;