import React, { Component, Fragment } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { actions } from "../../app.module";

const ViewBlogPosts = (props) => {
  const dispatch = useDispatch();
  var posts = [];
  const [postss, setposts] = useState([]);

  const getBlogPosts = async () => {
    posts = await dispatch(actions.getBlogPosts());
    setposts(posts);

    console.log(posts);
  };

  var yellower = ["abcd", "sadas", "sfsf"];

  return (
    <div>
      <Button onClick={getBlogPosts}>Refresh</Button>
      <div>
        <Table>
          <thead>
            {postss.map((elem, index) => (
              <tr key={index}>
                <td>
                  <div>{elem}</div>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default ViewBlogPosts;
