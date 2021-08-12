import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import * as AppContant from '../helpers/AppConstants';
import { useDropdown } from '../hooks/useDropdown';
import { Results } from './Results';
import { ColorContext } from '../contexts/ColorContext';

export const SearchArea = () => {
    const [ themeColor, setThemeColor ] = useContext( ColorContext );
    const [ keyword, setKeyword ] = useState('palabras');
    const [videos, setVideos] = useState([]);
    const orderList = [ 'rate', 'relevance', 'rating', 'title', 'viewCount' ];
    const [ order, OrderDropdown ] = useDropdown('Order By', 'relevance', orderList);
    const [ safeSearch, SafeSearchDropdown] = useDropdown('Safe Search', 'none',[
        'moderate', 'none', 'strict'
    ]);

    const [checked, setChecked] = useState(false);
    const [searchAvanced, setSearchAvanced] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       if ( checked ) {
        setSearchAvanced(`&order=${ order }&safeSearch=${ safeSearch }`);
       } else {
        setSearchAvanced(``);
       }
    }, [ checked, order, safeSearch ])

    const requestSearch = () => {
        setLoading( true );
        axios.get(`${ AppContant.SEARCH_URL }&q=${ keyword }${ searchAvanced }`)
        .then( ( res ) => {
            const { items } = res.data;
            setVideos( items );
            setLoading( false );
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

                <label htmlFor="advance">
                    Advance search
                    <input
                        type="checkbox"
                        id="advance"
                        checked={ checked }
                        onChange={ () => setChecked( !checked ) }
                    />
                </label>

                {
                    checked && <div>
                        <OrderDropdown />
                        <SafeSearchDropdown />
                        <label htmlFor="themeColor">
                            Theme Color
                            <select
                                value={ themeColor }
                                onChange={ (e) => setThemeColor( e.target.value ) }
                                onBlur={ (e) => setThemeColor( e.target.value ) }
                            >
                                <option value="#ad343e">Dark red</option>
                                <option value="darkblue">Dark Blue</option>
                                <option value="green">Green</option>
                                <option value="aqua">Aqua</option>
                            </select>
                        </label>
                    </div>
                }

                <button style={ { backgroundColor: themeColor } }>
                    Submit
                </button>
            </form>

            <Results
                videos={ videos }
                loading={ loading }
            />
            
        </div>
    )
};
