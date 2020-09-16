import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import "./App.css";
// import NavbarBrand from "react-bootstrap/NavbarBrand";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Switch from "react-bootstrap/esm/Switch";
import "./components/Tech.png";

// import "./components/login.component.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Created by Us",
      headerLinks: [
        { title: "Login", path: "/log-in" },
        { title: "SignUp", path: "/sugn-up" },
        // { title: "About", path: "/about" },
        // { title: "Contact", path: "/contact" },
        // { title: "SignUp", path: "/sign-up" },
      ],

      home: {
        title: "Home ",
        subtitle:
          "Anyone who has never made a mistake has never tried anything",
      },
      about: {
        title: "About",
        subtitle: " About the Coders ",
      },
      contact: {
        title: "Connect at my page",
      },
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              ></div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>

        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Toggle className="border-0" aria-controls="navar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <div className="container">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarTogglerDemo02"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to={"/sign-in"}>
                            Login
                          </Link>{" "}
                        </li>
                        <li>
                          <Link className="nav-link" to={"/sign-up"}>
                            Sign up
                          </Link>
                        </li>

                        <li>
                          <Link className="nav-link" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/contact">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => <HomePage title={this.state.home.title} />}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
