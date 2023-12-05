import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../Axios/axiosInstance';

interface NewsData {
  id: number;
  title: string;
  tagline: string;
  content: string; // Adjust the type according to your API response
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
        const e = err as Error; // Explicitly type 'err' as 'Error'
        setError(e.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <h1>News Details</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Tagline: {blog.tagline}</p>
          <div>{blog.content}</div>
        </article>
      )}
    </>
  );
};

export default NewsDetail;
