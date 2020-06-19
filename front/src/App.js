import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./component/navbar.component";
import Footer from "./component/footer.component";
import Login from "./component/login.component";
import Main from "./component/main.component";

function App() {
  return (
      <Router>
        <section className="all">
          <Navbar/>
          <Route path="/" exact component= {Main} />
          <Route path="/login" exact component= {Login}/>
          <Footer/>
        </section>
      </Router>
  );
}

export default App;
