import React, { Component } from 'react';
import { Router, Route,Redirect, Switch,Link } from "react-router-dom";
import "../css/Header.css";
import axios from "axios";
class Header extends Component {
    state={
        click:false,
        category:[]
    }

    onClickHandeler=(x)=>{
        this.props.setClick(x);
        this.setState({
            click:x
        })
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

    logout=()=>{
        localStorage.clear();
        this.props.setUser(null);
        this.setState({
            logout:true,
            
        })
        this.props.setClick(false);
    }
    render() {
        const category=this.state.category;
        const allCategory=category.map((category,idx)=>{
                return(
                <li class="nav-item p-2"><Link to={`/newsBycategory${category.id}`}>{category.category_name}</Link></li>
                )
        })
        let button;
        let profile;
        let register;
        if(this.state.logout){
            return(
                <Redirect to="/"></Redirect>
            )
        }
      if(localStorage.getItem('token')!='undefined'){
        
          button=(
            <li class="nav-item p-2"><Link onClick={this.logout}>logout</Link></li>

          )
          profile=(
            <li class="nav-item p-2"><Link to="/profile">Profile</Link></li>
          )
      }
      if(!localStorage.getItem('token')){
        button=(
            <li class="nav-item p-2"><Link to="/login">login</Link></li>

        )
        register=(
            <li class="nav-item p-2"><Link to="/register">Register</Link></li>
        )
      }
        return (
            <>
               <nav class="navbar bg-dark  navbar-dark  fixed-top navbar-expand-md" id="header" click={this.state.click}>

<div class="container px-5">
 <a href="" class="navbar-brand">
  Sports Site
<span>
    <i class='fas fa-futbol p-2'></i>
    <i class='fas fa-basketball-ball p-2'></i>
    <i class='fas fa-football-ball p-2'></i>
    <i class='fas fa-skiing p-2'></i>
</span>
</a>
<button class="navbar-toggler ml-auto" onClick={this.onClickHandeler.bind(this,!this.state.click)}  type="button">
<span class="navbar-toggler-icon"></span>
</button>

</div>

<div class="px-5" id="navDiv" style={{ marginTop: this.state.click ? "0px" : "",zIndex:this.state.click? "9999" : ""}}>
<ul class="navbar-nav  ml-auto" style={{fontSize:"20px"}}>
<li class="nav-item active p-2"><Link to="/">Home</Link></li>
{allCategory}
{button}
{profile}
{register}

<li class="nav-item p-2"><Link to="/admin">Admin</Link></li>
</ul>
</div>
</nav> 
            </>
        );
    }
}

export default Header;