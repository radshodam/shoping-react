import React from "react";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <div>
      <Router>
      <Menu />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
