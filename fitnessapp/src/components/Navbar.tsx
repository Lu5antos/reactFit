import {
  Container,
  Nav,
  Navbar as NavbarBS,
} from "../../node_modules/react-bootstrap/esm/index";

const Navbar = () => {
  return (
    <NavbarBS
      className="justify content-start"
      sticky="top"
      bg="light"
      variant="light"
    >
      <Container>
        <Nav.Link to={"/"}>Home</Nav.Link>
        <Nav.Link to={"/about"}>About</Nav.Link>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
