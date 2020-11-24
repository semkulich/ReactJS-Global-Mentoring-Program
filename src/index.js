import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from './storage/dataStorage'

ReactDOM.render(
    <React.StrictMode>
        <App data={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);
