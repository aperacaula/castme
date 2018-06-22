import React, { Component } from "react";
import logic from "../../logic";
import Header from '../header'
import "./index.css";
import DropNCrop from "@synapsestudios/react-drop-n-crop";
import "@synapsestudios/react-drop-n-crop/lib/react-drop-n-crop.min.css";

class UploadPicture extends Component {
    urlImageDefault = "https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180"

    state = {
        result: this.urlImageDefault,
        image: null,
        filename: null,
        filetype: null,
        src: null,
        error: null,
        name: '',
        surname: '',
        profilePicture: ''
      }

  

  componentDidMount(){
    if (logic.userId){
        logic.retrieveUserLite(logic.userId)
            .then(({name, surname, profilePicture})=>{
                this.setState({
                    name,
                    surname,
                    profilePicture
                })
            })
    }

}
 

  clearImage = () => {
    this.setState({ result: this.urlImageDefault, image: "", filename: "", filetype: "", src: "", error: "" });
  }

  uploadHandler = (event) => {
    this.props.onUploadPicture(this.state.result)
  }

  onChange = value => {
    
    this.setState(value);
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <Header 
            profilePicture={this.state.profilePicture}
            name={this.state.name}
            surname={this.state.surname}/>

          <div id="page-login">
            
            <div className="post-login">
            <section className="images-menu">
              <DropNCrop
                maxFileSize={3145728}
                cropperOptions={{
                  aspectRatio: 1,
                  guides: true,
                  viewMode: 0,
                  autoCropArea: 0
                }}
                canvasHeight={"25vw"}
                canvasWidth={"25vw"}
                onChange={this.onChange}
                value={this.state}
              />
              <div>
                <img width="100px" src={this.state.result} alt=''/>
              </div>
              
              <div>
              <button className="link-style" onClick={this.uploadHandler}>Upload!</button>
              <button className="link-style" onClick={this.clearImage}>Clear</button>
              <button className="link-style" onClick={this.props.onRegister}>Back</button>
              </div>
            </section>
            </div>

          </div>
        </div>
        <div className="three-columns" >
        </div>
        <div id="footer">
          <p>&copy; CastMe. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default UploadPicture;
