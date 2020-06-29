import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import logo from '../images/logo.png';
import logo1 from "../images/logo-wt.png";

const pageTitle = "WISE: Login"; 

export class Login extends Component {
    render(){
        return(
            <section className="wrapper-content">
                <Helmet><title>{pageTitle}</title></Helmet>
                <nav className="header">
                    <ul>
                        <li><Link to="/login"><img className="logo" alt="WISE Logo" src={logo1}></img></Link></li>
                    </ul>
                </nav>
                <section className="wrapper-login">
                    <div className="wrapper-input">
                        <input type="text" name="email" placeholder="Email" className="login"></input>
                    </div>
                    <div className="wrapper-input">
                        <input type="password" name="password" placeholder="Password" className="login"></input>
                    </div>
                        <button className="btn-login">Log In</button>
                        <Link to="/forgot" className="forgot">Forgot password?</Link>
                        <img id="footer-logo" alt="MIU Logo" src={logo}></img>               
                </section>
            </section>
        )
    }
}


export default Login