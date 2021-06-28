import React,{Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import MiniNavBar from './MiniNavBar'
import logo from './logo.jpeg'
import './css/navbar.css'
import {Link, Redirect} from 'react-router-dom'

class NavBar extends Component{
  constructor(props)
  {
    super(props)
    console.log(props)
  }
  logout=()=>{
    
    this.props.setAuthenticated(false);
    this.props.setName('');
    this.props.setEmail('');
    this.props.setMarks(null)
    localStorage.removeItem('token')
    //this.props.history.push('/')
    //hashHistory.push('/')
    //return <Redirect to="/"></Redirect>
  }

    render()
    {
      //console.log("navbar")
      //console.log(this.props.passed)
     //console.log(context) 
      return(
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
    <Nav.Link><Link to ="/" style={{textDecoration:'none'}}><img className="logo" src={logo} ></img></Link></Nav.Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/" style={{textDecoration:'none'}}>Home</Link></Nav.Link>
      <Nav.Link><Link to="/periodic-table" style={{textDecoration:'none'}}>Periodic Table</Link></Nav.Link>
      <Nav.Link><Link to="/syllabus11" style={{textDecoration:'none'}}>Syllabus 11</Link></Nav.Link>
      <Nav.Link><Link to="/syllabus12" style={{textDecoration:'none'}}>Syllabus 12</Link></Nav.Link>
      <Nav.Link><Link to="/contact" style={{textDecoration:'none'}}>Contact Us</Link></Nav.Link>
      
    </Nav>
    {this.props.passed.isAuthenticated
    ?
    <div>
      <Link to="/profile"><Button variant="outline-info" style={{marginRight:'1rem'}}>Hi, {this.props.passed.name}</Button></Link>
      <Link to="/"><Button variant="outline-danger" onClick={()=>this.logout()} style={{marginRight:'1rem'}}>Log Out</Button></Link>
    </div>
    :
    <div>
      <Link to="/login"><Button variant="outline-success" style={{marginRight:'1rem'}}>Login</Button></Link>
      <Link to="/register"><Button variant="outline-success">Register</Button></Link>
    </div>
  }
  </Navbar.Collapse>
</Navbar>
<MiniNavBar />
</div>
    )
    }
}
export default NavBar;
