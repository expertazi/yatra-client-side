import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <img
                className="text-center"
                src="https://ovatheme.com/em4u/wp-content/uploads/2017/10/logo_white.png"
                width="50%"
              />
              <p className="text-start mt-3 text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam
              </p>
            </div>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-white mb-4">Categories</h5>
              <li> Conference</li>
              <li> Business</li>
              <li> Concert</li>
              <li> Festival</li>
              <li> Sport</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-white mb-4">
                Importnat Links
              </h5>
              <li>Privacy Policy</li>
              <li> Refund Policy</li>
              <li> Disclaimer</li>
              <li> Contact</li>
              <li> Blog</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-white mb-4">
                Your Account
              </h5>
              <li> </li>
              <li> My Account</li>
              <li> Order History</li>
              <li> Track Order</li>
              <li> My Address</li>
            </ul>
          </Col>
          <p className="text-white text-center mt-3">
            Copyright © 2021 osudpotro. All rights reserved.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
