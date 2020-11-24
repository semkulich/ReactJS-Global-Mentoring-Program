import React from "react";
import "./searchBar.scss"

export default () => {
    return(
        <div className="search">
            <input type="text" placeholder="What do you want to watch?"/>
            <a className="searchButton">Search</a>
        </div>
    )
}
