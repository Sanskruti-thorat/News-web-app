import { FC } from "react";

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
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-4 col-sm-6 my-3 border-0'>
          <div className='card-img-top text-center'>
            <img src={data.imageUrl} alt="" className="img-fluid" />
          </div>
          <div className='card-body'>
            <div className='card-title fw-bold fs-4'>
              <h4>{data.title}</h4>
            </div>
            <div className='card-text'>
              <p>{data.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
