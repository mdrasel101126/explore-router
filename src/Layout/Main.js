import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <p>I am from common</p>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
