import React from "react";
import BlogListCard from "../Cards/BlogListCard";

const Blog = () => {
  return (
    <div className="w-full h-screen flex jsutify-center">
      <div className="max-w-[1280px] w-full px-8 py-4 flex flex-col items-start justify-start gap-4">
        <BlogListCard
          link="blogs/auth_form"
          date="2025-10-03"
          title="Simple login/registration form using MERN Stack"
          description="This blog teaches you how to build a very super simple login and registration form using MERN Stack web application development."
        />
        <BlogListCard
          link="blogs/note-taking-app"
          date="2025-10-13"
          title="Simple Note Taking App - MERN"
          description="This blog walks you through the entire process of building a simple note taking app."
        />
      </div>
    </div>
  );
};

export default Blog;
