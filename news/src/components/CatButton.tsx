/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "react-bootstrap";
import data from '../data.json';

interface NewsData {
  id: number;
  title: string;
  tagline: string;
  content: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  category: string;
}

interface CatButtonProps {
  catItems: string[];
  filterItem: (cat: string) => void;
  setItems: React.Dispatch<React.SetStateAction<NewsData[]>>;
}

const CatButton = ({ catItems, filterItem, setItems }: CatButtonProps) => {
  const handleAllButtonClick = () => {
    setItems(data.posts);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button className="btn btn-secondary mb-3 mx-2" onClick={handleAllButtonClick}>
          All
        </Button>
        {catItems.map((val: string) => (
          <Button className="btn btn-secondary mb-3 mx-2" key={val} onClick={() => filterItem(val)}>
            {val}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CatButton;
