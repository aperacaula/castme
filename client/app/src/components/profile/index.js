import React, { Component } from "react";
import logic from "../../logic";
import Header from "../header";
import swal from 'sweetalert'
import "./index.css"

class Profile extends Component {
  state = {
    name: "",
    surname: "",
    birthday: "",
    sex: "",
    twins: true,
    province: "Albacete",
    phone: 0,
    oldEmail:"",
    email: "",
    password: "",
    repeatpassword: "",
    height: 1.75,
    weight: "70",
    physicalCondition: null,
    eyeColor: null,
    hairColor: null,
    ethnicity: "none",
    beard: true,
    tattoos: true,
    piercings: true,
    profession: "other",
    singing: true,
    dancing: true,
    otherHab: "none",
    prevExp: 0,
    curriculum: "none",
    pics: "none",
    videobook: "none",
    oldProfilePicture: "none",
    profilePicture:'none',
    check: true
  };

  
  componentDidMount() {
    if (!logic.userId) {
      this.props.onBackLanding();
    } else {
      logic
        .retrieveUser(logic.userId)
        .then(({ email,
          personalData,
          physicalData,
          professionalData,
          videobookLink,
          pics,
          profilePicture,
           }) => {
          this.setState({
              name: personalData.name,
              surname: personalData.surname,
              birthday: personalData.birthday,
              sex: personalData.sex,
              twins: personalData.twins,
              province: personalData.province,
              phone: personalData.phone,
              oldEmail: email,
              email,
              height: physicalData.height,
              weight: physicalData.weight,
              physicalCondition: physicalData.physicalCondition,
              eyeColor: physicalData.eyes,
              hairColor: physicalData.hair,
              ethnicity: physicalData.ethnicity,
              beard: physicalData.beard,
              tattoos: physicalData.tattoos,
              piercings: physicalData.piercings,
              profession: professionalData.profession,
              singing: professionalData.singing,
              dancing: professionalData.dancing,
              otherHab: professionalData.otherHabilities,
              prevExp: professionalData.previousJobExperiences,
              curriculum: professionalData.curriculum,
              pics,
              videobook: videobookLink,
              profilePicture,
              
          });
          return true;
        });
    }
  }

  registerName = e => {
    const name = e.target.value;
    this.setState({ name });
  };
  registerSurname = e => {
    const surname = e.target.value;
    this.setState({ surname });
  };
  registerBirthday = e => {
    const birthday = e.target.value;
    this.setState({ birthday });
  };
  registerSex = e => {
    const sex = e.target.value;
    this.setState({ sex });
  };
  registerTwins = e => {
    const twins = e.target.value;
    if (twins === "true") {
      this.setState({ twins: true });
    } else {
      this.setState({ twins: false });
    }
  };
  registerProvince = e => {
    const province = e.target.value;
    this.setState({ province });
  };
  registerPhone = e => {
    const phone = e.target.value;
    this.setState({ phone });
  };
  registerEmail = e => {
    const email = e.target.value;
    this.setState({ email });
  };
  registerPassword = e => {
    const password = e.target.value;
    this.setState({ password });
  };
  // registerRepeatPassword = e => {
  //   const repeatpassword = e.target.value;
  //   this.setState({ repeatpassword });
  // };
  registerHeight = e => {
    const height = e.target.value;
    this.setState({ height });
  };

  registerWeight = e => {
    const weight = e.target.value;
    this.setState({ weight });
  };
  registerPhysicalCondition = e => {
    const physicalCondition = e.target.value;
    this.setState({ physicalCondition });
  };
  registerEyeColor = e => {
    const eyeColor = e.target.value;
    this.setState({ eyeColor });
  };
  registerHairColor = e => {
    const hairColor = e.target.value;
    this.setState({ hairColor });
  };
  registerEthnicity = e => {
    const ethnicity = e.target.value;
    this.setState({ ethnicity });
  };
  registerBeard = e => {
    const beard = e.target.value;
    if (beard === "true") {
      this.setState({ beard: true });
    } else {
      this.setState({ beard: false });
    }
  };
  registerTattoos = e => {
    const tattoos = e.target.value;
    if (tattoos === "true") {
      this.setState({ tattoos: true });
    } else {
      this.setState({ tattoos: false });
    }
  };
  registerPiercings = e => {
    const piercings = e.target.value;
    if (piercings === "true") {
      this.setState({ piercings: true });
    } else {
      this.setState({ piercings: false });
    }
  };
  registerProfession = e => {
    const profession = e.target.value;
    this.setState({ profession });
  };
  registerSinging = e => {
    const singing = e.target.value;
    if (singing === "true") {
      this.setState({ singing: true });
    } else {
      this.setState({ singing: false });
    }
  };
  registerDancing = e => {
    const dancing = e.target.value;
    if (dancing === "true") {
      this.setState({ dancing: true });
    } else {
      this.setState({ dancing: false });
    }
  };
  registerOtherHab = e => {
    const otherHab = e.target.value;
    this.setState({ otherHab });
  };
  registerPrevExp = e => {
    const prevExp = e.target.value;
    this.setState({ prevExp });
  };
  registerCurriculum = e => {
    const curriculum = e.target.value;
    this.setState({ curriculum });
  };
  registerPics = e => {
    const pics = e.target.value;
    this.setState({ pics });
  };
  registerVideobook = e => {
    const videobook = e.target.value;
    this.setState({ videobook });
  };

 

  saveChanges = e => {
    e.preventDefault();
    Promise.resolve()
      //.then(() => this.checkFields())
      .then(() => {
          const PersonalData = {
            name: this.state.name,
            surname: this.state.surname,
            birthDate: this.state.birthday,
            sex: this.state.sex,
            twins: this.state.twins,
            province: this.state.province,
            phone: this.state.phone
          };
          const PhysicalData = {
            height: this.state.height,
            weight: this.state.weight,
            physicalCondition: this.state.physicalCondition,
            eyes: this.state.eyeColor,
            hair: this.state.hair,
            ethnicity: this.state.ethnicity,
            beard: this.state.beard,
            tattoos: this.state.tattoos,
            piercings: this.state.piercings
          };
          const ProfessionalData = {
            profession: this.state.profession,
            singing: this.state.singing,
            dancing: this.state.dancing,
            otherHabilities: this.state.otherHab,
            previousJobExperiences: this.state.prevExp,
            curriculum: this.state.curriculum
          };


          logic
            .updateUser(
              this.state.oldEmail,
              this.state.email,
              this.state.password,
              this.state.password,
              PersonalData,
              PhysicalData,
              ProfessionalData,
              this.state.videobook,
              this.state.pics,
              this.state.profilePicture
            )
            .then(resp => {
              swal(
                "Changes have been saved ;)",

              )
                .then(this.props.history.push(`/home/${logic.userId}`))
                .then(() => sessionStorage.removeItem('profilePicture'))
                .then(this.setState({
                  profilePicture: "",
                }));
            })
            .catch(err => {
              this.setState({
                email: "",
                password:"",
                repeatpassword:'',
              });

              alert(err);
            });
        
      });
  };


writeProperBoolean(boolean){
  if (boolean) return 'Yes'
  return 'No'
}


  render() {
    return (
      <div>
        <Header
          profilePicture={this.state.profilePicture}
          name={this.state.name}
          surname={this.state.surname}
        />
        <section className="logout-unregister">
          <button className="link-style" onClick={this.props.logOut}>
            Log Out
          </button>
          <button className="link-style" onClick={() => this.props.unregister(this.state.email)}>
            Unregister
          </button>
        </section>

        <div id="page">
            <div id="page-bgtop">
              <div id="page-bgbtm">
                <div id="content">
                  <div className="post">
                    <h2 className="title">Profile Info</h2>
                    <div className="entry">

                      <form className="registration-register" onSubmit={this.acceptRegister}>
                        <section>
                          <h3 className="image-header">Profile Picture</h3>
                          <img
                            src={this.props.picture? this.props.picture : this.state.profilePicture}
                            className="profile-pic"
                            style={{ borderRadius: '50%' }}
                            alt=''
                          />
                          <button className="link-style" onClick={this.props.onClickUploadPicture}>Upload Picture</button>
                        </section>
                        <section id="Data">
                          <h2 id="PersonalData" className="section-header">
                            Personal Data
                            </h2>
                          <section>
                            <h3>Name:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="name"
                              id="name-input"
                              value={this.state.name}
                              onChange={this.registerName}

                            />
                            <h3>Surname:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="surname"
                              id="Lastname"
                              value={this.state.surname}
                              onChange={this.registerSurname}
                            />
                            <h3>Birthday:</h3>
                            <input
                              className="input-text"
                              type="date"
                              name="birthday"
                              onChange={this.registerBirthday}
                              
                             
                            />
                            <h3>Sex:</h3>
                            <select className="short-input" id="sexRadio" onChange={this.registerSex} >
                              <option value={this.state.sex} checked>{this.state.sex}</option>
                              <option value="male" >
                                Male
                                </option>

                              <option
                                value="female"

                              >
                                Female
                                </option>
                            </select>
                            <h3>Twins:</h3>
                            <select
                              className="text_input-register"
                              id="Twins"
                              onChange={this.registerTwins}
                            >
                              <option value={this.state.twins} checked>
                              {this.writeProperBoolean(this.state.twins)}
                                </option>
                              <option value="true">Yes</option>

                              <option value="false">No</option>
                            </select>

                            <h3>Province:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="province"
                              id="province-input"
                              value={this.state.province}
                              onChange={this.registerProvince}
                            />

                            <h3>Phone:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="phone"
                              id="phone-input"
                              value={this.state.phone}
                              onChange={this.registerPhone}
                            />

                            <h3>E-mail:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="email"
                              id="Email"
                              
                              onChange={this.registerEmail}
                              value={this.state.email}
                            />
                            {/* <h3>Password:</h3>
                            <input
                              type="password"
                              className="text_input-register"
                              name="password"
                              id="Password"
                              value="Insert password"
                              onChange={this.registerPassword}
                              value={this.state.password}
                            />
                            <h3>Repeat Password:</h3>
                            <input
                              type="password"
                              className="text_input-register"
                              name="repeat-password"
                              id="Password"
                              value="Insert password"
                              onChange={this.registerRepeatPassword}
                              value={this.state.repeatpassword}
                            /> */}

                            <hr className="horizontal-line" />
                          </section>

                          <h2 id="PhysicalData" className="section-header">
                            Physical Data
                            </h2>
                          <section>
                            <h3>Height:</h3>
                            <input
                              type="text"
                              className="short_input"
                              name="height-input"
                              value={this.state.height}
                              onChange={this.registerHeight}
                            />
                            <h3>Weight:</h3>
                            <input
                              type="number"
                              className="short_input"
                              name="weight-input"
                              value={this.state.weight}
                              onChange={this.registerWeight}
                            />
                            <h3>Physical Condition</h3>
                            <select
                              className="text_input-register"
                              name="PhysicalCondition"
                              onChange={this.registerPhysicalCondition}
                            >
                              <option value={this.state.physicalCondition} checked>{this.state.physicalCondition}</option>
                              <option value="muscular">Muscular</option>
                              <option value="fit">Fit</option>
                              <option value="fat/chubby">Fat/chubby</option>
                              <option value="average">Average</option>
                              <option value="thin/slim">Thin/slim</option>
                              <option value="null">None</option>
                            </select>
                            <h3>Eye Color:</h3>
                            <select
                              className="text_input-register"
                              name="Eyes"
                              onChange={this.registerEyeColor}
                            >
                              <option value={this.state.eyeColor} checked>{this.state.eyeColor}</option>
                              <option value="brown">Brown</option>
                              <option value="green">Green</option>
                              <option value="blue">Blue</option>
                              <option value="dark">Dark</option>
                              <option value="null">None</option>
                            </select>
                            <h3>Hair:</h3>
                            <select
                              className="text_input-register"
                              name="Hair"
                              onChange={this.registerHairColor}
                            >
                              <option value={this.state.hairColor} checked>{this.state.hairColor}</option>
                              <option value="brown">Brown</option>
                              <option value="blond">Blond</option>
                              <option value="dark/black">Dark/black</option>
                              <option value="ginger">Ginger</option>
                              <option value="bald">Bald</option>
                              <option value="buzzed">Buzzed</option>
                              <option value="white">White</option>
                              <option value="null">None</option>
                            </select>
                            <h3>Ethnicity:</h3>
                            <select
                              className="text_input-register"
                              name="Ethnicity"
                              onChange={this.registerEthnicity}
                            >
                              <option value={this.state.ethnicity} checked>{this.state.ethnicity}</option>
                              <option value="caucasian">Caucasian</option>
                              <option value="latino/hispanic">
                                Latino/hispanic
                                </option>
                              <option value="african">African</option>
                              <option value="asian">Asian</option>
                              <option value="indian">Indian</option>
                              <option value="arabic">Arabic</option>
                              <option value="other">other</option>
                            </select>
                            <h3>Beard:</h3>
                            <select
                              className="text_input-register"
                              name="Beard"
                              onChange={this.registerBeard}
                            >
                              <option value={this.state.beard} checked>{this.writeProperBoolean(this.state.beard)}</option>
                              <option value="true">Yes</option>
                              <option value="false">
                                No
                                </option>

                            </select>
                            <h3>Tattoos:</h3>
                            <select
                              className="text_input-register"
                              name="Tattoos"
                              onChange={this.registerTattoos}
                            >
                              <option value={this.state.tattoos} checked>{this.writeProperBoolean(this.state.tattoos)}</option>
                              <option value="true">Yes</option>
                              <option value="false">
                                No
                                </option>

                            </select>
                            <h3>Piercings:</h3>
                            <select
                              className="text_input-register"
                              name="Piercings"
                              onChange={this.registerPiercings}
                            >
                              <option value={this.state.piercings} checked>{this.writeProperBoolean(this.state.piercings)}</option>
                              <option value="true">Yes</option>
                              <option value="false">
                                No
                                </option>

                            </select>
                            <hr className="horizontal-line" />
                          </section>
                          <h2 id="ProfessionalData" className="section-header">
                            Professional Data
                            </h2>
                          <section>
                            <h3>Profession</h3>
                            <select className="text_input-register" name="Profession" onChange={this.registerProfession}>
                              <option value={this.state.profession} checked>{this.state.profession}</option>
                              <option value="actor/actress">
                                Actor/actress
                                </option>
                              <option value="model">Model</option>
                              <option value="singer">Singer</option>
                              <option value="dancer">Dancer</option>
                              <option value="musician">Musician</option>
                              <option value="other">Other</option>
                            </select>

                            <h3>Singing:</h3>
                            <select
                              className="text_input-register"
                              name="singing"
                              onChange={this.registerSinging}
                            >
                              <option value={this.state.singing} checked>{this.writeProperBoolean(this.state.singing)} </option>
                              <option value="true">Yes</option>
                              <option value="false">
                                No
                                </option>

                            </select>
                            <h3>Dancing:</h3>
                            <select
                              className="text_input-register"
                              name="dancing"
                              onChange={this.registerDancing}
                            >
                              <option value={this.state.dancing}  checked>{this.writeProperBoolean(this.state.dancing)}</option>
                              <option value="true">Yes</option>
                              <option value="false">
                                No
                                </option>

                            </select>
                            <h3>Other Habilities:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="other habilities"
                              value={this.state.otherHab}
                              onChange={this.registerOtherHab}
                            />

                            <h3>Previous experiences:</h3>
                            <input
                              type="number"
                              className="short_input"
                              name="Previous"
                              value={this.state.prevExp}
                              onChange={this.registerPrevExp}
                            />

                            {/* <h3>Curriculum:</h3>
                            <input type="file" name="CV" value={this.state.curriculum} onChange={this.registerCurriculum} /> */}

                            <hr className="horizontal-line" />
                          </section>
                          <h2 id="Media" className="section-header">
                            Media
                            </h2>
                          <section>
                            {/* <h3>Pictures:</h3>
                            <span>
                              (Pdf file gathering all the pictures you want to
                              show, small sized)
                              </span>
                            <input
                              className="text_input-register"
                              type="file"
                              name="pictures"
                              value={this.state.pics}
                              onChange={this.registerPics}
                            /> */}
                            <h3>Videobook Link:</h3>
                            <input
                              name="videobook"
                              className="text_input-register"
                              type="url"
                              value={this.state.videobook}
                              onChange={this.registerVideobook}
                            />
                            <hr className="horizontal-line"/>
                          </section>
                          <section id="save-changes">
                          <p>Write your password to save:</p>
                            <input
                              type="password"
                              className="text_input-register"
                              name="password"
                              id="Password"
                              placeholder="Insert password"
                              onChange={this.registerPassword}
                              value={this.state.password}
                            />
                          <button
                            
                            type="submit"
                            className="link-style"
                          >
                            Save Changes
                            </button>
                          </section>
                        </section>
                      </form>

                    </div>
                  </div>
                </div>

                <div className="sidebar">
                  <ul>
                    <li>
                      <h2>Steps</h2>
                      <ul>
                        <li>
                          <a >Personal Data</a>
                        </li>
                        <li>
                          <a >Physical Data</a>
                        </li>
                        <li>
                          <a >Professional Data</a>
                        </li>
                        <li>
                          <a>Media</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div style={{ clear: 'both' }}>&nbsp;</div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Profile;
