import Axios from 'axios';
import React, { Component } from 'react';
import axios from "axios";
class NewsByCategory extends Component {
    state={
        cat:[]
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get('/newsByCategory'+id)
        .then((response)=>{
           this.setState({
               cat:response.data
           })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render() {
        let path="http://localhost:8000/";
        const category=this.state.cat;
        const allCategory=category.map((category,idx)=>{
                return(
                    <div>
                    <div class="media">
                    <img class="align-self-center mr-3 img-fluid" src={path+category.news_pic} alt="Generic placeholder image" style={{display:!category.news_pic? "none":"",height: "200px",width: "230px"}}/>
                    <div class="media-body">
                      <h5 class="mt-0">{category.headlines}</h5>
                      <p>{category.news_description}</p>
                    </div>
                    <video controls class="align-self-center" style={{display:!category.news_video? "none":"",height: "200px"}}>
								  <source src={path+category.news_video}/>
								  <source src={path+category.news_video} type="video/ogg"/>
								Your browser does not support the video tag.
							</video>
                     </div>
                     <br></br>
                     <hr></hr>
                    

                  </div>
                  
                        )
                 })
        return (
            <>
                <div class="container">
  	<div class="row" style={{marginTop: "100px"}}>
  		<div class="col-lg-12">

  			{allCategory}
  		</div>
          </div>
  		</div>
            </>
        );
    }
}

export default NewsByCategory;