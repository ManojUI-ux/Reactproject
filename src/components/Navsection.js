import React from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import "./style.css";

function Navsection() {
  return (
    <>
      <Navbar expand="lg" className="bac transparent-navbar ">
        <Container>
          <Navbar.Brand href="#">
            <img
              className=""
              style={{ maxHeight: "45px", borderRadius: "100px" }}
              src={require("../Assets/images/lofofo-transformed.png")}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-flex justify-content-center"
          >
            <Nav
              className="mx-auto my-2 my-lg-0 gap-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Asus
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Dell
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                HP
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navsection;
