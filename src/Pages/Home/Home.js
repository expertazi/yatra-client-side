import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Events from "../Events/Events";
import SliderSec from "../HomePageSections/SliderSec/SliderSec";
import WhyUs from "../HomePageSections/SliderSec/WhyUs/WhyUs";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://rocky-savannah-17704.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <SliderSec></SliderSec>
      <div className="container mb-5">
        <div id="eventList">
          <h2 className="py-5 text-center fw-bold">
            Here is Our All Upcoming Events
          </h2>
          <Row md={4} className="g-4 all-events">
            {events.map((event) => (
              <Events event={event} key={event.key}></Events>
            ))}
          </Row>
        </div>
      </div>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
