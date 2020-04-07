import React, { Component, Fragment } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { actions } from "../../app.module";

const AddBlogPost = (props) => {
  const dispatch = useDispatch();
  const [post, addpost] = useState("");

  const onAddBlogPost = async () => {
    const errCode = await dispatch(actions.addBlogpost(post));
  };

  return (
    <div className="form-group">
      <label>Enter comment</label>
      <textarea
        className="form-control"
        id="blogpost"
        rows="3"
        value={post}
        onChange={(e) => addpost(e.target.value)}
      />
      <Button onClick={onAddBlogPost}>Submit</Button>
    </div>
  );
};

export default AddBlogPost;
