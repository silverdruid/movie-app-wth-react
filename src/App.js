import React from "react";
import {useState, useEffect } from "react";

import './App.css'
import searchIcon from './search.svg'
import movieCard from "./movieCard";

// Apikey = b33c5bf3

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=b33c5bf3'

const movie1 = {
    "Title": "superman",
    "Year": "2012",
    "name": "movie",
    "Poster": "N/A",
    "Type": "movie"
}

const App = () => {
    const [movie, setMovies] = useState([])


    const searchMovies = async (Title) => {
        const response = await fetch(`${url}&{Title}`)
        const data = await response.json()
        setMovies(data.Search); 
    }

    useEffect(() => {
        searchMovies('Thor')
    }, [])

    return (
        <div className='app'>
            <h1>Movie land</h1>
            <div className="search">
                <input
                    placeholder="search for a movie"
                    value=''
                    onChange={() => {

                    }}
                />

                <img
                    src={searchIcon}
                    alt='search'
                    onclick={() => {
                        
                    }}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                           {
                                movies.map((movies) => {
                                    <movieCard movie={movie} />
                            })
                           }
                        </div>   
                    ) : (
                        <div className="empty">
                            <h2>no movies found</h2>
                        </div>
                )
            }
            
        </div>

      
    )
    
};

export default App;
