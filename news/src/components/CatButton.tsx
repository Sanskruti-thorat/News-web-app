// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "react-bootstrap";
// import data from '../data.json'

// const CatButton = ({catItems , filterItem , setItems }:any) => {
//     return ( <>
//     <div className="d-flex justify-content-center">
//         {
//             catItems.map((val:any)=>(

//                 <>
//                 <Button onClick={()=>filterItem(val)} >
//                 {val}
//                 </Button>
//                 </>
//             ))
//         }


//                <Button onClick={setItems(data.posts)} >
//              All
//                 </Button>
//     </div>
    
//     </> );
// }
 
// export default CatButton;














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
    videoUrl:string;
    category: string;
  }

interface CatButtonProps {
  catItems: string[];
  filterItem: (cat: string) => void;
  setItems: React.Dispatch<React.SetStateAction<NewsData[]>>;
}

const CatButton = ({ catItems, filterItem, setItems }:CatButtonProps) => {
  const handleAllButtonClick = () => {
    setItems(data.posts);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
      <Button className="btn btn-secondary mb-3" onClick={handleAllButtonClick}>All</Button>
      <br />
        {catItems.map((val: string) => (
          <Button className="btn btn-secondary mb-3" key={val} onClick={() => filterItem(val)}>
            {val}
          </Button>
        ))}
  
      </div>
    </>
  );
};

export default CatButton;
