import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><span className="heading">Cinefy</span></Link>
            <Link to="movies/popular"><span className="header-item">Popular</span></Link>
            <Link to="movies/upcoming"><span className="header-item">Upcoming</span></Link>
            <Link to="movies/top_rated"><span className="header-item">Top Rated</span></Link>
        </div>
    );
};

export default Header;