import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Events from "../Events/Events";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="container mb-5">
      <div id="eventList">
        <h2 className="py-5 text-center fw-bold">
          Buy Which Medicines You Need
        </h2>
        <Row md={4} className="g-4 all-events">
          {events.map((event) => (
            <Events event={event} key={event.key}></Events>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
