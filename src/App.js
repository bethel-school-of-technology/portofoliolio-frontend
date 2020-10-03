import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

class App extends React.Component{

constructor (props){
  super (props);
  this.state = {
    title: "Created by Us",
    headerLinks:[
      {title: "Home", path: '/'},
      {title: "About", path: '/about'},
      {title: "Contact", path: '/contact'},

    ],

    home:{
      title: "Our Portfolios",
      subtitle:"Anyone who has never made a mistake has never tried anything"
   },
   about:{
    title: "About",
    subtitle: " About the Coders "
   },
   contact:{
     title:"Connect at my page"
   }

  }
}

  render(){
    return (
      <Router>
<Container className ='p-0' fluid = {true}>
  <Navbar className = 'border-bottom' bg='transparent' expand='lg'>
    <NavbarBrand>Portfolios</NavbarBrand>

    <Navbar.Toggle className='border-0' aria-controls='navar-toggle'/>
    <Navbar.Collapse id='navbar-toggle'>
      <Nav className= 'ml-auto'>
<Link className = 'nav-link' to='/'>Home</Link>
<Link className = 'nav-link' to='/about'>About</Link>
<Link className = 'nav-link' to='/contact'>Contact</Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <Route path='/' exact render ={() =><HomePage title={ this.state.home.title} /> } />
  <Route path='/about'  render ={() =><AboutPage title={ this.state.about.title} /> } />
  <Route path='/contact' render ={() =><ContactPage title={ this.state.contact.title} /> } />
  <Footer />
  </Container>
      </Router>
    );
  }
}






export default App;
