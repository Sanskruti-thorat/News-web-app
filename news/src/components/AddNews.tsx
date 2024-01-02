/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserServices from '../Axios/user.services';

const Addnews = () => {
  const [newsData, setNewsData] = useState({
    id: null,
    title: '',
    tagline: '',
    content: '',
    description: '',
    imageUrl: '',
    videoUrl:'',
    category: '',
  });

  const userServices = UserServices();

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setNewsData({
      ...newsData,
      [name]: value,
    });
  };

  const handleImageChange = (e:any) => {
    const image = e.target.value;
    // const image = URL.createObjectURL(e.target.files[0]);
    // this worked as well but after a while the link doesnt work so used path instead 
    setNewsData({
      ...newsData,
      imageUrl: image,
    });
  };
  const handleVideoChange = (e: any) => {
    const videoUrl = e.target.value;
    setNewsData({
      ...newsData,
      videoUrl: videoUrl,
    });
  };

  const addNews = async (e:any) => {
    e.preventDefault();
    try {
      const response = await userServices().addNews(newsData);
      console.log('response', response);
      setNewsData({
        id: null,
        title: '',
        tagline: '',
        content: '',
        description: '',
        imageUrl: '',
        videoUrl:'',
        category: '',
      });
      // fetchNews();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Link to="/dashboard">
            <button className="btn btn-secondary mb-3">Back</button>
          </Link>
          <Card bg="dark" text="white">
            <Card.Header>
              <h3 className="mb-0">Add News</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={addNews}>
                <Form.Group controlId="title">
                  <Form.Label>News Title</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="title"
                    value={newsData.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="tagline">
                  <Form.Label>News Tagline</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="tagline"
                    value={newsData.tagline}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="content">
                  <Form.Label>News Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    className="form-control bg-dark text-white"
                    name="content"
                    value={newsData.content}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>News Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="form-control bg-dark text-white"
                    name="description"
                    value={newsData.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="category">
                  <Form.Label>News Category</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="category"
                    value={newsData.category}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>News Image</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="image"
                    onChange={handleImageChange}
                  />
                </Form.Group>
                <Form.Group controlId="video">
                  <Form.Label>News video Url</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control bg-dark text-white"
                    name="videoUrl"
                    onChange={handleVideoChange}
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
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Addnews;

