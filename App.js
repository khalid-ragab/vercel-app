import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Home from './Home';
import Likedposts from './Likedposts';
import Commentposts from './Commentposts';
import CommentInfo from './Commentsinfo'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Info from './Likesinfo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/Mostlikedpost",
    element: <Likedposts/>,
  },
  {
    path:"/Mostcommentpost",
    element: <Commentposts/>,
  },
  {
    path:"/Likes/:item",
    element: <Info/>,
  },
  {
    path:"/Comments/:items",
    element: <CommentInfo/>,
  },  
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}
export default App;
