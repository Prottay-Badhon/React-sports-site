import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader"
import axios from "axios";
import {Redirect} from "react-router-dom";
class EditCategory extends Component {
    state={
       
       
            categoryName:'',       
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
        const id=this.props.match.params.id;
        e.preventDefault();
        const data={
            categoryName:this.state.categoryName,
            description:this.state.description,
            publication_status:this.state.publication_status

        }
        axios.post('/updateCategoryApi'+id,data)
            .then( (response)=> {
                document.getElementById('categoryForm').reset();
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
        axios.get('/editCategoryApi/'+id)
        .then( (response)=> {
         this.setState({
            categoryName:response.data.category_name,
            description:response.data.description,
            publication_status:response.data.publication_status
         })
        })
        .catch( (error)=> {
            console.log(error);
        });
    }
    render() {
        if(this.state.success){
            return <Redirect to="/allCategory"/>
        }
        return (
            <>
                <AdminHeader></AdminHeader>
                <div class="row py-5">

                    <div class="col-lg-3">
                    </div>
                    <div class="col-lg-9">
                    <form class="p-5" onSubmit={this.formSubmit} id="categoryForm">
                     
                        <div class="form-group">
                        <label class="">Category Name:</label>
                        <input type="text" onChange={this.onChangeHandeler} value={this.state.categoryName} class="form-control" 
                        name="categoryName" required placeholder="Enter category name"></input>
                        </div>
                        <div class="form-group">
                        <label class="">Category Description:</label>
                        <input type="text" onChange={this.onChangeHandeler} value={this.state.description} class="form-control" name="description" placeholder="Enter description"></input>
                        </div>
                        
                         <div class="form-group">
                            <input class="form-check-input " onChange={this.onChangeHandeler} value={this.state.publication_status} type="checkbox"  id="defaultCheck1" name="publication_status"/>
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

export default EditCategory;