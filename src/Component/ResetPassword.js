import React, {Component} from 'react';
import axios from "axios";
class ResetPassword extends Component {
    constructor(){
        super();
        this.state={
            token:'',
            email:'',
            password:'',
            password_confirmation:'',
            message:'',
            error:''
        }
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
            var data={
                token:this.state.token,
                email:this.state.email,
                password:this.state.password,
                password_confirmation:this.state.password_confirmation
            }
            axios.post('resetPassword',data)
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
                <div className="container">
                    <div className="row" style={{marginTop:"100px"}}>
                        <div className="col-lg-6 col-md-12 border py-5 bg-light">
                            <h2 className="text-center">Reset Password</h2>
                            <form onSubmit={this.formSubmit}  className="">
                                {message}
                                <div className="form-group">
                                    <label htmlFor="" className="">PIN CODE</label>
                                    <input type="number" name="token" onChange={this.onChangeHandeler} className="form-control" placeholder="Enter PIN CODE"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="">Email</label>
                                    <input type="email" name="email" onChange={this.onChangeHandeler} className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">New Password</label>
                                    <input type="password" name="password"onChange={this.onChangeHandeler} className="form-control" placeholder="Enter new password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" name="password_confirmation" onChange={this.onChangeHandeler} className="form-control" placeholder="Confirm password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control btn btn-success" value="Reset"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ResetPassword;