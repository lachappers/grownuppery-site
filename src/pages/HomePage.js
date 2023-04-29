import { React, useState, useEffect } from "react";

import Header from "../components/Header";
import Main from "../components/Main";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <br />
      <Main />
    </div>
  );
};

export default HomePage;
