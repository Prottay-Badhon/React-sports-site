import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import "../css/LoginPro.css"
class Login extends Component {
   
        state={
            email:'',
            password:'',
            error:'',
            click:this.props.click
        }

    
    onChangeHandeler=(event)=>{
       var inputName = event.target.name;
       var inputValue =  event.target.value;
       this.setState({[inputName]:inputValue});


    }
    formSubmit=(e)=>{
        e.preventDefault();
        const data={
            email: this.state.email,
            password:this.state.password
            
        }
        axios.post('login',data)
            .then( (response)=> {
                localStorage.setItem('token',response.data.Token);//token stored in localstorage
               if(response.data.Token){
                this.setState({
                    loggedIn:true,
                    verified:response.data.Token
                });
               }
               
                this.props.setUser(response.data.User);
            })

            .catch( (error)=> {
                this.setState({
                    error:error.response.error
                })
                
            });
    }

    render() {
        if(this.state.verified!=null){
            return <Redirect to="/profile"></Redirect>
        }
       
        let error;
        if(localStorage.getItem('token')=='undefined'){
            error=(
                <div className="alert alert-danger text-center" role="alert">
                   <p>wronginfo</p>
                </div>
            )
        }
       
        return (
            <>
                <Header></Header>
                <div className="container" id="log">
                <div className="row"  style={{ marginTop: this.state.click ? "483px" : ""}}>
                        <div className="col-lg-6 col-md-12 border py-5 bg-light">
                            <h2 className="text-center">Login Account </h2>
                            <form onSubmit={this.formSubmit}  className="">
                                {error}
                                <div className="form-group">
                                    <label htmlFor=""  style={{textAlign:"none"}} className="">Email: { this.state.email}</label>
                                    <input type="email" name="email" required onChange={this.onChangeHandeler} className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="password" required onChange={this.onChangeHandeler} className="form-control" placeholder="Enter password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control btn btn-success" value="login"/>
                                </div>
                                
                                <div className="form-group">
                                        <NavLink to="/forgetPassword" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                            Forgot Password?
                                        </NavLink>
                                        <NavLink to="/register" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                            Not register yet?
                                        </NavLink>

                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-group input-group-lg">
                                        <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-google"></i>
                                  </span>
                                            <a href="" className="btn btn-danger">login with google</a>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="input-group input-group-lg">
                                        <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-facebook"></i>
                                  </span>
                                            <a href="" className="btn btn-primary">login with Facebook</a>
                                        </div>

                                    </div>
                                </div>
                            </div>




                        </div>

                 </div>
                </div>
            </>
        );
    }
}

export default Login;