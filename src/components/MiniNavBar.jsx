import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

function MiniNavBar(){
    return(
        <Nav variant="tabs">
        <Nav.Item>
        <Nav.Link><Link to ="/class11" style={{textDecoration:'none'}}>Class 11</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/class12" style={{textDecoration:'none'}}>Class 12</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link><Link to ="/quiz" style={{textDecoration:'none'}}>Quiz</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default MiniNavBar;