import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Header from "../header";
import logic from "../../logic";
import "./index.css";
import swal from 'sweetalert'

class Home extends Component {
  state = {
    name: "",
    surname: "",
    profilePicture: "",
    applications: "",
    threeProjects: []

  };

  componentDidMount() {
    if (this.props.onCorrection(this.props.userId)) {
      logic
        .retrieveUserLite(logic.userId)
        .then(({ name, surname, profilePicture, applications }) => {
          this.setState({
            name,
            surname,
            profilePicture,
            applications,

          });
        })
        .then(()=>{
          logic.getProjects().then(list => this.setState({ threeProjects: list.slice(list.length-3) }))
        })
    }
  }

  goToProjectInfo(projectId){
    return this.props.onProjectInfo(projectId)
  }

  printDate(date) {
    const day = Number(date.substring(8, 10));
    const month = Number(date.substring(5, 7));
    const year = Number(date.substring(0, 4));
    return `${day}/${month}/${year}`;
  }

  quitCasting(projectId, castingId){
    
    
    swal({
      title: "Are you sure you want to cancel your candidacy?",
      //buttons: true,
      buttons:{
        back: {
          text: "Back",
          value: false,
          color: "white"
        },
        confirm: true
      }
    }).then((value)=>{
    if (value){
    logic.quitCasting(logic.userId, projectId, castingId)
    .then(()=>{
      
      logic
        .retrieveUserLite(logic.userId)
        .then(({ name, surname, profilePicture, applications }) => {
          this.setState({
            name,
            surname,
            profilePicture,
            applications,

          });
        })

    })
  }

  })
    

  }

  render() {
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
                  <h2 className="title">
                    <a>Applications</a>
                  </h2>
                  <div className="entry">
                    <table className="applications">
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Published Date</th>
                          <th>End Date</th>
                          <th>Status</th>
                          <th>Role</th>
						              <th>Project Site</th>
                          <th>Remove Application</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.applications
                          ? this.state.applications.map(application => {
                              
                              return (
                                <tr>
                                  <td>{application.title}</td>
                                  <td>
                                    {this.printDate(application.publishedDate)}
                                  </td>
                                  <td>{this.printDate(application.endDate)}</td>
                                  <td>{application.situation}</td>
                                  <td>{application.casting.title}</td>
                                  <td>
                                    <button onClick={()=> this.goToProjectInfo(application._id.toString())} className="link-style">More Info</button>
                                  </td>
                                  <td>
                                    
                                    <button className="link-style" onClick={()=> this.quitCasting(application._id.toString(), application.casting._id.toString())}>Cancel</button>
                                  </td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                    {/* <p><img src={claqueta} alt="" width="225" height="225" className="alignleft" /> {this.state.surname}</p> */}
                  </div>
                </div>

                <div style={{ clear: "both" }}>&nbsp;</div>
              </div>
            </div>
          </div>
          {/*end #menu*/}
          <div className="three-columns">
            <h1 className="bottom-title">
              We think these might be interesting for you:
            </h1>
            {this.state.threeProjects.map((project,i)=>{
              return(
                <div className={`column${i+1}`} >
                <h3>{project.title}</h3>
                <p className="project-brief-description">
                {project.description}
                </p>
                <p>
                <button className="link-style" onClick={()=> this.goToProjectInfo(project._id.toString())}>Read More</button>
                </p>
                </div>
              )
            })}
          </div>
        </div>
        <div id="footer-login">
          <p>&copy; CastMe. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Home;
