import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Post from "./pages/Post";
import { React, useState } from "react";

function App() {
  const [getPostContent, setGetPostContent] = useState([]);
  const getData = (post) => {
    setGetPostContent(post);
  };
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage data={getData} />} />
          <Route path="/post/:id" element={<Post content={getPostContent} />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
