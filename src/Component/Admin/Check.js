import React, { Component } from 'react';
import axios from 'axios';
class Check extends Component {
    
    
       state = {
          file:'',
          vid:''
        };
      
    
      onImageChange = (event) => {
      this.setState({
          file:event.target.files[0]
      })
      };
    
      
      onVideoChange = (event) => {
        this.setState({
            vid:event.target.files[0]
        })
        };
      
      onSubmit=(event)=>{
          event.preventDefault();
            let file= this.state.file;
            let vid= this.state.vid;

            let formData = new FormData()
          formData.append('image',file)
          formData.append('video',vid)

          axios.post('/check',formData)
          .then( (response)=> {
            this.setState({
                success:true,
            });
        })
        .catch( (error)=> {
            console.log(error);
        });
        }
    
      render() {
        return (
          <div className="mt-5 py-5 container" style={{marginTop: "500px"}}>
            <form onSubmit={this.onSubmit}>
              <input
                type="file"
                onChange={this.onImageChange}
              />
              <input
                type="file"
                onChange={this.onVideoChange}
              />
              <br />
                <input type="submit" value="bal"></input>

            </form>
          </div>
        );
      }
}

export default Check;