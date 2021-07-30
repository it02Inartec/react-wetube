import React, { useState } from 'react';
import axios from 'axios';

import { Results } from './Results';

export const SearchArea = () => {

    const [ keyword, setKeyword ] = useState('palabras');
    const [videos, setVideos] = useState([]);

    const requestSearch = () => {
        // maxResults=25 is for limit results (default=5)
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?type=video&q=${ keyword }&part=snippet&key=${ process.env.API_KEY }`)
        .then( ( res ) => {
            const { items } = res.data;
            console.log(items)
            setVideos( items );
        })
        .catch( ( err ) => console.log( err ))
    };

    return (
        <div className="search-area">
            <form
                onSubmit={ (e) => {
                    e.preventDefault();
                    requestSearch();
                }}
            >
                <label htmlFor="keyword">
                    Seach 
                    <input 
                        type="text" 
                        id="keyword" 
                        value={ keyword }
                        onChange={ (e) => setKeyword( e.target.value ) }
                    />
                </label>
                <button>
                    Submit
                </button>
            </form>
            <Results videos={ videos } />
        </div>
    )
};
