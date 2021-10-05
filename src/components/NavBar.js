import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <>
    <Navbar className="border-bottom">
      <Container className="nav-wrapper">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Space Travelers Hub</h1>
        </Navbar.Brand>
        <Nav className="nav-links p-2">
          <Link to="/" exact className="text-decoration-none">Rockets</Link>
          <Link to="/missions" className="px-3 text-decoration-none ">Missions</Link>
          <Link to="/profile" className="border-start px-2 border-dark text-decoration-none">My Profile</Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
