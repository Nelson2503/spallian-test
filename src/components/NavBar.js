import React, { useState } from "react";
import "../styles/navbar.css";

export const NavBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
    }

    return (
        <nav className="navbar">
            <div className="search_container">
                <input className="inp"
                type="text"
                placeholder="Search Pokemon by name"
                value={searchTerm}
                onChange={handleInputChange}
                />
                <button onClick={handleSearch} className="btn_search">Search</button>
            </div>
        </nav>
    )
}