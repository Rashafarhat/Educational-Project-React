import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';





export default function NavBar() {
    const [Navlist] = useState(['Courses','Teachers','Offers','Contact'])
       

    return (
        <>
              
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container >
                    <Navbar.Brand className='fs-2' href="#home">Etech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-5">
                          

                          
                                {
                                    Navlist.map((e, i) => {
                                        return (
                                            <>
                                                <Nav.Link  href="#home">{e}</Nav.Link>
                                            </>
                                        )
                                    })

                                }
                         
                            
                            
                        </Nav>
                        
                        <div >
                            <Button className='mx-5' variant="outline-primary">Sign in</Button>
                            <Button variant="primary">Free Trail</Button>

                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}
