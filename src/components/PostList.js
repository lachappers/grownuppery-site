import React from "react";
import "../styles/index.css";
import PostItem from "./PostItem";

const PostList = ({ posts, content }) => {
  return (
    <div className="postList-wrap">
      {posts.map((post) => (
        <PostItem post={post} content={content} />
      ))}
    </div>
  );
};

export default PostList;
