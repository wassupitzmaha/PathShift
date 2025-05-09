
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>

        <Navbar.Brand as={Link} to="/">
          <b>PathShift</b>
        </Navbar.Brand>
        
        {/* Hamburger menu toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Main navigation menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Analysis" id="basic-nav-dropdown">

              <NavDropdown.Item as={Link} to="/MechanicalEngineering">
                Mechanical Engineering
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/Business">
                Business
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/Education">
                Education
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Medicine">
                Medicine
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Biology">
                Biology
              </NavDropdown.Item>


              <NavDropdown.Item as={Link} to="/summaryanalysis">
                Summary Analysis
              </NavDropdown.Item>

            </NavDropdown>
            
            {/* This links to the "/about" route in App.js */}
            <Nav.Link as={NavLink} to="/about">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;