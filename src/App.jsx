import { useState } from "react";
import "./App.css";

import BlogList from "./components/BlogList/BlogList";
import BlogPost from "./components/BlogPost/BlogPost";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminPage from "./components/AdminPage/AdminPage";
import Header from "./components/Header/Header";
import { posts } from "./lib/posts";

function App() {
  const post = posts[2];
  return (
    <>
      <BlogPost title={post.title} content={post.content} />
    </>
  );
}

export default App;
