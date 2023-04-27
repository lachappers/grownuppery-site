import { React, useState, useEffect } from "react";
import EmptyList from "../components/EmptyList";
import PostList from "../components/PostList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { postList } from "../config/Api";

const HomePage = ({ data }) => {
  const [posts, setPosts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  // Submit Search
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for post by category
  const handleSearchResults = () => {
    // handle search inputs
  };

  //   Clear dearch and show all blogs
  const handleClearSearch = () => {
    postList().then((result) => {
      setPosts(result);
    });
    setSearchKey("");
  };

  //   Get search results
  const PostContent = (id) => {
    data(id);
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Add Blog List or Empty View */}
      {!PostList.length ? (
        <EmptyList />
      ) : (
        <PostList posts={posts} content={PostContent} />
      )}
    </div>
  );
};

export default HomePage;
