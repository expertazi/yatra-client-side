import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./SliderSec.css";
import { Link } from "react-router-dom";

const SliderSec = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src="https://ovatheme.com/em4u/wp-content/uploads/2017/09/bg_3_new.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Digital Marketing 2022</h1>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <Link to="/allEvents">
              <Button variant="warning">Our Events</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderSec;
