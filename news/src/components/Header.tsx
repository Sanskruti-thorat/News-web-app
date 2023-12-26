/* eslint-disable @typescript-eslint/no-explicit-any */



import { useState, useEffect } from 'react';
import { Form, Navbar, Nav, Button, Modal, Container } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/global-247-high-resolution-logo-transparent.svg';
import UserServices from '../Axios/user.services';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Auth/AuthContext'; // Update the path

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  const {  setLoggedIn, loggedIn, login, logout } = useAuth(); // Use the useAuth hook

  const userServices = UserServices();
  const navigate = useNavigate();

  const checkLoggedIn = () => {
    const storedUser = localStorage.getItem('user_login');
    setLoggedIn(!!storedUser);
  };

  const adminData = async (values: any) => {
    try {
      const response = await userServices().getAdmin();
      const adminList = response.data;

      const foundAdmin = adminList.find(
        (admin: any) => admin.email === values.email && admin.password === values.password
      );


      if (foundAdmin) {
        if (foundAdmin.role === 'admin') {
          login(foundAdmin); // Use the login function from useAuth
          setModalShow(false);
          navigate('/dashboard');
          toast.success('Login successful!');
        } else {
          toast.error('Not authorized');
        }
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
    //   if (foundAdmin) {
    //     if (foundAdmin.role === 'admin') {
    //       localStorage.setItem('user_login', JSON.stringify(foundAdmin));
    //       setLoggedIn(true);
    //       setModalShow(false);
    //       navigate('/dashboard');
    //                 toast.success('Login successful!');

    //     } else {
    //       toast.error('Not authorized');
    //     }
    //   } else {
    //     toast.error('Invalid email or password');
    //   }
    // } catch (error) {
    //   console.error('Error fetching admin data:', error);
    // }
  };

  const handleLogin = async (values: any) => {
    await adminData(values);
  };

  const handleLogout = () => {
    // localStorage.removeItem('user_login');
    logout(); // Use the logout function from useAuth
    // setLoggedIn(false);
    navigate('/');
    toast.error('You Have Logged Out !');

  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} width="200" height="100" className="d-inline-block align-top" alt="News logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={RouterLink} to="/" className="nav-link" style={{ color: 'grey' }}>
                Home
              </Nav.Link>
              {loggedIn && (
                <>
                  <Nav.Link as={RouterLink} to="/dashboard" className="nav-link" style={{ color: 'grey' }}>
                    News Dashboard
                  </Nav.Link>
                  <Nav.Link as={RouterLink} to="/adminDash" className="nav-link" style={{ color: 'grey' }}>
                    Admin Dashboard
                  </Nav.Link>
                  <Nav.Link as={RouterLink} to="/annouceDash" className="nav-link" style={{ color: 'grey' }}>
                    Annoucement Dashboard
                  </Nav.Link>
                </>
              )}
            </Nav>

            <Button variant="outline-secondary" onClick={loggedIn ? handleLogout : () => setModalShow(true)}>
              {loggedIn ? 'Logout' : 'Login'}
            </Button>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} onLogin={handleLogin} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
    </>
  );
};

function MyVerticallyCenteredModal({ show, onHide, onLogin }: any) {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Author Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onLogin(values);
            actions.resetForm();
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Field as={Form.Control} type="email" name="email" placeholder="Enter your email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Field as={Form.Control} type="password" name="password" placeholder="Enter your password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </Form.Group>
              <br />
             <div  className="d-grid gap-2">
              <Button variant="secondary" type="submit" disabled={isSubmitting} className="col-lg-12"  size="lg">
                Login
              </Button>
             </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Header;


