import React from "react";
import {useState, useEffect } from "react";

import './App.css'
import searchIcon from './search.svg'
import movieCard from "./movieCard";

// Apikey = b33c5bf3

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=b33c5bf3'

// const movie1 = {
//     "Title": "superman",
//     "Year": "2012",
//     "name": "movie",
//     "Poster": "N/A",
//     "Type": "movie"
// }

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movie, setMovies] = useState([])


    const searchMovies = async (title) => {
        const response = await fetch(`${url}&s={title}`)
        const data = await response.json()
        setMovies(data.Search); 
    }

    useEffect(() => {
        searchMovies('Guardian of the galaxy')
    }, [])

    return (
        <div className='app'>
            <h1>Movie land</h1>
            <div className="search">
                <input
                    placeholder="search for a movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movie?.length > 0
                    ? (
                        <div className="container">
                           {
                                movie.map((movie) => {
                                    <movieCard movie ={movie} />
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
