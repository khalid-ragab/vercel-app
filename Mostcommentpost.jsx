import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
export default function Mostcommentpost(props) {
    return (
        <div id="Mostcommentpost">          
           <Navbar/>
           <div className="container">
         <ul className="list-group">
            <a href={`/Comments/${props.id}`}>
            <h5 className="list-group-item row mx-auto ">
            <span className="d-inline-block col-sm-4 text-primary">{props.text}</span>
            <span className="d-inline-block col-sm-4  text-info px-5">{props.date}</span>
            <span className="d-inline-block col-sm-4 text-danger px-5">{props.Comments}</span>
            </h5>
            </a>
            </ul>
            </div>
            </div>
    );
}