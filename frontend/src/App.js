import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Menus from './pages/Menus'
import About from './pages/About'



export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/menus" component={Menus} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>

      
    </div>
  );
}
