import React, { Component, Fragment } from 'react';
import AdminHeader from "./AdminHeader"
import Sidebar from "./Sidebar"
import Header from "../Header"

import { Router, Route, Switch,Link} from "react-router-dom";
import logo from "../../../src/image/AdminLTELogo.png";
import user from "../../../src/image/user2.jpg";
import "../../css/AdminIndex.css"
class AdminIndex extends Component {
  state={
    click:this.props.click,
    showSidebar:false
  }
  onClickHandeler=(x)=>{
    this.setState({
      showSidebar:x,
    })
  }
    render() {
        return (
    <>
    
    <Header></Header>
    <AdminHeader></AdminHeader>
    
    
    
     <div class="content-wrapper py-5 mb-5" style={{marginTop:"200px"}}> 
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
   

    
    <section class="content">
      <div class="container-fluid">
       
        <div class="row">
          <div class="col-lg-3">
            
            <div class="small-box bg-info">
              <div class="inner">
                <h3>150</h3>

                <p>Categories</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
            </div>
         
          <div class="col-lg-3">
          
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style={{fontSize: "20px"}}>%</sup></h3>

                <p>News</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
         
          <div class="col-lg-3 col-6">
            
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>Latest News</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
        
          <div class="col-lg-3 col-6">
            
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
         
        </div>
        
        </div>
        </section>
        </div>
      

       
            </>
        );
    }
}

export default AdminIndex;
