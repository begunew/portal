import React, { Component } from 'react';
import Navbar from "./navbar.component";
import Sidenav from "./sidenav.component";
import MainContent from "./maincontent.component";
export default class Main extends Component {
    render() {
        return (
            <>  
             <Navbar/>
             <MainContent/>
             <Sidenav/>
            </>
        )
    }
}
