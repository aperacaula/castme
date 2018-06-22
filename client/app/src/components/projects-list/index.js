import React, { Component } from "react";
import logic from "../../logic";
import Header from "../header";
//import { Link } from "react-router-dom";
import "./index.css";

class ProjectList extends Component {
  state = {
    name:'',
    surname: '',
    profilePicture: '', 
    list: []
  };

  printDate(date) {
    const day = Number(date.substring(8, 10));
    const month = Number(date.substring(5, 7));
    const year = Number(date.substring(0, 4));
    return `${day}/${month}/${year}`;
  }

  componentWillMount() {
    return logic.getProjects().then(list => this.setState({ list }));
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

  goToProjectInfo(projectId){
    return this.props.onProjectInfo(projectId)
  }

  render() {
    return (
      <div>
        <div id="wrapper-login">
          <Header 
            profilePicture={this.state.profilePicture}
            name={this.state.name}
            surname={this.state.surname}/>

          <div id="page">
            <div id="page-bgtop">
              <div id="page-bgbtm">
                <div className="post-home">
                  <div className="entry">
                    <table className="applications">
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Published Date</th>
                          <th>End Date</th>
                          <th>Status</th>
                          <th>Roles</th>
                          <th>Project Site</th>
                        </tr>
                      </thead>
                      <tbody id="projects">
                        {this.state.list.map(project => {
                          return (
                            <tr>
                              <td>{project.title}</td>
                              <td>{this.printDate(project.publishedDate)}</td>
                              <td>{this.printDate(project.endDate)}</td>
                              <td>{project.situation}</td>
                              <td>
                                {project.castings.map(casting => {
                                  return (
                                    <span>
                                      {casting.title}
                                      <br />
                                    </span>
                                  );
                                })}
                              </td>
                              <td>
                                <button  onClick={()=> this.goToProjectInfo(project._id.toString())} className="link-style">More Info</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {/* <p><img src={claqueta} alt="" width="225" height="225" className="alignleft" /> {this.state.surname}</p> */}
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

export default ProjectList;
