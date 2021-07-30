import React from 'react';
import ReactDOM from 'react-dom';

import { SearchArea } from './SearchArea';

export const App = () => {
    return(
        <div>
            <header>
                <h2>WeTube</h2>
            </header>

            <SearchArea />

            {/* <Video
                title="The best video"
                dateAdded="1 day"
                channel="New video"
                key="1"
            /> */}

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