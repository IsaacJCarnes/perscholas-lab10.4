import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList/BlogList";
import BlogPost from "./components/BlogPost/BlogPost";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminPage from "./components/AdminPage/AdminPage";
import Header from "./components/Header/Header";
import { posts } from "./lib/posts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const post = posts[2];
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/blog"
          element={<BlogList />}
        />
        <Route
          path="/blog/:blogId"
          element={<BlogPost title={post.title} content={post.content} />}
        />
      </Routes>
    </>
  );
}

export default App;
