import  { useEffect, useState } from "react";
import UserServices from "../Axios/user.services";
import { Link } from "react-router-dom";

interface NewsData {
  id: number;
  title: string;
  tagline: string;
}

const NewsPost = () => {
  const [formData, setFormData] = useState<NewsData[]>([]);
  const userServices = UserServices();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await userServices().getUser();
        setFormData(response.data);
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <h1>NewsPost</h1>

      {formData.length > 0 ? (
        <>
      <img src="https://imagez.tmz.com/image/c1/4by3/2020/07/30/c115ad2dc849438a97a0ad3097b416df_md.jpg" height={"550px"} width={"550px"} alt="" />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Tagline</th>
              <th>Action</th>
            </tr>
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
