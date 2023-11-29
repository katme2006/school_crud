import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <Container>
      <Navbar/>
      <Row style={{ textAlign: "center" }}>
        <h1>School Assignment</h1>
      </Row>
      <Outlet/>
    </Container>
  );
}