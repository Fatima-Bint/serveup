import React from 'react';
//import { Navbar, Nav, Container} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import * as ReactBootstrap from "react-bootstrap";

function NavBar() {
    return (
        <div>
            <div>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="danger"
        variant="dark"
        activekey='/'
        fixed="top"
      >
        <ReactBootstrap.Navbar.Brand href="#name">
          SERVEUP
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">

            <ReactBootstrap.Nav.Link href='/'>
              Home
            </ReactBootstrap.Nav.Link>

            <ReactBootstrap.Nav.Link href="/blog">
            About
            </ReactBootstrap.Nav.Link>

            <ReactBootstrap.NavDropdown
              title="Menus"
              id="collasible-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">
                Family
              </ReactBootstrap.NavDropdown.Item>

              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                Small
              </ReactBootstrap.NavDropdown.Item>

              <ReactBootstrap.NavDropdown.Item href="#action/3.3">
                Large
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>

          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="#deets">
            </ReactBootstrap.Nav.Link>

            <ReactBootstrap.Nav.Link eventKey={2} href="/login">
              Login
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      
    </div>
            
        </div>
    )
}

export default NavBar
