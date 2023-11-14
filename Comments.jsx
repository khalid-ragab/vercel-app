import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import "./likes&comments.scss";
export default function Comments(props) {
    return ( 
        <div className="mb-5">
            <Navbar/>
            <li className="list-unstyled items">
                <div>
                    <img src={props.image} className="mr-3 text-center rounded-circle" alt="" width="50px" />
                    <h5 className="mt-0 mb-1">{props.name}</h5>
                    <label className="fw-bold fs-4 fst-italic">Comment:
                        <span className="fs-4 fw-normal fst-normal"> {props.text}</span>
                    </label>
                </div>
            </li>
        </div>
    );
}
