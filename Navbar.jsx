import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isActiveMostLikedPost = location.pathname.startsWith("/Mostlikedpost") || location.pathname.startsWith("/Likes");
    const isActiveLikesPage = location.pathname.startsWith("/Likes");
    const isCommentsPage = location.pathname === "/Comments" || location.pathname.startsWith("/Comments");
    const mostCommentPostMatch = isCommentsPage || location.pathname === "/MostCommentPost";
    const authorsMatch = location.pathname === "/";

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <div className={`navBar1${isActiveMostLikedPost || mostCommentPostMatch ? (isActiveLikesPage ? 'mb-5' : '') : ''}`}>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3 fixed-top">
                <div className="container-fluid">
                    <li className="nav-item"><a className="jsom text-white fw-bold custom-font-size text-decoration-none" href="/">JSOM</a></li>
                    <button
                        aria-label="Toggle navigation"
                        type="button"
                        className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`}
                        onClick={handleNavCollapse}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'} `} style={{ color: 'white', width: 'auto' }}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    className={`authors text-secondary fw-bold custom-font-size text-decoration-none ${authorsMatch ? 'active-link' : ''}`}
                                    to="/"
                                >
                                    Authors
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`liked text-secondary fw-bold custom-font-size text-decoration-none ${isActiveMostLikedPost ? 'active-link' : ''}`}
                                    to="/Mostlikedpost"
                                >
                                    MostLikedPost
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`text-secondary fw-bold custom-font-size text-decoration-none ${mostCommentPostMatch ? 'active-link' : ''}`}
                                    to="/MostCommentPost"
                                >
                                    MostCommentPost
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
