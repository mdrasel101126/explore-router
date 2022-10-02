import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  //console.log(post);
  const navigate = useNavigate();
  const { title, body, userId, id } = post;
  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  return (
    <div>
      <h1>User No : {userId}</h1>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      <button onClick={handleNavigate}>Get the Author</button>
    </div>
  );
};

export default PostDetail;
