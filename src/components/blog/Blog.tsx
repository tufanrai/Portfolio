import React from "react";
import BlogListCard from "../Cards/BlogListCard";

const Blog = () => {
  return <div className="w-full h-screen flex jsutify-center">
    <div className="max-w-[1280px] w-full h-screen px-8 py-4 flex flex-wrap overflow-x-hidden overflow-y-auto gap-4">
      <BlogListCard link="blogs/auth_form" date="2025-10-03" title="Simple login/registration form using MERN Stack" description="This blog teaches you how to build a very super simple login and registration form using MERN Stack web application development."/>
    </div>
  </div>;
};

export default Blog;
