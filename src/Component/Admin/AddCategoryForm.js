import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import axios from "axios";
import {Redirect} from "react-router-dom";
import AdminHeader from "./AdminHeader"

class AddCategoryForm extends Component {

        state={
            category:'',
            description:'',
            publication_status:'',
            success:''
        }
    onChangeHandeler=(event)=>{
            var inputName=event.target.name;
            var inputValue=event.target.value;
            this.setState({[inputName]:inputValue});
    }

    formSubmit=(e)=>{
        e.preventDefault();
        const data={
            category:this.state.category,
            description:this.state.description,
            publication_status:this.state.publication_status

        }
        axios.post('categoryInserted',data)
            .then( (response)=> {
                document.getElementById('categoryForm').reset();
                this.setState({
                    success:response.data,
                });
            })
            .catch( (error)=> {
                console.log(error);
            });
    }

    render() {
        let success;
        if(this.state.success){
            success =<div class="alert alert-primary mt-5" role="alert">
               Category inserted successfully check it out!
              </div>
        }
        
        return (
            <>
                <AdminHeader></AdminHeader>
                <div class="row">
                <div class="container col-lg-8 col-sm-12 ">
                    <form  onSubmit={this.formSubmit} id="categoryForm" style={{marginTop:"100px"}} class="ml-lg-5 px-4 py-4">
                        {success}
                        <div class="form-group">
                        <label class="">Category Name:{this.state.category}</label>
                        <input type="text" onChange={this.onChangeHandeler} class="form-control" name="category" required placeholder="Enter category name"></input>
                        </div>
                        <div class="form-group">
                        <label class="">Category Description:{this.state.description}</label>
                        <input type="text" onChange={this.onChangeHandeler} class="form-control" name="description" placeholder="Enter description"></input>
                        </div>
                        
                        <div class="form-group px-3">
                            <p>status:{this.state.publication_status}</p>
                            <input class="form-check-input " type="checkbox"  value="1" onChange={this.onChangeHandeler} id="defaultCheck1" name="publication_status"/>
                            <label class="form-check-label" for="defaultCheck1">
                            publication status
                            </label>
                        </div>
                        <div class="form-group">
                        <input type="submit" class="btn  btn-success" value="Add"></input>
                        </div>
                    </form>
                </div>
                </div>
            </>
        );
       
        
        
    }
}

export default AddCategoryForm;