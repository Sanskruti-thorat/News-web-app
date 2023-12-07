/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import { Form, Navbar, Nav, Button, Modal, Container } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import logo from '../assets/global-247-high-resolution-logo-transparent.svg';
import UserServices from '../Axios/user.services';


const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const userServices = UserServices();
 const [currentUser , setCurrentUser] = useState({
  email:'',
  password:'',
})
const navigate = useNavigate();




const checkLoggedIn = () => {
  const storedUser = localStorage.getItem('user_login');
  setLoggedIn(!!storedUser); // Set loggedIn based on whether user is stored in localStorage
};
 
const adminData = async () => {
  try {
    const response = await userServices().getAdmin();
    const admin = response.data;
    let log = false;

    admin.map((adminItem: any) => {
      if (adminItem.email === currentUser.email) {
        log = true;
        if (adminItem.password === currentUser.password) {
          if(adminItem.role === "admin"){

            console.log("logged in");
            localStorage.setItem('user_login', JSON.stringify(adminItem));
            setLoggedIn(true);
            setModalShow(false);
            navigate('/dashboard');
          }
          else (
            console.log("not authorised")
          )

        } else {
          console.log("wrong password");
        }
      }
    });

    if (!log) {
      console.log("wrong email");
    }
  } catch (error) {
    console.log('Error fetching news:', error);
  }
};

  
const handleLogin = async (e:any) => {
  e.preventDefault();
  await adminData();
};

const handleLogout = () => {
  localStorage.removeItem('user_login');
  // Perform logout actions if needed

  // Set loggedIn to true (assuming successful logout sets the user as logged in)
  setLoggedIn(false);

  // Navigate to the home page with loggedIn as true
  navigate('/');
};


  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Author Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={currentUser.email}
                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={currentUser.password}
                onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
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

  useEffect(()=>{
    checkLoggedIn();

  },[]);

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


           <Button variant="outline-secondary" onClick={loggedIn ? handleLogout : () => setModalShow(true)}>
            {loggedIn ? 'Logout' : 'Login'}
          </Button>

          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;




// {loggedIn?(

// <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
//   Login
// </Button>
//   ):(
//     <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
//     Logout
//   </Button>
//   )}
