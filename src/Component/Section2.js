import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
class Section2 extends Component {
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
        let path="https://react-sports-site-laravel.herokuapp.com/";
		const news=this.state.news;
        const allNews=news.map((news,idx)=>{
				return(
				<div class="col-lg-4">
				<Link to={`/readMore${news.news_id}`}>
				<div class="card">
					<img src={path+news.news_pic} alt="" class="img-fluid" style={{height:"300px"}}/>
					<div class="card-body">
						<div class="card-title">
							{news.headlines}
						</div>
						<br/>
				
						<br/>
						<br/>
						Category:{news.category_name}
						<br/>
						<br/>

						<p>Read More</p>
					</div>
				</div>
				</Link>

				
			</div>
				)
		 })
        return (
            <>
               <section  id="cardSection">
		<div class="container">
		
		<div class="row py-5">
			{allNews}
		</div>

	</div>
</section> 
            </>
        );
    }
}

export default Section2;