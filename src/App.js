import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Signup from "./Components/Signup/Signup";
import Videos from "./Components/Videos/Videos";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BlogContext.Provider>
  );
}

export default App;
