import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Mostcommentpost from "./Mostcommentpost";
import Footer from "./Footer";
const posts2=[
   {
    text:"synthesizing Branding Heard Island and Mcdonald Islands",
    date:"2/12/2020",
    Comments:"Comments 8",
   },
   {
    text:"Usability agragate USB",
    date:"11/9/2019",
    Comments:"Comments 8",
   },
   {
    text:"Refined Frozen Tuna Senior bluetooth",
    date:"3/7/2020",
    Comments:"Comments 8",
   },
   {
    text:"infomediaries",
    date:"5/2/2020",
    Comments:"Comments 8",
   },
   {
    text:"Forward",
    date:"2/22/2020",
    Comments:"Comments 8",
   },
   {
    text:"transition Wells",
    date:"8/8/2019",
    Comments:"Comments 8",
   },
   {
    text:"Heights",
    date:"7/26/2019",
    Comments:"Comments 7",
   },
   {
    text:"invoice deposit",
    date:"6/15/2019",
    Comments:"Comments 7",
   },
   {
    text:"Lempira",
    date:"1/24/2020",
    Comments:"Comments 7",
   },
   {
    text:"Refined Granite Shoes Investement Account microchip",
    date:"8/22/2019",
    Comments:"Comments 7",
   },
]
export default function Commentposts() {
  return (
    <div>
        <div className="column mt-5 pt-5">
        {posts2.map((post, index) => (
          <Mostcommentpost key={index} text={post.text} date={post.date} Comments={post.Comments} id={index}/>
        ))}
        </div>
        <Footer/>
    </div>
  );
}