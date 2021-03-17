import React, { Component } from 'react';
import { Router, Route,Redirect, Switch,Link } from "react-router-dom";
import "../../css/AdminHeader.css"
class AdminHeader extends Component {
  state={
    tap:false
  }
  
  onClickHandeler=(x)=>{
    this.setState({
      tap:x
    })
  }

    render() {
        return (
            <>
              <nav class="navbar navbar-light  fixed-top" id="AdminHeader">

<div class="container px-5">
 <a href="" class="navbar-brand">
 Dashboard
</a>
<button class="navbar-toggler ml-auto" onClick={this.onClickHandeler.bind(this,!this.state.tap)}  type="button">
<span class="navbar-toggler-icon"></span>
</button>

</div>


<div class="px-5" id="headerDiv" style={{marginTop: this.state.tap? "0px" : ''}}>
<ul class="navbar-nav  ml-auto" style={{fontSize:"20px"}}>
              <li class="nav-item p-2">
                  <p><Link to="/addCategory">Add Category</Link></p>
              </li>
              <li class="nav-item p-2">
                  <p><Link to="/check">Check</Link></p>
              </li>
              <li class="nav-item p-2">
                
                  <p><Link to="/allCategory">All Category</Link></p>
               
              </li>
              <li class="nav-item p-2">
                  <p><Link to="/addNews">Add News</Link></p>
                
              </li>
              <li class="nav-item p-2">
                  <p><Link to="/allNews">All news</Link></p>
               
              </li>

              <li class="nav-item p-2">
                  <a href="http://localhost:8000" target="_blank">Admin</a>
               
              </li>
            </ul>
</div>
</nav> 
            </>
        );
    }
}

export default AdminHeader;