/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useRef, useState } from "react";
import Annoucement from "./Annoucement";
import NewsPost from "./NewsPost";


const HomePage = () => {
  return (
    

    <>
      <Annoucement/>

      <NewsPost />
    </>
  );
};

export default HomePage;

// const [file, setFile] = useState<File | null>(null);
// const [imageUrl, setImageUrl] = useState<string | null>(null);

// const inputRef = useRef<HTMLInputElement>(null);

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
    //     setFile(e.target.files [0]);
    //   }
// };

// const handleUpload = () => {
  //   if (file) {
    
    //     const url = URL.createObjectURL(file);

    //     setImageUrl(url);
    
//   }
// };
{/* 
      <input type="file" ref={inputRef} name="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl !== null && (
        <img
          src={imageUrl}
          style={{ height: "100px", width: "200px" }}
          alt="Uploaded file"
          />
        )} */}