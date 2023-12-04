import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Usuário" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/users">User</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Chat" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/chat">Acessar o chat</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/mensagens">Mandar Mensagem</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}