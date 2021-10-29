import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Events = (props) => {
  const {
    name,
    key,
    img,
    description,
    start_date,
    date,
    end_date,
    room,
    address,
    price,
  } = props.event;

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <span>{date}</span>
          <Card.Title className="mt-2">{name.slice(0, 25)}</Card.Title>
          <Card.Text>{description.slice(0, 95)}</Card.Text>
          <div className=" d-flex justify-content-between align-items-center">
            <Link to={`/EventsDetails/${key}`}>
              <Button variant="primary">To See Details</Button>
            </Link>
            <span className="fw-bold h3">${price}</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Events;
