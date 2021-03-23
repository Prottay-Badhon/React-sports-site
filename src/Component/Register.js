import axios from 'axios';
import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import Header from './Header'
class Register extends Component {
    
        state={
        
            name:"",
            email:"",
            password:"",
            password_confirmation:""
        }

    

    onchangeHandeler=(event)=>{
           var inputName = event.target.name;
           var inputValue =event.target.value;
           this.setState({
               [inputName]:inputValue
             });
    }

    RegisterFrom=(e)=>{
        e.preventDefault();
        const data={
            name:this.state.name,
            email: this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation
        }
        axios.post('register', data)
        .then( (response)=> {

            localStorage.setItem('token',response.data.Token);//token stored in localstorage
            this.setState({
                loggedIn:true
            });
            this.props.setUser(response.data.User);
        })

        .catch( (error)=> {
            console.log(error);
            
        });
    }
    render() {
       if(localStorage.getItem('token')!='undefined'){
          
       }
        return (
            <>
               <Header></Header>
                <div className="container">
                    <div className="row" style={{marginTop:"100px"}}>
                        <div className="col-lg-6 col-md-12 border py-5 bg-light">
                            <h2 className="text-center">Register Account </h2>
                            <form onSubmit={this.RegisterFrom}  id="RegisterForm">
                                <div className="form-group">
                                    <label htmlFor="" className="">User Name</label>
                                    <input type="text" name="name" required onChange={this.onchangeHandeler} className="form-control" placeholder="Enter UserName"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="">Email</label>
                                    <input type="email" name="email" required onChange={this.onchangeHandeler} className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="password" required onChange={this.onchangeHandeler} className="form-control" placeholder="Enter password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" name="password_confirmation" required onChange={this.onchangeHandeler} className="form-control" placeholder="Confirm password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control btn btn-success" value="Register"/>
                                </div>

                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">

                        <table class="table table-dark responsive">
                                <thead>
                                    <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.name}</td>
                                        <td>{this.state.email}</td>
                                    </tr>
                                    
                                </tbody>
                                </table>




                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Register;