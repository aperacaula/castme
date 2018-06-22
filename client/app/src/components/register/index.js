import React, { Component } from "react";
import logic from "../../logic";
import swal from "sweetalert";
import "./index.css";
import Header from '../header'
//import ScrollableAnchor from 'react-scrollable-anchor'

class RegisterUser extends Component {
  state = {
    name: "",
    surname: "",
    birthday: "",
    sex: "",
    twins: true,
    province: "Albacete",
    phone: 0,
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
    profilePicture: "none",
    check: true
  };

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
  registerRepeatPassword = e => {
    const repeatpassword = e.target.value;
    this.setState({ repeatpassword });
  };
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


  componentDidMount() {
    this.setState({ profilePicture: this.props.picture ? this.props.picture : "http://via.placeholder.com/150x150" })
    logic.userId= ''
    sessionStorage.clear()
  }

  componentWillReceiveProps(props) {
    this.setState({ profilePicture: props.picture ? props.picture : "http://via.placeholder.com/150x150" })
  }

  checkFields = () => {
    if (this.state.name === "") {
      alert("name cannot be empty");
    } else if (this.state.surname === "") {
      alert("Surname cannot be empty");
    } else if (this.state.birthday === "") {
      alert("Birthday cannot be empty");
    } else if (this.state.province === "") {
      alert("Province cannot be empty");
    } else if (
      [
        "Alava",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Avila",
        "Badajoz",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón",
        "Ciudad Real",
        "Córdoba",
        "La Coruña",
        "Cuenca",
        "Girona",
        "Granada",
        "Guadalajara",
        "Guipúzcoa",
        "Huelva",
        "Huesca",
        "Islas Baleares",
        "Jaén",
        "León",
        "Lérida",
        "Lugo",
        "Madrid",
        "Málaga",
        "Murcia",
        "Navarra",
        "Orense",
        "Palencia",
        "Las Palmas",
        "Pontevedra",
        "La Rioja",
        "Salamanca",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Santa Cruz de Tenerife",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya",
        "Zamora",
        "Zaragoza"
      ].indexOf(this.state.province) === -1
    ) {
      alert("Input province does not exist");
    } else if (this.state.phone === "") {
      alert("Phone cannot be empty");
    } else if (this.state.email === "") {
      alert("Email cannot be empty");
    } else if (this.state.password === "") {
      alert("Password cannot be empty");
    } else if (this.state.repeatpassword === "") {
      alert("You must repeat your password");
    } else if (this.state.password !== this.state.repeatpassword) {
      this.setState({ check: false });
    } else {
      this.setState({ check: true });
    }
  };

  acceptRegister = e => {
    e.preventDefault();
    Promise.resolve()
      //.then(() => this.checkFields())
      .then(() => {
        if (!this.state.check) {
          this.setState({
            password: "",
            repeatpassword: ""
          });
          alert("Passwords don't match ;(");
        } else {
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
            .registerUser(
              this.state.email,
              this.state.password,
              PersonalData,
              PhysicalData,
              ProfessionalData,
              this.state.videobook,
              this.state.profilePicture
            )
            .then(resp => {
              swal(
                "Welcome to CastMe",

              )
                .then(this.props.onRegister)
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
        }
      });
  };


  render() {
    return (
      <div className="General">

        <div id="wrapper-login">
          <Header/>

          <div id="page">
            <div id="page-bgtop">
              <div id="page-bgbtm">
                <div id="content">
                  <div className="post">
                    <h2 className="title">Registration</h2>
                    <div className="entry">

                      <form className="registration-register" onSubmit={this.acceptRegister}>
                        <section>
                          <h3 className="image-header">Profile Picture</h3>
                          <img
                            src={this.state.profilePicture}
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
                              placeholder="John"
                              onChange={this.registerName}
                            />
                            <h3>Surname:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="surname"
                              id="Lastname"
                              placeholder="Doe"
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
                            <select className="short-input" id="sexRadio" onChange={this.registerSex}>
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>
                                -
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
                              placeholder="Primera mayúscula y con acentos (p.e. Cádiz)"
                              onChange={this.registerProvince}
                            />

                            <h3>Phone:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="phone"
                              id="phone-input"
                              placeholder="612345678"
                              onChange={this.registerPhone}
                            />

                            <h3>E-mail:</h3>
                            <input
                              type="text"
                              className="text_input-register"
                              name="email"
                              id="Email"
                              placeholder="john.doe@gmail.com"
                              onChange={this.registerEmail}
                              value={this.state.email}
                            />
                            <h3>Password:</h3>
                            <input
                              type="password"
                              className="text_input-register"
                              name="password"
                              id="Password"
                              placeholder="Insert password"
                              onChange={this.registerPassword}
                              value={this.state.password}
                            />
                            <h3>Repeat Password:</h3>
                            <input
                              type="password"
                              className="text_input-register"
                              name="repeat-password"
                              id="repeatPassword"
                              placeholder="Insert password"
                              onChange={this.registerRepeatPassword}
                              value={this.state.repeatpassword}
                            />

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
                              placeholder="In meters"
                              onChange={this.registerHeight}
                            />
                            <h3>Weight:</h3>
                            <input
                              type="number"
                              className="short_input"
                              name="weight-input"
                              placeholder="In kg"
                              onChange={this.registerWeight}
                            />
                            <h3>Physical Condition</h3>
                            <select
                              className="text_input-register"
                              name="PhysicalCondition"
                              onChange={this.registerPhysicalCondition}
                            >
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              <option value=" " checked>-</option>
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
                              placeholder="Circus, surfing, football, athlete..."
                              onChange={this.registerOtherHab}
                            />

                            <h3>Previous experiences:</h3>
                            <input
                              type="number"
                              className="short_input"
                              name="Previous"
                              placeholder="How many"
                              onChange={this.registerPrevExp}
                            />

                            <h3>Curriculum:</h3>
                            <input type="file" name="CV" placeholder="PDF" onChange={this.registerCurriculum} />

                            <hr className="horizontal-line" />
                          </section>
                          <h2 id="Media" className="section-header">
                            Media
                            </h2>
                          <section>
                            <h3>Pictures:</h3>
                            <span>
                              (Pdf file gathering all the pictures you want to
                              show, small sized)
                              </span>
                            <input
                              className="text_input-register"
                              type="file"
                              name="pictures"
                              onChange={this.registerPics}
                            />
                            <h3>Videobook Link:</h3>
                            <input
                              name="videobook"
                              className="text_input-register"
                              type="url"
                              placeholder="Youtube, Vimeo..."
                              onChange={this.registerVideobook}
                            />
                          </section>

                          <button
                            id="register-button"
                            type="submit"
                            className="link-style"
                          >
                            Register
                            </button>
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

          <div className="three-columns" />
        </div>
        <div id="footer">
          <p>&copy; CastMe. All rights reserved.</p>
        </div>
      </div>
    );
  }
}
export default RegisterUser;
