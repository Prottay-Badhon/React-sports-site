import React, {Component} from 'react';
import axios from 'axios'
import {Redirect} from "react-router-dom"
import "../css/ForgotPassword.css"
class ForgotPassword extends Component {
   
        state={
            email:"",
            message:"",
            error:'',
            click:this.props.click
        }
    
    onChangeHandeler=(event)=>{
            var inputName=event.target.name;
            var inputValue=event.target.value;
            this.setState({
                [inputName]:inputValue
            })
    }
    formSubmit=(e)=>{
            e.preventDefault();
            const data={
                email:this.state.email
            }
        axios.post('forgetPassword', data)
        .then( (response)=> {
            this.setState({
                message:response.data.message
            })
        })

        .catch( (error)=> {
            this.setState({
                error:error.response.data.message
            })
        })
    }
    render() {
        if(localStorage.getItem('token')){
            return <Redirect to="/profile"></Redirect>
        }
        let message;
        if(this.state.message){
                message=(
                    <div className="alert alert-primary" role="alert">
                        {this.state.message}
                    </div>
                )
        }
        if(this.state.error){
            message=(
                <div className="alert alert-danger" role="alert">
                    {this.state.error}
                </div>
            )
        }

       
        return (
            <>
                <div className="container" id="log">
                    <div className="row" style={{ marginTop: this.state.click ? "483px" : ""}}>
                        <div className="col-lg-12 col-md-12 border py-5 bg-light">
                            <h2 className="text-center">Forget Password</h2>
                            <form onSubmit={this.formSubmit}  id="forgetForm">
                                {message}
                                <div className="form-group">
                                    <label htmlFor="" className="">Email</label>
                                    <input type="email" onChange={this.onChangeHandeler} name="email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control btn btn-success" value="Submit"/>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>


            </>
        );
    }
}

export default ForgotPassword;