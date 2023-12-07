/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef, useState } from "react";
import NewsPost from "./NewsPost";

const HomePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Use URL.createObjectURL to create a URL for the selected file
      const url = URL.createObjectURL(file);
      // Store the created URL in the state
      setImageUrl(url);

      // Implement your file upload logic here
      // You can use the 'file' state to access the selected file
      // For example, you might want to send it to a server using an HTTP request
    }
  };

  return (
    <>
      <input type="file" ref={inputRef} name="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl !== null && (
        <img
          src={imageUrl}
          style={{ height: "100px", width: "200px" }}
          alt="Uploaded file"
        />
      )}
      <NewsPost />
    </>
  );
};

export default HomePage;
