import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Plex from "./Plex";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";

const App = () => {
  return (
    <Fragment>
      <Navigationbar />
      <Container id="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/plex" component={Plex} />
          </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;
