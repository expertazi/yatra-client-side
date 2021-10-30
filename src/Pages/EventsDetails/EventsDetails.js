import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./EventsDetails.css";
import axios from "axios";
import useAuth from "../../contexts/useAuth";

const EventsDetails = () => {
  const { user } = useAuth();
  const { eventsDeta } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rocky-savannah-17704.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactIteam = data.filter((oneData) => oneData.key == eventsDeta);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.eventName = ExactIteam[0]?.name;
    data.eventImg = ExactIteam[0]?.img;
    data.eventDate = ExactIteam[0]?.date;
    data.eventPrice = ExactIteam[0]?.price;
    data.status = "Pending";
    console.log(data.email);
    console.log(data.eventName);
    axios
      .post("https://rocky-savannah-17704.herokuapp.com/users", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Registration Succefull");
          reset();
        }
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="my-5" md={6}>
            <h3>Events Name : {ExactIteam[0]?.name}</h3>
            <img className="img-fluid my-3" src={ExactIteam[0]?.img} alt="" />
            <h3> Price : {ExactIteam[0]?.price}</h3>
            <p>description : {ExactIteam[0]?.description}</p>
          </Col>
          <Col md={6} className="mt-5 d-flex">
            <div className="add-reg-form">
              <p className="text-start fw-bold global-left">
                Start Date : {ExactIteam[0]?.start_date}
              </p>
              <p className="text-start fw-bold global-left">
                End Date : {ExactIteam[0]?.end_date}
              </p>
              <p className="text-start fw-bold global-left">
                Room : {ExactIteam[0]?.room}
              </p>
              <p className="text-start fw-bold global-left">
                Address : {ExactIteam[0]?.address}
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Input Name"
                  {...register("name", { required: true })}
                />
                <input
                  placeholder="Input Address"
                  {...register("address", { required: true })}
                />
                <input
                  placeholder=" min: 18, max: 60 Age"
                  type="number"
                  {...register("age", { required: true, min: 18, max: 60 })}
                />
                <input
                  placeholder="Input Phone Number"
                  type="number"
                  {...register("phone", { required: true })}
                />
                <input
                  className="btn btn-warning"
                  value="Registration"
                  type="submit"
                />
              </form>
              <Link to="/home">
                <button className="btn btn-warning">Go Back Home</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventsDetails;
