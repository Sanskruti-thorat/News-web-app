// import { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import UserServices from "../Axios/user.services";
// import NewsCard from "./NewsCard";

// interface NewsData {
//   id: number;
//   title: string;
//   tagline: string;
//   content: string;
//   description: string;
//   imageUrl: string;
//   category: string;
// }

// const NewsPost = () => {
//   const [formData, setFormData] = useState<NewsData[]>([]);
//   const userServices = UserServices();

//   const fetchNews = async () => {
//     try {
//       const response = await userServices().getUser();
//       setFormData(response.data);
//     } catch (error) {
//       console.log('Error fetching news:', error);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   return (
//     <Container className="mt-4">
//       <h1 className="mb-4">News Posts</h1>
//       {formData.length > 0 ? (
//         <Row>
//           {formData.map((data) => (



//             <Col key={data.id} md={4} className="mb-4">


//               <NewsCard data={data} />
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <p>No news available</p>
//       )}
//     </Container>
//   );
// };

// export default NewsPost;




import  { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NewsCard from "./NewsCard";
import CatButton from "./CatButton";
import data from '../data.json';
import { FaSearch } from "react-icons/fa";
// import Annoucement from "./Annoucement";



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

const NewsPost = () => {
  const [formData, setFormData] = useState<NewsData[]>([]);
  const [filteredItems, setFilteredItems] = useState<NewsData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categoryItems = [...new Set(formData.map((val) => val.category))];

  useEffect(() => {
    // Simulating fetching data from UserServices
    const fetchData = async () => {
      // Replace this with your actual fetching logic
      // const response = await UserServices().getUser();
      // setFormData(response.data.posts);

      // Simulating data from data.json
      setFormData(data.posts);
      setFilteredItems(data.posts);
    };

    fetchData();
  }, []);

  const filterNews = (cat: string) => {
    if (cat === "All") {
      setFilteredItems(formData);
    } else {
      const newItems = formData.filter((newval) => newval.category === cat);
      setFilteredItems(newItems);
    }
  };


  const handleSearch = () => {
    const searchResults = formData.filter(
      (news) =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(searchResults);
  };
  const sortedItems = filteredItems.slice().sort((a, b) => b.id - a.id);

  return (
    <Container className="mt-4">

       <Form className="mb-4">
        <Form.Group controlId="searchTerm">
          <Form.Control
            type="text"
            placeholder="Search by title or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        <Button  className="btn-light" onClick={handleSearch}>
        <FaSearch />
       </Button>
      </Form>
      <CatButton catItems={categoryItems} filterItem={filterNews} setItems={setFilteredItems} />
      {sortedItems.length > 0 ? (
        <Row>
          {sortedItems.map((data) => (
            <Col key={data.id} md={4} className="mb-4">
              <NewsCard data={data}  />
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

