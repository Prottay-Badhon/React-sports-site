import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import axios from "axios";
import {Link} from "react-router-dom";
import AdminHeader from "./AdminHeader";
import "../../css/AllNews.css"
class AllNews extends Component {
    state={
        news:[]
    }

	componentDidMount(){
        axios.get('allNewsAdmin')
        .then( (response)=> {
          this.setState({news:response.data})
        })
        .catch( (error)=> {
            console.log(error);
        });
    }
    
    
    render() {
        let path="http://localhost:8000/";
        const news=this.state.news;
       
        const allNews=news.map((news,idx)=>{
				return(
                    <tr>
                    <td>{news.news_id}</td>
                    <td>{news.category_name}</td>

                    <td>{news.headlines}</td>
                    <td>{news.news_description}</td>
                    <td>
                    <img src={path+news.news_pic} alt=""/>
                    </td>

                <td>
                    <video controls class="">
                          <source src={path+news.news_video} type="video/mp4"/>
                          <source src={path+news.news_video} type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                </td>
                 
                       {news.publication_status}
                <td>
                    <Link to={"/editNews"+news.news_id} class="btn btn-success btn-sm">Edit</Link>
                    <Link to="/deleteNews" class="btn btn-danger btn-sm">delete</Link>
                    
                </td>
               
                </tr>
				)
         })
         
        return (
            <>
                     <AdminHeader></AdminHeader>
            <div class="row py-5">
                <div class="col-lg-3">
                </div>
                <div class="col-lg-9 py-5 pr-5 py-5">
                <table class="table table-striped responsive table-sm" id="fktable">
                    <thead>
                        <tr>

                        <th scope="col">News Id</th>
                        <th scope="col">News Category</th>

                        <th scope="col">News Headlines</th>
                        <th scope="col">Description</th>
                        <th scope="col">News pic</th>
                        <th scope="col">News video </th>

                        <th scope="col">Publication status</th>
                        <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                       
                        {allNews}
                     
                    </tbody>
                    </table>
                </div>
            </div>
                

            </>
        );
    }
}

export default AllNews;