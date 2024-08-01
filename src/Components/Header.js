import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar className="p-3" style={{ backgroundColor: "#A64D79" }}>
        <Container>
          <Navbar.Brand className="text-white">NOTE KEEPER</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
