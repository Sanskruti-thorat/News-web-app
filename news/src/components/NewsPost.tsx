import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserServices from "../Axios/user.services";
import NewsCard from "./NewsCard";

interface NewsData {
  id: number;
  title: string;
  tagline: string;
  content: string;
  description: string;
  imageUrl: string;
  category: string;
}

const NewsPost = () => {
  const [formData, setFormData] = useState<NewsData[]>([]);
  const userServices = UserServices();

  const fetchNews = async () => {
    try {
      const response = await userServices().getUser();
      setFormData(response.data);
    } catch (error) {
      console.log('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">News Posts</h1>
      {formData.length > 0 ? (
        <Row>
          {formData.map((data) => (
            <Col key={data.id} md={4} className="mb-4">
              <NewsCard data={data} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>No news available</p>
      )}
    </Container>
  );
};

export default NewsPost;
