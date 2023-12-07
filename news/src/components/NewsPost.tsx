import  { useEffect, useState } from "react";
import UserServices from "../Axios/user.services";
import { Link } from "react-router-dom";
import logo from '../../public/luca-bravo-XJXWbfSo2f0-unsplash.jpg'

interface NewsData {
  id: number;
  title: string;
  tagline: string;
  imageUrl:string;
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
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Tagline</th>
              <th>Action</th>
            </tr>
            <img src={logo} height={"100px"} width={"100px"} alt="" />
          </thead>
          <tbody>
            {formData.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
                <td>{data.tagline}</td>
                <td>
                  <Link to={`/NewsDetail/${data.id}`}>Read More</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      ) : (
        <p>No news available</p>
      )}
    </>
  );
};

export default NewsPost;
