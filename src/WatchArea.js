import React from 'react';
import axios from 'axios';

import * as AppContant from './AppConstants';
import { FormatNumber } from './FormatNumber';
import ErrorBoundary from './ErrorBoundary';

// use class components
class WatchArea extends React.Component {
    
    constructor() {
        super();
        this.state = { loading: true };
    }

    componentDidMount() {
        
        axios.get(`${ AppContant.VIDEO_URL }&id=${ this.props.id }`)
        .then( (res) => {
            const item = res.data.items[0];
            this.setState({
                title: item.snippet.title,
                views: item.statistics.viewCount,
                description: item.snippet.description,
                channel: item.snippet.channelTitle,
                likes: item.statistics.likeCount,
                url: item.id,
                loading: false
            });
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    render() {

        if ( this.state.loading ) {
            return <h1 className="loader">Loading...</h1>
        }

        const {
            title,
            views,
            description,
            channel,
            likes,
            url
        } = this.state;

        return (
            <div className="watch-area">
                <div className="player">
                    <iframe
                        src={`https://www.youtube.com/embed/${ url }`}
                        title={ title }
                        width="1050"
                        height="450"
                        frameBorder="0"
                        allow="autoplay encrypted-media"
                    ></iframe>
                </div>
                <h1> { title } </h1>
                <div className="video-stats">
                    <div>
                        <FormatNumber number={ views } /> Views
                    </div>
                    <div>
                        <FormatNumber number={ likes } /> Likes
                    </div>
                </div>

                <div className="channel-name">Channel { channel }</div>
                <p>
                    { description }
                </p>
            </div>
        )
    }
}

export default function WhatAreaWithErrorBoundary( props ) {
    return (
        <ErrorBoundary>
            <WatchArea {...props} />
        </ErrorBoundary>
    )
}