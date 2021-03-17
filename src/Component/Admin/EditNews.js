import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import {Redirect} from "react-router-dom";

class EditNews extends Component {
    state={
       
        headlines:'',
        description:'',
        newsPic:'',
        newsVideo:'',
        status:'',
        success:''
    }

    onChangeHandeler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName[0]]:inputValue});
    }

    formSubmit=(e)=>{
        const id=this.props.match.params.id;
        e.preventDefault();
        const data={
            headlines:this.state.headlines,
            description:this.state.description,
            newsPic:this.state.newsPic,
            newsVideo:this.state.newsVideo,
            status:this.state.status
           

        }
        axios.post('/updateNewsApi'+id,data)
            .then( (response)=> {
                document.getElementById('newsForm').reset();
                this.setState({
                    success:true,
                });
            })
            .catch( (error)=> {
                console.log(error);
            });
    }

    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get('/editNewsApi/'+id)
        .then( (response)=> {
         this.setState({
            headlines:response.data.headlines,
            description:response.data.news_description,
            newsPic:response.data.news_pic,
            newsVideo:response.data.news_video,
            status:response.data.publication_status
         })
        })
        .catch( (error)=> {
            console.log(error);
        });
    }
    render() {
        if(this.state.success){
            return <Redirect to="/allNews"/>
        }
        return (
            <>

                <AdminHeader></AdminHeader>
                <div class="row py-5">

                    <div class="col-lg-3">
                    </div>
                    <div class="col-lg-9">
          
                    <form class="p-5" onSubmit={this.formSubmit} enctype="multipart/form-data" id="newsForm">
                      
                        

                        <div class="form-group">
                        <label class="">News Headlines:</label>
                        <textarea class="form-control" onChange={this.onChangeHandeler} name="headlines" rows="4" value={this.state.headlines}></textarea>
                        </div>

                        <div class="form-group">
                        <label class="">News Description:</label>
                        <textarea class="form-control" onChange={this.onChangeHandeler} value={this.state.description} name="description"   rows="10">
                            
                        </textarea>
                        </div>
                        
                        <div class="form-group">
                        <label for="exampleFormControlInput1">News Pic</label>
                        <input type="file" name="newsPic" onChange={this.onChangeHandeler} class="" id="exampleFormControlInput1" placeholder=""/>
                        </div>

                         <div class="form-group">
                        <label for="exampleFormControlInput1">News Video</label>
                        <input type="file" name="newsVideo" onChange={this.onChangeHandeler} id="exampleFormControlInput1" placeholder=""/>
                        </div>

                             <div class="form-group">
                            <input class="form-check-input " onChange={this.onChangeHandeler} type="checkbox" value="1" id="defaultCheck1" name="status"/>
                            <label class="form-check-label" for="defaultCheck1">
                            publication status
                            </label>
                        </div>
                        <div class="form-group">
                        <input type="submit" class="btn  btn-success" value="Update"></input>
                        </div>
                       
                    </form>
                </div>
            </div>            

   
            </>
        );
    }
}

export default EditNews;