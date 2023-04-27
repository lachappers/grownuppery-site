import { React, useState, useEffect } from "react";
import "../styles/index.css";
import SearchBar from "./SearchBar";
import EmptyList from "../components/EmptyList";
import PostList from "../components/PostList";
import { postList } from "../config/Api";
import grownupperyLogo from "../images/grownupperyLogo.png";
import ResponsiveHiddenNav from "./ResponsiveHiddenNav";

const Header = ({ data }) => {
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

  //   Clear search and show all blogs
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
    <header className="home-header">
      <section className="top-bar">
        <nav className="top-bar-left">
          <ul className="menu">
            <li>
              <a href="#"></a>Category 1
            </li>
          </ul>
        </nav>
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        {/* Add Blog List or Empty View to dropdown*/}
        {!PostList.length ? (
          <EmptyList />
        ) : (
          <PostList posts={posts} content={PostContent} />
        )}
      </section>
      <section className="row">
        <div className="medium-4 columns">
          <img src={grownupperyLogo} alt="grownuppery logo" />
        </div>
      </section>
      <section className="responsive-hidden-nav-container">
        <ResponsiveHiddenNav />
      </section>
    </header>
  );
};
export default Header;
