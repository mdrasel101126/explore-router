import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  //console.log(post);
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <p>Title:{title}</p>
      <p>
        <small>{body}</small>
      </p>
      <Link to={`/post/${id}`}>Detail1</Link>
      <Link to={`/post/${id}`}>
        <button>Detail2</button>
      </Link>
      <button onClick={handleNavigate}>Detail3</button>
    </div>
  );
};

export default Post;
