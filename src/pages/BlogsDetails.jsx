import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = () => {
  const location = useLocation();
  console.log('💚💚💛🧡', location);
  const { image, date, title, description, author } = location.state;
  return (
    <div className="min-h-[550px] pt-20">
      <div className="h-[600px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[600px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold mb-10">{title}</h1>
        <p>{description}</p>
      </div>
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
