import React from "react";
import "./movieItem.scss"
import img from '../../../movie.jpg';

export default (props) => {
    return(
        <div className="movieItem" key={props.movieItem.id}>
            <div className="dots"/>
            <img src={img} />
            <div className="description">
                <div className="col">
                    <h4>{props.movieItem.title}</h4>
                    <p>{props.movieItem.genre}</p>
                </div>
                <div className="col">
                    <div className="year">{props.movieItem.year}</div>
                </div>
            </div>
        </div>
    )
}
