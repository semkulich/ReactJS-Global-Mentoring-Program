import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMovie} from "./storage/dataStorage";

export let rendererDOM = (state) => {
    ReactDOM.render(<App data={state} addMovie={addMovie}/>, document.getElementById('root'));
};
