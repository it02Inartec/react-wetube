import React from 'react';

export const Video = ( props ) => {
    return (
        <div className="video-container">
            <div className="video-image">
                <img src={ props.thumbnail } alt={ props.title } />
            </div>
            <div className="video-info">
                <h3>{ props.title }</h3>
                <h4>{ props.dateAdded }</h4>
                <h4>{ props.channel }</h4>
                <p>{ props.description }</p>
            </div>
        </div>
    );
    // return React.createElement('div', {}, [
    //     React.createElement('h1', { key: '1' }, props.title),
    //     React.createElement('h2', { key: '2' }, props.dateAdded),
    //     React.createElement('h3', { key: '3' }, props.channel),
    // ]);
};