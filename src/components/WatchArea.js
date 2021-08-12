import React from 'react';
import axios from 'axios';

import * as AppContant from '../helpers/AppConstants';
import { FormatNumber } from '../helpers/FormatNumber';
import ErrorBoundary from './ErrorBoundary';
import { ColorContext } from '../contexts/ColorContext';
import Modal from '../components/Modal';
import { navigate } from '@reach/router';

// use class components
class WatchArea extends React.Component {
    
    constructor() {
        super();
        this.state = { loading: true, showModal: false };
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

    goToYoutube = () => {
        // console.log('hooolaa :)')
        window.open(`https://www.youtube.com/watch?v=${ this.state.url }`);
        // navigate(`https://www.youtube.com/watch?v=${ this.state.url }`);
    };

    // babel-eslint
    toggleModal = () => this.setState({ showModal: !this.state.showModal });
    
    render() {

        if ( this.state.loading ) {
            return <h1 className="loader"></h1>
        }

        const {
            title,
            views,
            description,
            channel,
            likes,
            url,
            showModal
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

                <ColorContext.Consumer>
                    {
                        // ( themeColor ) => (
                        //     <button style={{ backgroundColor: themeColor[0] }}>
                        //         Watch on Youtube
                        //     </button>
                        // )
                        ( [themeColor] ) => (
                            <button
                                style={{ backgroundColor: themeColor }}
                                onClick={ this.toggleModal }
                            >
                                Watch on Youtube
                            </button>
                        )
                    }
                </ColorContext.Consumer>

                <p> { description } </p>

                {
                    showModal && (
                        <Modal>
                            <div>
                                <h1>
                                    Would you like to watch this video on Youtube?
                                </h1>
                                <div className="buttons">
                                    <button className="btn-green" onClick={ this.goToYoutube }>Yes</button>
                                    <button onClick={ this.toggleModal }>No</button>
                                </div>
                            </div>
                        </Modal>
                    )
                }
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