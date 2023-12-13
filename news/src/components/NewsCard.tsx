import { FC } from "react";
import { Link } from "react-router-dom";

interface NewsData {
  id: number;
  title: string;
  tagline: string;
  content: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface NewscardProps {
  data: NewsData;
}

const Newscard: FC<NewscardProps> = ({ data }) => {
  return (
    <div className='container' style={{  padding: '15px', borderRadius: '8px' }}>
      <div className='row justify-content-center'>
        <div className='col-md-12 col-sm-12 my-3 border-0'>
          <div className='card-img-top text-center'>
            <img src={data.imageUrl} alt="" className="img-fluid" />
          </div>
          <div className='card-body'>
            <div className='card-title fw-bold fs-4'>
              <h4>{data.title}</h4>
            </div>
            <div className='card-text'>
              <p>{data.tagline}
              <Link to={`/NewsDetail/${data.id}`}>Read More</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
