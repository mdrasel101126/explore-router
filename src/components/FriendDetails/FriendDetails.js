import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  //console.log(friend);
  const { name, phone } = friend;
  return (
    <div>
      <h1>Details of {name}</h1>
      <p>Phone : {phone}</p>
    </div>
  );
};

export default FriendDetails;
