import Nav from 'react-bootstrap/Nav'
//import {Link} from 'react-router-dom'

function MiniNavBar(){
    return(
        <Nav variant="tabs">
        <Nav.Item>
        <Nav.Link href="/class11">Class 11</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/class12">Class 12</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default MiniNavBar;