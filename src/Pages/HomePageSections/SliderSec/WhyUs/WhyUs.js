import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="container">
      <h2 className="text-center fw-bold my-5">Why You Choose Us</h2>
      <Row xs={1} md={4} className="g-4 mb-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Img
                className="card-img"
                variant="top"
                src="https://www.pngitem.com/pimgs/m/192-1927225_event-icon-free-icons-event-icon-hd-png.png"
              />
              <Card.Title className="fw-bold">MULTIPLE EVENTS</Card.Title>
              <Card.Text className="mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nib
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img
                className="card-img"
                variant="top"
                src="https://static.thenounproject.com/png/1190929-200.png"
              />
              <Card.Title className="fw-bold">EVENT MANAGEMENT</Card.Title>
              <Card.Text className="mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nib
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img
                className="card-img"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmLRq_Iuxevg64Ru6O7HxHCUB08JSF_dFGM3D6PtA36WdEIn-MHaNDCR4ch0_TzMEXGY&usqp=CAU"
              />
              <Card.Title className="fw-bold">CREADIT CARD PAYMENT</Card.Title>
              <Card.Text className="mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nib
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img
                className="card-img"
                variant="top"
                src="https://i.pinimg.com/originals/d3/d6/40/d3d6401d49a389cadb182c3640c6df47.png"
              />
              <Card.Title className="fw-bold">VENUE MANAGEMENT</Card.Title>
              <Card.Text className="mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nib
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WhyUs;
