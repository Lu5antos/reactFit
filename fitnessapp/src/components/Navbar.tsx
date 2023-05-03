import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavbarBs = () => {
  return (
    <Navbar bg="dark" sticky="top" variant="dark" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#schedule">Schedule</Nav.Link>
          <Nav.Link href="#exercises">Exercises</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarBs;
