import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../Axios/axiosInstance';
import { Container, Card } from 'react-bootstrap';

interface NewsData {
  id: number;
  title: string;
  tagline: string;
  content: string;
  description: string;
  imageUrl: string;
  category: string;
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
      <h1 className="text-light font-weight-bold mb-4">News Details</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <Card bg="dark" text="white" className="p-4">
          <Card.Title as="h2" className="font-weight-bold">{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2">{blog.tagline}</Card.Subtitle>
          <Card.Text>{blog.description}</Card.Text>
        </Card>
      )}
    </Container>
  );
};

export default NewsDetail;
