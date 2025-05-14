import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Home from "./Components/PostList";
const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className="main-container">
        <Sidebar  setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

        <div className="content">
          <Navbar />
          {selectedTab === "Home" ? <Home /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
