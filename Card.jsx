import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default function Card(props) {
  return (
    <div className="col-md-4 mt-5 g-5 mr-5"> 
      <div className="card shadow-lg specialCard">
        <img src={props.img} className="card-img-top" alt=""/>
        <div className="card-body bg-light mx-auto">
          <h5 className="card-title text-black-50 my-auto text-center">{props.name}</h5>
           </div>
      </div>
    </div>
  );
}
