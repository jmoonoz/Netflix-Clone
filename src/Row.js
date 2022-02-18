import React, { useState, useEffect } from 'react';
import "./style/Row.css";
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// base url for image
const img_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    // use state
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    //snippet of code for specific condition
    useEffect(() => {
        // if [], run once when the row loads and dont run again
        // asyncronus call
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // for youtube video to play
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoPlays: 1,
        },
    };

    // when user clicks on the picture to play video
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlPrams = new URLSearchParams(new URL(url).search);
                    // gets the value of V
                    setTrailerUrl(urlPrams.get('v')); 
                })
                .catch((error) => console.log(error));
        }

    }



    return (
        <div className="row">
            {/* titls */}
            <h2>{title}</h2>
            <div className="row-posters">
                {/* row poster */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                        src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
export default Row;