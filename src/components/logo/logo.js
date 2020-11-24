import React from "react";
import "./logo.scss"
import PropTypes from "prop-types";

export default function Logo (props) {
    return (
        <div className="logo">
            <strong>{props.first}</strong><span>{props.second}</span>
        </div>
    );
}

Logo.propTypes = {
    first: PropTypes.string.isRequired,
    second: PropTypes.string,
}
