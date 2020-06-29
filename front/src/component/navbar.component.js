import React, {Component} from "react";
import { Link } from "react-router-dom";
import '../App.css';
import logo from "../images/logo-wt.png";

export default class Navbar extends Component {
  render(){
    return(
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/"><h1 className="wiselogo">WISE</h1></Link>
          </li>
          <div className="rightfloat">
            <li>
              <Link to="/profile"><p className="rightlink">My profile</p></Link>
            </li>
            <li>
              <Link to="/logout"><p>Log out</p></Link>
            </li>
          </div>
        </ul>
      </nav>
    )
  }
}
