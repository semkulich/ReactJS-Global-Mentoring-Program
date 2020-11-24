import React from "react";
import MovieItem from "./movieItem/movieItem";
import MovieCount from "./movieCount/movieCount";
import MovieBar from "./movieBar/movieBar";
import "./movieList.scss";
import PropTypes from "prop-types";

const MovieList = (props) => {
    let movies = props.movies.map((movie) => <MovieItem key={movie.id} movieItem = {movie}/>)
    let count = <strong>{movies.length}</strong>;
    let countText = movies.length > 1 ? <>{count} <span>movies found</span></> : <>{count} <span>movie found</span></>
    let id = -1;
    let categories = props.categories.map((category) => {
        id++;
        let classes =  id === 0 ? 'category-item active' : 'category-item'
        return (
            <a key={id} className={classes} href="#">{category}</a>
        )
    })
    return(
        <div className="movieList container">
            <MovieBar>
                <div className="categoriesWrapper">{categories}</div>
                <div className="filterWrapper">
                    <span>sort by</span>
                    <select>
                        <option>release date</option>
                        <option>genre</option>
                        <option>title</option>
                    </select>
                </div>
            </MovieBar>
            <MovieCount count={countText}/>
            <div className="movieListWrapper">{movies}</div>
        </div>
    )
}

MovieList.propTypes = {
    categories: PropTypes.array.isRequired,
    movies: PropTypes.array.isRequired,
}

export default MovieList
