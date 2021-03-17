import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header'
class Profile extends Component {   
   state={
       click:this.props.click
   }
    render() {
       let name;
       let email;
        if(this.props.user){
            name=this.props.user.name;
            email=this.props.user.email;

        }
        if(localStorage.getItem('token')==='undefined'){
            return <Redirect to={'/login'}/>
            
        }
        return (
            <>
                <Header></Header>
                <div className="container" style={{ marginTop: this.state.click ? "483px" : ""}}>
                    <div className="row"  style={{marginTop:"100px"}}>
                        <div className="col-lg-12 col-md-12 border py-5 bg-light px-5">
                            <h2 className="">Profile</h2>
                            <p className="">
                                <li className="">Name:{name}</li>
                                <li className="">Email:{email}</li>
                               
                            </p>
                        </div>
                    </div>

                </div>
            </>
        );
       
       
       
    }
}

export default Profile;