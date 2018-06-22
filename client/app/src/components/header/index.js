import React from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'


function Header (props){
    if (logic.userId){
        return(
            <header id="header-wrapper-login">
            <div id="header-login">
                <div id="menu1-login">
                <ul>
                    <li className="menu_link">
                    <Link to="/" >My Home</Link>
                    </li>
                    <li className="menu_link">
                    <Link to="/castings">Castings</Link>
                    </li>
                </ul>
                </div>
                <div id="logo-login">
                <h1>
                  <Link to="/" >CastMe </Link>
                </h1>
                </div>
                <div id="menu2-home">
                <ul>
                    <li className="menu_link">
                    <Link to="/profile">
                        <img
                        className="small-image-preview"
                        style={{ borderRadius: "50%" }}
                        src={props.profilePicture}
                        alt=""
                        />

                        {`${props.name} ${props.surname}`}
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            {/* end #header */}
            </header>

        )
    }else{

        return(
        
          <header id="header-wrapper-login">
            <div id="header-login">
              <div id="menu1-login">
                <ul>
                  <li className="menu_link">
                    <Link to="/" >Homepage</Link>
                  </li>
                  <li className="menu_link">
                    <Link to="/castings">Castings</Link>
                  </li>
                </ul>
              </div>
              <div id="logo-login">
                <h1>
                  <Link to="/" >CastMe </Link>
                </h1>
              </div>
              <div id="menu2-login">
                <ul>
                  <li className="menu_link">
                    <a >About</a>
                  </li>
                  <li className="menu_link">
                    <a >Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        )

    }
}

export default Header