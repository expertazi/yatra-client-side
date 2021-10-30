import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../contexts/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className=" main-menu sticky-top">
      <Navbar sticky="top" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
            <img
              src="https://ovatheme.com/em4u/wp-content/uploads/2017/10/logo_white.png"
              width="100%"
              height="43"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Link to="/home">Home</Link>

              <Link to="/allEvents">AllEvents</Link>
              <Link to="/contact">Contact Us</Link>

              {user?.email ? (
                <div className="ms-auto d-flex align-items-center">
                  <Link to="/myOrders">MyOrders</Link>
                  <Link to="/allOrders">All Orders</Link>
                  <Button onClick={logOut} variant="dark">
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <Navbar.Text> Signned Email is : {user?.email} </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
