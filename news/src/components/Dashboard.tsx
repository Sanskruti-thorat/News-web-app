/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import { Form, Button, Modal, Table } from 'react-bootstrap';
import UserServices from "../Axios/user.services";


interface NewsData {
  id: number;
    title: string;
    tagline: string;
    content: string;
    description: string;
    imageUrl: string;
    videoUrl:string;
    category: string;
}

const Dashboard = () => {
  const values = true;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState<NewsData[]>([]);
  const userServices = UserServices();


  function handleShow(breakpoint:any) {
    setFullscreen(breakpoint);  
    
    <Button className="me-2 mb-2" onClick={() => handleShow(values)}>
          Full screen 
        </Button>
    setShow(true);
  }

  
  const fetchNews = async () => {
    try {
      const response = await userServices().getUser();
      setFormData(response.data);
    } catch (error) {
      console.log('Error fetching news:', error);
    }
  };

  const deleteNews = async (id:number)=>{
  try{
const response = await userServices().deleteNews(id)
 console.log('response', response);
 fetchNews();
  }
  catch (error){
    console.log('errot',error)
  }
  };

  // const updateEmployee = async () => {
  //   try {
  //     await userServices().updatePeople(currentEmployee.id, currentEmployee);
  //     fetchEmployee();
  //     handleClose();
  //     setCurrentEmployee({
  //       id: 0,
  //       name: '',
  //       email: '',
  //       phone: '',
  //       gender: '',
  //     });
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // const handleUpdateClick = (user: any) => {
  //   setCurrentEmployee({
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //     phone: user.phone,
  //     gender: user.gender,
  //   });
  //   handleShow();
  // };



  
  useEffect(() => {

    fetchNews();
  }, []);

  return (
    <>
   
      <div className="mb-3">
        <Link to={'/addNews'}>
          <Button variant="success">Add</Button>
        </Link>
          <Button className="me-2 mb-2" onClick={() => handleShow(values)}>
          Full screen 
        </Button>
      </div>

      {formData.length > 0 ? (
        <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Tagline</th>
              <th>Links</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.tagline}</td>
                <td>
                  <Link to={`/NewsDetail/${data.id}`} className="btn btn-info">
                    Read More
                  </Link>
                </td>
                <td>
                  <Button variant="danger" className="mr-2" onClick={()=> deleteNews(data.id)}>Delete</Button>
                  <Button variant="warning">Update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form>
            <Form.Group controlId="title">
                   <Form.Label>News Title</Form.Label>
                   <Form.Control
                     type="text"
                     className="form-control bg-dark text-white"
                      name="title"
                   />
                  </Form.Group>
                <Form.Group controlId="tagline">
                  <Form.Label>News Tagline</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="tagline"
                  
                  
                  />
                </Form.Group>
                <Form.Group controlId="content">
                  <Form.Label>News Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    className="form-control bg-dark text-white"
                    name="content"
                
                
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>News Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="form-control bg-dark text-white"
                    name="description"
                    
                  
                  />
                </Form.Group>
                <Form.Group controlId="category">
                  <Form.Label>News Category</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="category"
                    
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>News Image</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="image"
                  
                  />
                </Form.Group>
                <Form.Group controlId="video">
                  <Form.Label>News video Url</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="videoUrl"
                    
                  />
                </Form.Group>
                <br />
                <div className="d-grid gap-2">
                  <Button
                    variant="outline-light-primary"
                    className="col-lg-12"
                    style={{ background: 'red' }}
                    type="submit"
                    size="lg"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
          </>
      ) : (
        <p>No news available</p>
      )}
    </>
  );
};

export default Dashboard;
