import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
const NavbarLayout = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand href="#home">The Generics</NavbarBrand>
        <Nav className="me-auto">
          <NavLink href="#store">Store</NavLink>
          <NavLink href="#about">About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavbarLayout;
