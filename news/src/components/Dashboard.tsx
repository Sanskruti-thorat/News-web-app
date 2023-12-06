        import  { useEffect, useState } from "react";
        import UserServices from "../Axios/user.services";
        import { Link } from "react-router-dom";
        
        interface NewsData {
            id: number;
            title: string;
            tagline: string;
        }
        const Dashboard = () => {
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
            return (<>
        <h1>Dashboard</h1>
  
        {formData.length > 0 ? (
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
        ) : (
          <p>No news available</p>
        )}
      </> );
}
 
export default Dashboard;








