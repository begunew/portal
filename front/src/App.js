import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, useRouteMatch, useParams, Route} from "react-router-dom";

import Navbar from "./component/navbar.component";
import Footer from "./component/footer.component";
import Login from "./component/login.component";
import Main from "./component/main.component";
import Forgot from "./component/forgot.component";

function App() {
  return (
      <Router>
         <Switch>
           <Route exact path="/login"><Login/></Route>
           <Route exact path="/"><Main/></Route>
           <Route exact path="/forgot"><Forgot/></Route>
         </Switch>
      </Router>
  );
}

{/* <Navbar/>
<Route path="/" exact component= {Main} />
<Route path="/login" exact component= {Login}/>
<Footer/> */}
export default App;
