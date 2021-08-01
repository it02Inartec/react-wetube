import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';

import { SearchArea } from './SearchArea';
import WhatAreaWithErrorBoundary from './WatchArea';

export const App = () => {
    return(
        <div>
            <header>
                <Link to="/">WeTube</Link>
            </header>

            <Router>
                <SearchArea path="/" />
                <WhatAreaWithErrorBoundary path="/watch/:id" />
            </Router>

        </div>
    )
    // return React.createElement('div', { key: '1' }, [
    //     React.createElement('h2', { key: '01' }, 'WeTube'),

    //     React.createElement( Video, {
    //         title: 'The best video',
    //         dateAdded: '1 days',
    //         channel: 'New video',
    //         key: '1'
    //     }),

    //     React.createElement( Video, {
    //         title: 'The second best video',
    //         dateAdded: '2 days',
    //         channel: 'New second video',
    //         key: '2'
    //     }),

    //     React.createElement( Video, {
    //         title: 'The three best video',
    //         dateAdded: '3 days',
    //         channel: 'New three video',
    //         key: '3'
    //     }),
    // ])
};

ReactDOM.render( React.createElement(App), document.getElementById('root') );