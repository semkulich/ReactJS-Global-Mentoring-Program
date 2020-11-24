import React from "react";
import "./styles/styles.scss"
import Footer from "./components/footer/footer";
import Logo from "./components/logo/logo";
import Header from "./components/header/header";
import MovieList from "./components/movieList/movieList";
import ErrorBoundary from "./components/ErrorBoundary";

function App(props){
    const siteLogo = <Logo first={props.data.elements.logo.first} second={props.data.elements.logo.second}/>;
    return(
        <>
            <Header logo={siteLogo} slogan={props.data.elements.header.slogan}/>
            <ErrorBoundary>
                <MovieList movies={props.data.movieList} categories={props.data.categories}/>
            </ErrorBoundary>
            <Footer>
                {siteLogo}
            </Footer>
        </>
    )
}

export default App;
