import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/home'>
                        <img style={{ width: "60px", margin: "4px" }} src="https://i.ibb.co/XzP57BP/logo-2.png" alt="" />
                        <b>Massive Lift-Up</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                user && <>
                                    <Nav.Link className="me-4 navLink" as={Link} to="/manageInventory">Manage Inventory</Nav.Link>
                                    <Nav.Link className="me-4 navLink" as={Link} to="/addInventory">Add Inventory</Nav.Link>
                                    <Nav.Link className="me-4 navLink" as={Link} to="/myitems">My Items</Nav.Link>
                                </>
                            }

                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                            {
                                user ?

                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}><span className='text-warning pe-2'>{user.displayName}</span> sign out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;