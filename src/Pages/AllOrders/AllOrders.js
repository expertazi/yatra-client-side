import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2>AllOrders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Event Name</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>{order.name}</td>
              <td>{order.eventName}</td>
              <td>{order.phone}</td>
              <td>{order.status}</td>
              <td>
                <div className="btn-all-table">
                  <button className="btn-action">Approved</button>

                  <button>X</button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AllOrders;
