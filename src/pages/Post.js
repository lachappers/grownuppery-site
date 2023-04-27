import { React, useState, useEffect } from "react";
import EmptyList from "../components/EmptyList";
import Chip from "../components/Chip";
import "../styles/index.css";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <>
      <Link className="post-goBack" to="/">
        <span>&#8592</span>
        <span>Go Back</span>
      </Link>
    </>
  );
};

export default Post;
