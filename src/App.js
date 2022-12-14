import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Friends from "./components/Friends/Friends";
import Main from "./Layout/Main";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "products",
          element: <Products></Products>,
        },
        {
          path: "friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: "/friend/:friendID",
          loader: async (params) => {
            console.log(params.params.friendID);
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.params.friendID}`
            );
          },
          element: <FriendDetails></FriendDetails>,
        },
        {
          path: "posts",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
        {
          path: "post/:postId",
          loader: async (params) => {
            //console.log(params.params.postId);
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.params.postId}`
            );
          },
          element: <PostDetail></PostDetail>,
        },
      ],
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "*",
      element: <div>Sorry Page Not Found 404!!</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
