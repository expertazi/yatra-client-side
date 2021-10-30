import React, { useState } from "react";
import initializeAuthentication from "./Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuth from "../../contexts/useAuth";
import { useHistory, useLocation } from "react-router";
import { Col, Form, Button, Row } from "react-bootstrap";

initializeAuthentication();

const Login = () => {
  const { signinWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log("Come From", location.state?.from);

  const handleGoogleLogin = () => {
    signinWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  const [isLogin, setIsLogin] = useState(false);
  const toggoleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  return (
    <div>
      <div className="container text-center mt-5">
        <h2 className="mb-5 fw-bold">
          Please{" "}
          {isLogin
            ? " Register ! If you dont have account"
            : " Login  ! If you  have account"}
        </h2>

        <Row>
          <Col md={4}></Col>
          <Col className="login-main-form text-start" md={4}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  onChange={toggoleLogin}
                  type="checkbox"
                  label={
                    isLogin
                      ? "If You Already Have Account? Click Here To Login"
                      : " If You dont Have Account? Click Here To Register"
                  }
                />
              </Form.Group>
              <div className="row mb-3 text-danger"></div>
              <Button variant="primary" type="submit">
                {isLogin ? " Register" : " Login"}
              </Button>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>

        <div className="mt-4">
          <h5 className="mb-3">-------------Other SignUp----------------</h5>

          <button onClick={handleGoogleLogin} className="btn btn-warning mb-5">
            {isLogin ? " Register" : " Login"} With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
