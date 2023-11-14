import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";
import"./info.scss";
import Navbar from "./Navbar";
import posts from "./constants";
import Footer from "./Footer";
export default function Info(){
  const params = useParams()
  const {item} = params
  const data = posts[item];
    return ( 
      <div className="pt-5">
        <Navbar/>
    <div className="card w-100 bg-dark mt-5 shadow-lg">
        <h1 className="mx-auto text-white">{data.title}</h1>
    <div className="px-5">
      <div className="mx-5 text-white p-5">
        <p>{data.description}</p>
 </div>
 </div>
 <p className="text-secondary mx-auto fs-5">{data.date}</p>
 <p className="text-white mx-auto fs-5">{data.author}</p>
 <p className="text-white mx-auto fs-5">{data.likes}</p>
 </div>
 <h4 className="mt-4 text-center">Comments</h4>
 <div>
     {data.comment.map((comment, index) => (
          <div key={index} className="info ms-0 ms-sm-3">
            <img src={comment.image} alt="Avatar" className="info__image rounded-circle width:150px"/>
            <p className="text-dark fs-5 fw-bold">{comment.name}</p>
            <p className="text-dark fs-5">{comment.text}</p>
          </div>
        ))}
     </div>
   <Footer/>
  </div>
    )
}