/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';
import UserServices from "../Axios/user.services";

interface NewsData {
  id: number;
  title: string;
  tagline: string;
}

const Dashboard = () => {
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


  
  useEffect(() => {

    fetchNews();
  }, []);

  return (
    <>
   
      <div className="mb-3">
        <Link to={'/addNews'}>
          <Button variant="success">Add</Button>
        </Link>
      </div>

      {formData.length > 0 ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Tagline</th>
              <th>Links</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
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
      ) : (
        <p>No news available</p>
      )}
    </>
  );
};

export default Dashboard;
