import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Managernav = () => {
  const navigation = useNavigate();
  function Logout() {
    sessionStorage.clear();
    navigation("/");
  }

  return (
    
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/managerdash">
              <span>
                {" "}
                <GiCommercialAirplane size={"1.5em"} color="yellow" />{" "}
              </span>
              Manager Panel
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="nav">
               
                <Nav.Link as={Link} to="/booking">
                  Bookings
                  <span>
                    {" "}
                    <FaBookReader size={"1.2em"} />{" "}
                  </span>
                </Nav.Link>                
                <Nav.Link as={Link} to="/turf">
                  Turfs
                  <span>
                    {" "}
                    <FaClipboardList size={"1.2em"} />{" "}
                  </span>
                </Nav.Link>
                <Nav.Link onClick={Logout}>
                  Logout
                  <span>
                    {" "}
                    <IoLogOut size={"1.2em"} />{" "}
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={footerStyle.pos}>
          <nav
            className="navbar fixed-bottom navbar-dark"
            style={footerStyle.bg}
          >
            <div className="container-fluid justify-content-center">
              <span className="navbar-text" style={{ color: "ivory" }}>
                Copyright © All rights reserved FlightBookingSystem, 2022.
              </span>
            </div>
          </nav>
        </div>
      </>
  );
};
let footerStyle = {
  pos: {
    position: "relative",
  },
  bg: {
    background: "#00001a",
  },
};

export default Managernav;
