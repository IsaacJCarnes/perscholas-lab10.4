import "./App.css";
import { Routes, Route } from "react-router-dom";

import { posts } from "./lib/posts";
import GuestRoute from "./components/GuestRoute/GuestRoute";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminPage from "./components/AdminPage/AdminPage";
import BlogList from "./components/BlogList/BlogList";
import BlogPost from "./components/BlogPost/BlogPost";

function App() {
  const post = posts[2];
  return (
    <>
      <Header />
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:blogId" element={<BlogPost />} />
        <Route element={<AuthRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
