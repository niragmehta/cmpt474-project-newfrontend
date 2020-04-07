import React, { Component, Fragment } from "react";
import ViewBlogPosts from "./ViewBlogPosts";
import AddBlogPost from "./Addblogpost";
import { useState } from "react";

const BlogPost = (props) => {
  return (
    <div>
      <AddBlogPost />
      <ViewBlogPosts />
    </div>
  );
};

export default BlogPost;
