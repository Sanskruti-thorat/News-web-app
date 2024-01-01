/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import { Form, Button, Modal, Table } from 'react-bootstrap';
import UserServices from "../Axios/user.services";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { MdLibraryAdd } from "react-icons/md";



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
  const [activeAdimin , setActiveAdimin] = useState('');
  const values = true;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState<NewsData[]>([]);
  const userServices = UserServices();
  const [currentNews , setCurrentNews] = useState({
    id: 0,
    title: '',
    tagline: '',
    content:'',
    description: '',
    imageUrl:'', 
    videoUrl:'',
    category: '',
  })


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

  const updateNews = async () => {
    try {
      await userServices().updateNews(currentNews.id, currentNews);
      fetchNews();
      setCurrentNews({
        id: 0,
        title: '',
        tagline: '',
        content:'',
        description: '',
        imageUrl:'', 
        videoUrl:'',
        category: '',
      });
      setShow(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpdateClick = (news: any) => {
    handleShow(values)
    setCurrentNews({
      id: news.id,
      title: news.title,
      tagline: news.tagline,
      content:news.content,
      description: news.description,
      imageUrl:news.imageUrl, 
      videoUrl:news.videoUrl,
      category: news.category,
    });
    setShow(true);
  };



  
  useEffect(() => {
    
  const loginData = localStorage.getItem('user_login');
  if (loginData) {
    const loggedInPerson = JSON.parse(loginData);
    const { name } = loggedInPerson;
    setActiveAdimin(name);
    
  } else {
    console.log("No login data found in localStorage");
  }

    fetchNews();
  }, []);

  return (
    <>
   
      <div className="mb-3">
        <div>
          <h1>Welcome : {activeAdimin} </h1>
        </div>
        <Link to={'/addNews'}>
          <Button variant="light"><MdLibraryAdd size={30} /></Button>
        </Link>
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
                  <Link to={`/NewsDetail/${data.id}`} className="btn dark">
                  <CgMoreO size={30} className="light" />
                  </Link>
                </td>
                <td>
                  <Button variant="dark" className="icon-button"  onClick={()=> deleteNews(data.id)}><AiFillDelete size={30} /></Button>
                  <Button variant="dark" className="icon-button"  onClick={()=>handleUpdateClick(data)}><FiEdit size={30} /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton >
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form  onSubmit={(e) => { e.preventDefault(); updateNews(); }}>
            <Form.Group controlId="title">
                   <Form.Label>News Title</Form.Label>
                   <Form.Control
                     type="text"
                     className="form-control bg-dark text-white"
                      name="title"
                      value={currentNews.title}
                      onChange={(e)=> setCurrentNews({...currentNews, title: e.target.value})}
                   />
                  </Form.Group>
                <Form.Group controlId="tagline">
                  <Form.Label>News Tagline</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="tagline"
                    value={currentNews.tagline}
                    onChange={(e)=> setCurrentNews({...currentNews, tagline: e.target.value})}
                  
                  
                  />
                </Form.Group>
                <Form.Group controlId="content">
                  <Form.Label>News Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    className="form-control bg-dark text-white"
                    name="content"
                    value={currentNews.content}
                    onChange={(e)=> setCurrentNews({...currentNews, content: e.target.value})}
                
                
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>News Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="form-control bg-dark text-white"
                    name="description"
                    value={currentNews.description}
                    onChange={(e)=> setCurrentNews({...currentNews, description: e.target.value})}
                    
                  
                  />
                </Form.Group>
                <Form.Group controlId="category">
                  <Form.Label>News Category</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="category"
                    value={currentNews.category}
                    onChange={(e)=> setCurrentNews({...currentNews, category: e.target.value})}
                    
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>News Image</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="image"
                    value={currentNews.imageUrl}
                    onChange={(e)=> setCurrentNews({...currentNews, imageUrl: e.target.value})}
                  
                  />
                </Form.Group>
                <Form.Group controlId="video">
                  <Form.Label>News video Url</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="videoUrl"
                    value={currentNews.videoUrl}
                    onChange={(e)=> setCurrentNews({...currentNews, videoUrl: e.target.value})}
                    
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
             Save Changes
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
