import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, useRouteMatch, useParams, Route} from 'react-router-dom';

export default class Sidenav extends Component {
    render() {
        return (
            <div className="sidenav">
                <ul>
                    <li> {/* To make props and conditions depending on who logs in */}
                        <Link to="/schedules"><p>Class Schedule</p></Link>
                    </li>
                    <li>
                        <Link to="/courses"><p>Course Registration</p></Link>
                    </li>
                    <li>
                        <Link to="/grades"><p>Grades</p></Link>
                    </li>
                    <li>
                        <Link to="/tuition"><p>Tuition Fee</p></Link>
                    </li>
                    <li>
                        <Link to="/activity"><p>School Activity</p></Link>
                    </li>
                </ul>
            </div>
        )
    }
}
