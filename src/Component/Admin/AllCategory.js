import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import AdminIndex from "./AdminIndex"
import axios from "axios";
import AdminHeader from "./AdminHeader"

import { Router, Route, Switch,Link} from "react-router-dom";

class AllCategory extends Component {

    state={
        category:[]
        
    }
    componentDidMount(){
        axios.get('allCategory')
        .then( (response)=> {
          this.setState({category:response.data})
        })
        .catch( (error)=> {
            console.log(error);
        });
    }

    deleteCategory=(id)=>{
        axios.get('deleteCategory'+id)
        .then( (response)=> {
            let category=this.state.category;
            for(var i=0;i<category.length;i++){
              if(category[i].id==id){
                category.splice(i,1);
                this.setState({category:category})
              }
            }
        })
        .catch( (error)=> {
            console.log(error);
        });
    }

    render() {
        const category=this.state.category;
        const allCategory=category.map((category,idx)=>{
                return(
                    
                        <tr>
                            <td>{category.id}</td>
                            <td>{category.category_name}</td>
                            <td>{category.description}</td>
                            <td>{category.publication_status}</td>
                        
                        <td>
                           <button onClick={this.deleteCategory.bind(this,category.id)} class="btn btn-danger btn-sm">Delete</button>
                            <Link to={`/editCategoryApi${category.id}`} class="btn btn-success btn-sm">Edit</Link>
                            {/*{`/editCategory/${category.id}`}*/}
                        </td>
                        </tr>
                    
                )
        })
        return (
            <>  
            
            <AdminHeader></AdminHeader>
                <div class="row p-4">
                <div class="container col-sm-12 col-lg-8">
                <div style={{marginTop:"100px"}} class="ml-lg-4">
                <table class="table table-striped responsive" width="600px">
                    <thead>
                        <tr>

                        <th scope="col">Category Id</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Publication status</th>
                        <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {allCategory}
                    </tbody>
                    </table>
                </div>
                </div>
                </div>
            </>
        );
    }
}

export default AllCategory;