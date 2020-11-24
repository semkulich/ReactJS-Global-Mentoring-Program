import React from "react";
import AddMovieButton from "./addMovieButton/addMovieButton";
import SearchBar from "./searchBar/searchBar";
import "./header.scss"
import PropTypes from "prop-types"

const Header = (props) => {
    const Slogan = () => <h1 className="slogan">{props.slogan}</h1>
    const TopBar = () => {
        return (
            <div className="topBar">
                {props.logo}
                <AddMovieButton />
            </div>
        )
    }

    return(
        <div className="header container">
            <TopBar />
            <Slogan />
            <SearchBar/>
        </div>
    )
}

Header.propTypes = {
    slogan: PropTypes.string,
    logo: PropTypes.object.isRequired
}

export default Header
