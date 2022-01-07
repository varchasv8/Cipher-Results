import React from 'react';
// import { Navbar,Container,Nav,Button } from 'react-bootstrap';
// import '../css/Navbar.css'

import { Navbar,Container,Nav } from 'react-bootstrap';
import '../css/Header.css';

const Header = React.memo((props) => {
    return (
        <header >
            <Navbar bg="light" expand="lg" >
              <Container id='header'>
                <Navbar.Brand href="/">Cipher Results</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className='navLinks'>
                  {props.isloggedin? (<>
                    <Nav.Link onClick={()=>props.logout()} href="/">Logout</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </>):(<>
                    <Nav.Link onClick={()=>props.logout()} href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </>) }
                    
                    
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
         
        </header>
    )
})



export default Header;

            
            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     <Container>
            //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav className="me-auto">
                   
                    
            //         </Nav>
            //         <Nav>
            //         <Nav.Link href="#deets">More deets</Nav.Link>
            //         <Nav.Link eventKey={2} href="#memes">
            //             Dank memes
            //         </Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>
            //     </Container>
            // </Navbar>