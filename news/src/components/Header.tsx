/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { Form, Navbar, Nav, Button, Modal, Container } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../assets/global-247-high-resolution-logo-transparent.svg';

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     // Add your login logic here
  //     console.log('Login attempt:', { email, password });
  //   } catch (error) {
  //     console.error('Login error:', error.message);
  //   }
  // };

  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Author Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="News logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={RouterLink} to="/" className="nav-link" style={{ color: 'grey' }}>
              Home
            </Nav.Link>
          </Nav>
          <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
            Login
          </Button>

          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
