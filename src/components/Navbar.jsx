import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import MiniNavBar from './MiniNavBar'
import logo from './logo.jpeg'
import './css/navbar.css'

function NavBar(){
    return(
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/"><img className="logo" src={logo} ></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/periodic-table">Periodic Table</Nav.Link>
      <Nav.Link href="/syllabus11">Syllabus 11</Nav.Link>
      <Nav.Link href="/syllabus12">Syllabus 12</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/contact">Contact Me</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<MiniNavBar />
</div>
    )
}
export default NavBar;
