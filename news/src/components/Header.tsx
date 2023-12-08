/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Form, Navbar, Nav, Button, Modal, Container } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/global-247-high-resolution-logo-transparent.svg';
import UserServices from '../Axios/user.services';

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const userServices = UserServices();
  const navigate = useNavigate();

  const checkLoggedIn = () => {
    const storedUser = localStorage.getItem('user_login');
    setLoggedIn(!!storedUser);
  };

  const adminData = async () => {
    try {
      const response = await userServices().getAdmin();
      const adminList = response.data;

      const foundAdmin = adminList.find(
        (admin:any) => admin.email === credentials.email && admin.password === credentials.password
      );

      if (foundAdmin) {
        if (foundAdmin.role === 'admin') {
          localStorage.setItem('user_login', JSON.stringify(foundAdmin));
          setLoggedIn(true);
          setModalShow(false);
          navigate('/dashboard');
        } else {
          console.log('Not authorized');
        }
      } else {
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.log('Error fetching admin data:', error);
    }
  };

  const handleLogin = async (e:any) => {
    e.preventDefault();
    await adminData();
  };

  const handleLogout = () => {
    localStorage.removeItem('user_login');
    setLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

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
            {loggedIn && (
              <Nav.Link as={RouterLink} to="/dashboard" className="nav-link" style={{ color: 'grey' }}>
                Dashboard
              </Nav.Link>
            )}
          </Nav>

          <Button variant="outline-secondary" onClick={loggedIn ? handleLogout : () => setModalShow(true)}>
            {loggedIn ? 'Logout' : 'Login'}
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onLogin={handleLogin}
            credentials={credentials}
            setCredentials={setCredentials}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function MyVerticallyCenteredModal({ show, onHide, onLogin, credentials, setCredentials }:any) {
  const handleLoginChange = (e:any) => {
    setCredentials((prevCredentials:any) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginSubmit = (e:any) => {
    e.preventDefault();
    onLogin(e);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Author Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleLoginChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleLoginChange}
              required
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Header;
