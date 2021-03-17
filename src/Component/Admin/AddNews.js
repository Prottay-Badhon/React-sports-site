import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import axios from "axios";
import Check  from './Check';
import AdminHeader from "./AdminHeader"

class AddNews extends Component {

    state={
        categoryId:'',
        headlines:'',
        description:'',
       
        status:'',
        success:'',
        
        file:'',
        vid:''
    }

    
onChangeHandeler=(event)=>{
            var inputName=event.target.name;
            var inputValue=event.target.value;
            this.setState({
                [inputName]:inputValue
              });
             
}

    onImageChange = (event) => {
    this.setState({
        file:event.target.files[0]
    })
    };
  
    
    onVideoChange = (event) => {
      this.setState({
          vid:event.target.files[0]
      })
      };




formSubmit=(e)=>{
    let file= this.state.file;
    let vid= this.state.vid;

    let categoryId= this.state.categoryId;
    let headlines= this.state.headlines;
    let description= this.state.description;
    let status= this.state.status;


    let formData = new FormData()
  formData.append('newsPic',file)
  formData.append('newsVideo',vid)

  formData.append('categoryId',categoryId)
  formData.append('headlines',headlines)
  formData.append('description',description)
  formData.append('status',status)


    e.preventDefault();
    axios.post('uploadNews',formData)
        .then( (response)=> {
            document.getElementById('newsTable').reset();
            this.setState({
                success:response.data,
            });
        })
        .catch( (error)=> {
            console.log(error);
        });
}



    render() {
        let catName;
        if(this.props.cat){
            const category=this.props.cat;
             catName=category.map((category,idx)=>{
                return(                    
                            <option value={category.id}>{category.category_name}</option>
                )
                } 
           )}
       
        return (
            <>
                  <AdminHeader></AdminHeader>

            <div class="row py-5 px-3">
                <div class="col-lg-3">

                </div>
                <div class="col-lg-9">
                <form class="py-5 pr-3" onSubmit={this.formSubmit} enctype="multipart/form-data" id="newsTable">
                      
                      <div class="form-group pt-5">
                      <label class="">Category Name:</label>
                      <select class="form-control form-control-sm" id="exampleFormControlSelect1" name="categoryId" onChange={this.onChangeHandeler}>
                          {catName}
                       </select>
                      </div>

                      <div class="form-group">
                      <label class="">News Headlines:</label>
                      <textarea class="form-control" onChange={this.onChangeHandeler} name="headlines" rows="4"></textarea>
                      </div>

                      <div class="form-group">
                      <label class="">News Description:</label>
                      <textarea class="form-control" onChange={this.onChangeHandeler} name="description"   rows="10"></textarea>
                      </div>
                      
                      <div class="form-group">
                      <label for="exampleFormControlInput1">News Pic</label>
                      <input type="file" onChange={this.onImageChange}   accept="image/*" class="" id="exampleFormControlInput1" placeholder=""/>
                      </div>

                       <div class="form-group">
                      <label for="exampleFormControlInput1">News Video</label>
                      <input type="file"  onChange={this.onVideoChange} id="exampleFormControlInput1" placeholder=""/>
                      </div>

                           <div class="form-group px-3">
                          <input class="form-check-input " type="checkbox" value="1" onChange={this.onChangeHandeler} id="defaultCheck1" name="status"/>
                          <label class="form-check-label" for="defaultCheck1">
                          publication status
                          </label>
                      </div>
                      <div class="form-group">
                      <input type="submit" class="btn  btn-success" value="Add News"></input>
                      </div>
                     
                  </form>
                </div>
            </div>
 
            </>
        );
    }
}

export default AddNews;