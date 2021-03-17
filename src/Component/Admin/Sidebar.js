import React, { Component } from 'react';
import { Router, Route, Switch,Link} from "react-router-dom";
import logo from "../../../src/image/AdminLTELogo.png";
import user from "../../../src/image/user2.jpg";

class Sidebar extends Component {
  state={
    click:this.props.click,
    showSidebar:false
  }
  onClickHandeler=(x)=>{
    this.setState({
      showSidebar:x
    })
  }
    render() {
        return (
            <>
   <div class="col-lg-2" id="admin" style={{ marginTop: this.state.showSidebar && this.state.click? "400px" : "",marginTop: this.state.showSidebar ? "0px" : ""}}>
      <aside class="bg-warning  mt-5"  style={{height:"100%"}}>
    <a href="index3.html" class="brand-link">
      <img src={logo} alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style={{opacity:".8"}}/>
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>
              <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src={user} class="img-circle elevation-2" alt="User Image"/>
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <i class="fa fa-facebook-square text-primary"  style={{fontSize: "25px" }}></i>
                  <p><Link to="/addCategory">Add Category</Link></p>
              </li>
              <li class="nav-item">
                
                  <i class="far fa-circle nav-icon"></i>
                  <p><Link to="/allCategory">All Category</Link></p>
               
              </li>
              <li class="nav-item">
                  <i class="far fa-circle nav-icon"></i>
                  <p><Link to="/addNews">Add News</Link></p>
                
              </li>
              <li class="nav-item">
                  <i class="far fa-circle nav-icon"></i>
                  <p><Link to="/allNews">All news</Link></p>
               
              </li>

            </ul>
          </li>
         
        </ul>
      </nav>
    </div>
    <button href="" onClick={this.onClickHandeler.bind(this,!this.state.showSidebar)} class="btn btn-success">
       show sidebar
       <span><i class='fas fa-football-ball p-2'></i></span>
      </button>
  </aside>

      </div>
      
            </>
        );
    }
}

export default Sidebar;