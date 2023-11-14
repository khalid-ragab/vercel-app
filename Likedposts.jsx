import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Mostlikedpost from "./Mostlikedpost";
import Footer from "./Footer";
const posts=[
   {
    text:"encryption",
    date:"12/10/2019",
    likes:"Likes 16",
   },
   {
    text:"Savings Account",
    date:"6/19/2019",
    likes:"Likes 15",
   },
   {
    text:"neural-net",
    date:"2/19/2020",
    likes:"Likes 14",
   },
   {
    text:"Expanded AI bypassing",
    date:"11/15/2019",
    likes:"Likes 14",
   },
   {
    text:"evolve",
    date:"8/19/2019",
    likes:"Likes 14",
   },
   {
    text:"Security Automotive",
    date:"1/26/2020",
    likes:"Likes 14",
   },
   {
    text:"Gorgeous Berkshire Practical",
    date:"4/15/2020",
    likes:"Likes 13",
   },
   {
    text:"South Georgia and the South Sandwich Islands Liasion schemas",
    date:"6/19/2019",
    likes:"Likes 13",
   },
   {
    text:"Lead",
    date:"8/23/2019",
    likes:"Likes 13",
   },
   {
    text:"invoice override Tasty",
    date:"4/28/2020",
    likes:"Likes 13",
   },
]
export default function Likedposts() {
  return (
    <div>
        <div className="column mt-5 pt-5">
        {posts.map((post, index) => (
          <Mostlikedpost key={index} text={post.text} date={post.date} likes={post.likes} id={index}/>
        ))}
        </div>
        <Footer/>
    </div>
  );
}