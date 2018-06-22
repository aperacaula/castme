import React, { Component } from "react";
import Header from "../header";
import logic from "../../logic";
import "./index.css";
import swal from 'sweetalert';
import {Link} from "react-router-dom"

class ProjectPage extends Component {
  state = {
    name: "",
    surname: "",
    profilePicture: "",
    title: "",
    publishedDate: "",
    endDate: "",
    province: "",
    description: "",
    castings: [],
    paid: "",
    professional: "",
    situation: ""
  };


  componentDidMount() {
    logic.retrieveProject(this.props.projectId)
    .then(
      ({
        title,
        publishedDate,
        endDate,
        province,
        description,
        castings,
        paid,
        professional,
        situation
      }) => {
        this.setState({
          title,
          publishedDate,
          endDate,
          province,
          description,
          castings,
          paid,
          professional,
          situation
        });
      })
    .then(()=>{
      if (logic.userId) {
        logic.retrieveUserLite(logic.userId)
          .then(({ name, surname, profilePicture }) => {
            this.setState({
              name,
              surname,
              profilePicture
            });
            return true
          })
            
      }
    });
 
    }
  
  printDate(date) {
    
    const day = Number(date.substring(8, 10));
    const month = Number(date.substring(5, 7));
    const year = Number(date.substring(0, 4));
    return `${day}/${month}/${year}`;
  }

  getPhysicalRequirements(casting){
    let requirements={};
    const keys= Object.keys(casting.physicalReq)
    for (let i=1; i<keys.length; i++){
        if (casting.physicalReq[keys[i]]){
            requirements[keys[i]] = casting.physicalReq[keys[i]]
        } else if (casting.physicalReq[keys[i]]===false){
            requirements[keys[i]] = "Strictly not visible"
        }
    }
    return requirements
  }

  writeRequirementTitle(string){
      let correctString=''
      if (string==='height')return "Minimum Height (m)"
    
      if (string==='weight')return "Approximate weight (kg)"

      if(string.toLowerCase !== string){
        correctString= string.replace(/([A-Z])/g, " $1" )
      }
      correctString= correctString[0].toUpperCase()+correctString.slice(1)
      return correctString
  }

  writeRequirementValue(value){
    
    if (value=== true)return "Yes, preferably"
  
    if (value=== false)return "Not required"

    return value
}

  joinCasting(userId, projectId, castingId){

    logic.joinCasting(userId, projectId, castingId)
      .then(()=>{
        swal({
          title: 'You joined the casting!',
          confirmButtonColor: '#59222A'
        }   
        )
      })
      .then(()=>{
        this.props.onHome(logic.userId)
      })
      .catch(err => {
        swal(err.message);
      });
  }

  loggedInCheck(casting){
    if(logic.userId){
      return <button className="link-style join-casting" onClick={()=> this.joinCasting(logic.userId, this.props.projectId, casting._id)}>Join Casting</button>
    }else{
      return <div className="register-message">You must be logged in to join castings. Not registered yet? <Link to="/register">Register</Link> first!<button className="link-style" onClick={this.props.onLogin}>Log In</button></div>
    }
  }

  render() {
    let professional
    if (this.state.professional){
        professional= 'Yes'
    }else{
        professional= 'No'
    }
    return (
      <div>
        <div id="wrapper-login">
          <Header
            profilePicture={this.state.profilePicture}
            name={this.state.name}
            surname={this.state.surname}
          />

          <div id="page">
            <div id="page-bgtop">
              <div id="page-bgbtm">
                <div className="post-home">
                  <div className="entry">
                    <h1 className="project-data">Title</h1>
                    <p className="project-info">{this.state.title}</p>
                    <h1 className="project-data">Description</h1>
                    <p className="project-info">{this.state.description}</p>
                    <h1 className="project-data">Opened from:</h1>
                    <p className="project-info">{this.printDate(this.state.publishedDate)}</p>
                    <h1 className="project-data">Closes on:</h1>
                    <p className="project-info">{this.printDate(this.state.endDate)}</p>
                    <h1 className="project-data">Professional</h1>
                    <p className="project-info">{professional}</p>
                    <h1 className="project-data">Castings:</h1>
                    <div className="project-info castings">{this.state.castings.map((casting, i)=>{
                        
                        return (
                        <div className="casting-box" key={i}>
                            <header className="casting-title">
                                <b >{casting.title}</b>: {casting.sex}
                            </header>
                            <section className="casting-body">
                                <p key={i+2}><b>Age rank:</b> {casting.minAge}-{casting.maxAge}</p>
                                <p key={i+3}><b>Description:</b> {casting.description}</p>
                                <div key={i+4}>{Object.keys(this.getPhysicalRequirements(casting)).map((requirement,i)=>{
                                    return <p key={i}><b>{this.writeRequirementTitle(requirement)}</b>:   {this.writeRequirementValue(this.getPhysicalRequirements(casting)[requirement])}</p>
                                })}</div>
                                <p key={i+5}><b>Number of Applicants:</b> {casting.applicants.length}</p>
                                {this.loggedInCheck(casting)}
                            </section>
                        
                        </div>
                    
                    
                    )
                    })}</div>
                  </div>
                </div>

                <div style={{ clear: "both" }}>&nbsp;</div>
              </div>
            </div>
          </div>

          <div className="three-columns" />
        </div>
        <div id="footer-project-list">
          <p>&copy; CastMe. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
