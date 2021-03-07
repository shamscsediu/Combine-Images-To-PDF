import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const HeaderArea = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">PDF</Navbar.Brand>
      <Nav className="mr-auto white">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Nav className="ml-auto white">
        <span>Made with reactjs by Shams</span>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form> */}
    </Navbar>
  );
};
export default HeaderArea;
