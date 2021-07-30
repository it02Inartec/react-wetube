import React, { useState } from 'react';
import axios from 'axios';

import { Results } from './Results';
import * as AppContant from './AppConstants';

export const SearchArea = () => {

    const [ keyword, setKeyword ] = useState('palabras');
    const [videos, setVideos] = useState([]);

    const requestSearch = () => {
        axios.get(`${ AppContant.SEARCH_URL }&q=${ keyword }`)
        .then( ( res ) => {
            const { items } = res.data;
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
