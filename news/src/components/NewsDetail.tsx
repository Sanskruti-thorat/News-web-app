
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../Axios/axiosInstance';
import { Container, Card, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

interface NewsData {
  id: number;
  title: string;
  tagline: string;
  content: string;
  description: string;
  imageUrl: string;
  category: string;
  videoUrl: string;
}

const NewsDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<NewsData | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setBlog(response.data);
      } catch (err) {
        const e = err as Error;
        setError(e.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className="mt-5">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <Card bg="dark" text="white" className="p-4">
          <Card.Title as="h2" className="font-weight-bold">
            {blog.title}
          </Card.Title>
          <Card.Subtitle className="mb-2">{blog.tagline}</Card.Subtitle>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <div>
                <img
                  src={blog.imageUrl}
                  alt=""
                  className="img-fluid rounded"
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="text-white">
        </div>
        <p>Your are reading: {blog.category}</p>
      <div>
   <ReactPlayer 
   url={blog.videoUrl} 
   controls
   width="100%" 
   style={{ maxWidth: '100%', margin: '0 auto' }} 
    />

                <p>{blog.content}</p>
              </div>
            </Col>
          </Row>
          <Card.Text>{blog.description}</Card.Text>
        </Card>
      )}
    </Container>
  );
};

export default NewsDetail;
