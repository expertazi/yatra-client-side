import logo from "./logo.svg";

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFoundPage from "./GlobalPages/NotFoundPage/NotFoundPage";
import Header from "./GlobalPages/Header/Header";
import Login from "./GlobalPages/Login/Login";
import EventsDetails from "./Pages/EventsDetails/EventsDetails";
import Contact from "./Pages/Contact/Contact";
import initializeAuthentication from "./GlobalPages/Login/Firebase/Firebase.init";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./GlobalPages/Login/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/MyOrders/MyOrders";
import AllOrders from "./Pages/AllOrders/AllOrders";
import Footer from "./GlobalPages/Footer/Footer";
import AllEvents from "./Pages/AllEvents/AllEvents";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/allEvents">
              <AllEvents></AllEvents>
            </Route>
            <PrivateRoute exact path="/allOrders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/eventsDetails/:eventsDeta">
              <EventsDetails></EventsDetails>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
