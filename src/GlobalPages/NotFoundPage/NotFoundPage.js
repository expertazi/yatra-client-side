import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col className="not-found-col" md={4}>
            <img
              className="img-fluid"
              src="https://miro.medium.com/max/1838/1*zE2qnVTJehut7B8P2aMn3A.gif"
              alt=""
            />
            <h3 className="fw-bold">Page Not Found</h3>
            <p>The page you requested could not be found</p>
            <Link to="/home">
              <button className="btn btn-warning mb-5">Go Back Home</button>
            </Link>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
