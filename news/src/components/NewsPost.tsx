import { useEffect, useState } from "react";
import UserServices from "../Axios/user.services";
import Newscard from "./NewsCard";

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
    <>
      <h1>NewsPost</h1>
      {formData.length > 0 ? (
        <>
          {formData.map((data) => (
            <Newscard key={data.id} data={data} />
          ))}
        </>
      ) : (
        <p>No news available</p>
      )}
    </>
  );
};

export default NewsPost;
