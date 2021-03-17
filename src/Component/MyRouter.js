import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cricket from "./pages/Cricket";
import Football from "./pages/Football";
import FootballPage2 from "./pages/FootballPage2";
import FootballPage3 from "./pages/FootballPage3";
import CricketPage2 from "./pages/CricketPage2";
import CricketPage3 from "./pages/CricketPage3";
import AdminIndex from "./Admin/AdminIndex";
import AllCategory from "./Admin/AllCategory";
import AddCategoryForm from "./Admin/AddCategoryForm";
import AddNews from "./Admin/AddNews";
import AllNews from "./Admin/AllNews";
import EditCategory from "./Admin/EditCategory";
import EditNews from "./Admin/EditNews";
import Register from "./Register";
import Profile from "./Profile";
import Header from "./Header";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ReadMore from "./ReadMore"
import Check from "./Admin/Check"
import NewsByCategory from "../Component/NewsByCategory"
import axios from "axios";
import {BrowserRouter} from "react-router-dom";

class MyRouter extends Component {
    state={
        category:[],
        user:{},
        click:false
    }
   
    componentDidMount(){
        axios.get('allCategory')
        .then( (response)=> {
          this.setState({category:response.data})
        })
        .catch( (error)=> {
            console.log(error);
        });
   
        axios.get('user')
        .then((response)=>{
            this.setUser(response.data);
           
        })
        .catch((error)=>{
            console.log(error);
        })

    }


    setUser=(person)=>{
        this.setState({user:person})
  }  

        setClick=(tap)=>{
            this.setState({
                click:tap
            })
        }

    render() {
        return (
            <>
                 <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={()=><Home click={this.state.click} setClick={this.setClick}/>}></Route>
                    <Route exact path="/cricket" component={Cricket}></Route>
                    <Route exact path="/football" component={Football}></Route>
                    <Route exact path="/FootballPage2" component={FootballPage2}></Route>
                    <Route exact path="/FootballPage3" component={FootballPage3}></Route>
                    <Route exact path="/CricketPage2" component={CricketPage2}></Route>
                    <Route exact path="/CricketPage3" component={CricketPage3}></Route>
                    
                    
                    <Route exact path="/admin" component={()=><AdminIndex  click={this.state.click}/> }/>
                    <Route exact path="/addCategory" component={AddCategoryForm}/>
                    <Route exact path="/allCategory" component={AllCategory}/>
                    <Route exact path="/editCategoryApi:id" component={EditCategory}/>
                    <Route exact path="/addNews" component={()=><AddNews cat={this.state.category}/>}/>
                    <Route exact path="/allNews" component={AllNews}/>
                    <Route exact path="/editNews:id" component={EditNews}/>


                    <Route exact path="/register" component={()=><Register user={this.state.user} setUser={this.setUser}/>} ></Route>
                    <Route exact path="/profile" component={()=><Profile user={this.state.user} setUser={this.setUser} click={this.state.click}/> }></Route>
                    <Route exact path="/logout" component={EditNews}/>
                    <Route exact path="/login" component={()=><Login user={this.state.user} setUser={this.setUser} click={this.state.click}/>}></Route>
                    <Route exact path="/forgetPassword" component={()=><ForgotPassword click={this.state.click}></ForgotPassword>}></Route>
                    <Route exact path="/resetPassword" component={ResetPassword}></Route>
                    <Route exact path="/readMore:id" component={ReadMore}></Route>
                    <Route exact path="/check" component={Check}></Route>

                    <Route exact path="/newsBycategory:id" component={NewsByCategory}></Route>
                    


                </Switch>
             <Header user={this.state.user} setUser={this.setUser} setClick={this.setClick}></Header>
     </BrowserRouter>
            </>
        );
    }
}

export default MyRouter;